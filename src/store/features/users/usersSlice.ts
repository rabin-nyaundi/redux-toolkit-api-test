import { updateUsers } from "./../../api/users";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "../../api/users";

export interface User {
  _id: number | any;
  name: String;
  email: String;
  occupation: String;
  bio: String;
}

export const UserResponse: User[] = [];

interface UserState {
  users: User[];
  isSuccess: boolean;
  isLoading: boolean;
  message: "";
}

const initialState = {
  isSuccess: false,
  isLoading: false,
  message: "",
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // @ts-ignore
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      // @ts-ignore
      state.users.push(payload);
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(getUsers.rejected, (state, { payload }) => {
      // @ts-ignore
      state.message = payload;
      state.isSuccess = false;
      state.isLoading = false;
    });

    builder.addCase(updateUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateUsers.fulfilled, (state, { payload }) => {
      // @ts-ignore
      const updatedUser = payload;
      // @ts-ignore
      const indexToUpdate = state.users[0].findIndex(
        (user) => user?._id === payload?._id
      );
      // @ts-ignore
      state.users[0][indexToUpdate] = {
        ...state.users[0][indexToUpdate],
        ...payload,
        // ...state.users.map((user) => {
        //   return user?._id === updatedUser?._id
        //     ? { ...user, ...updatedUser }
        //     : user;
        // }),
      };
    });
  },
});

export default usersSlice;
