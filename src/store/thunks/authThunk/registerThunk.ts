import { registerUserApi } from "@/api/userApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type registerParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (
    { firstName, lastName, email, password, role = "User" }: registerParams,
    thunkAPI
  ) => {
    try {
      const response = await registerUserApi({
        firstName,
        lastName,
        email,
        password,
        role,
      });
      if (response.status === 201) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
