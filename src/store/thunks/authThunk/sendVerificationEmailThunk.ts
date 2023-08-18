import { sendVerificationEmailApi } from "@/api/userApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendVerificationEmailThunk = createAsyncThunk(
  "auth/sendVerificationEmail",
  async (token: any, thunkAPI) => {
    try {
      if (token) {
        const response = await sendVerificationEmailApi(token);
        if (response.status === 201) {
          return response.data;
        } else {
          return thunkAPI.rejectWithValue(response);
        }
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
