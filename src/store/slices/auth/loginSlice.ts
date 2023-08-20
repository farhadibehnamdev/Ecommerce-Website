import { LoginUserApiResponse } from "@/api/userApi";
import { loginThunk } from "@/store/thunks/authThunk/loginThunk";
import { createSlice } from "@reduxjs/toolkit";

type loginState = {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string;
  data: LoginUserApiResponse | null;
};

const initialState: loginState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  data: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isFetching = false;
      state.isSuccess = false;

      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.error.message as string;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.data = action.payload;
      });
  },
});

export const { clearState } = loginSlice.actions;
export const loginSelector = (state: any) => state.loginReducer;
export const loginReducer = loginSlice.reducer;
