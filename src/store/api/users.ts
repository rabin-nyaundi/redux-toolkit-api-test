import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsersAPI, patch } from "../../utils/API";
import { User } from "../features/users/usersSlice";
import type { AxiosError } from "axios";

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (arg, { rejectWithValue }) => {
    try {
      let data: any = [];
      await getUsersAPI()
        .then((response: Response) => {
          data.push(response);
        })
        .catch((error: Error) => {
          data.push(error);
        });
      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUsers = createAsyncThunk<{ id: string }, User>(
  "users/update",
  // @ts-ignore
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await patch(id, data);

      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
