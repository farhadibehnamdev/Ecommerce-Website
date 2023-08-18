import { registerParams } from "@/store/thunks/authThunk/registerThunk";
import api from "./api";
import { URLS } from "./constants";

export interface RegisterUserApiResponse {
  type: string;
  statusCode: number;
  message: string;
  user: User;
  tokens: Tokens;
  emailVerificationToken: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isEmailVerified: boolean;
  isDeleted: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface Tokens {
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
}

export const registerUserApi = async function (params: registerParams) {
  const response = await api.post<RegisterUserApiResponse>(
    URLS.registerUser,
    params
  );
  return response;
};

export const sendVerificationEmailApi = async function (token: string) {
  return await api.post<string>(
    URLS.sendVerificationEmail,
    {},
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
