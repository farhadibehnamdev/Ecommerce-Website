import { logingUserApi } from "@/api/userApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export type loginParams = {
  email: string;
  password: string;
};
export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }: loginParams, thunkAPI) => {
    try {
      const response = await logingUserApi({ email, password });
      if (response.status !== 201) {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (e: any) {
      const message = e.response.data.message || e.message || "Unknown error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
