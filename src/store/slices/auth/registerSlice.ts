import { RegisterUserApiResponse } from "@/api/userApi";
import { registerThunk } from "@/store/thunks/authThunk/registerThunk";
import { createSlice } from "@reduxjs/toolkit";

type registerState = {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string;
  data: RegisterUserApiResponse | null;
};

const initialState: registerState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  data: null,
};
const registerSlice = createSlice({
  name: "register",
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
      .addCase(registerThunk.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isError = true;
        state.isFetching = false;
        state.errorMessage = state.errorMessage;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.isFetching = false;
        state.isSuccess = true;
        state.data = payload;
      });
  },
});

export const { clearState } = registerSlice.actions;
export const registerSelector = (state: any) => state.register;
export const registerReducer = registerSlice.reducer;
