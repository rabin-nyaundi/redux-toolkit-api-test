import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import usersSlice from "./features/users/usersSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      users: usersSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
