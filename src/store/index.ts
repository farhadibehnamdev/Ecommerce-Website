import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "@/store/slices/auth/registerSlice";
import { loginReducer } from "@/store/slices/auth/loginSlice";
import { sendVerificationEmailReducer } from "@/store/slices/auth/sendVerificationSlice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  version: 1,
  blacklist: ["toggle", "modal"],
  storage,
};

const reducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  sendVerificationEmail: sendVerificationEmailReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
