import { LoginFormType } from "@/components/website/presentational/Login";
import api, { axiosInstance } from "./api";
import { URLS } from "./constants";
import { RegisterFormValues } from "@/components/website/presentational/Register";

export interface RegisterUserApiResponse {
  type: string;
  statusCode: number;
  message: string;
  user: User;
  tokens: Tokens;
  emailVerificationToken: string;
}

export interface LoginUserApiResponse extends RegisterUserApiResponse {}

export interface User {
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

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  address?: string;
  phone?: string;
  avatar: string;
  discountCode?: string;
  facebookId?: string;
  googleId?: string;
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

type ErrorResponse = {
  status: number;
  message: string;
};

export const registerUserApi = async function (params: RegisterFormValues) {
  try {
    const response = await api.post<RegisterUserApiResponse>(
      URLS.registerUser,
      params
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const logingUserApi = async function (params: LoginFormType) {
  try {
    const response = await api.post<LoginUserApiResponse>(
      URLS.loginUser,
      params
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const sendVerificationEmailApi = async function (token: string) {
  return await api.post<string>(
    URLS.sendVerificationEmail,
    {},
    {
      withCredentials: true,
      headers: {
        Authorization: token,
      },
    }
  );
};

export const profile = async function () {
  return await api.get<User>("auth/profile");
};

export const userProfile = async function () {
  try {
    return await api.get<UserProfile>("users/me");
  } catch (error: any) {
    return error.response;
  }
};
