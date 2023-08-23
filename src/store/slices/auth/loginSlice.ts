import { LoginUserApiResponse } from "@/api/userApi";
import { loginThunk } from "@/store/thunks/authThunk/loginThunk";
import { createSlice } from "@reduxjs/toolkit";

type loginState = {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string;
  isAuth: boolean;
  data: LoginUserApiResponse | null;
};

const initialState: loginState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  isAuth: false,
  data: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.data = null;
    },
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
        state.isAuth = true;
        state.data = action.payload;
      });
  },
});

export const { clearState, logout } = loginSlice.actions;
export const loginSelector = (state: any) => state.login;
export const loginReducer = loginSlice.reducer;
