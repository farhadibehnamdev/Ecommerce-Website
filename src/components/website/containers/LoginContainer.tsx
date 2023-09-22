"use client";
import Login, {
  LoginFormType,
} from "@/components/website/presentational/Login";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { logingUserApi } from "@/api/userApi";
import useCustomToast from "@/hooks/useCustomToast";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import Cookies from "universal-cookie";
import { useEffect } from "react";
const cookie = new Cookies();
const userLogin = async function (params: LoginFormType) {
  const response = await logingUserApi(params);
  if (response.status === 201) {
    cookie.set("access_token", response.data.tokens?.access, {
      path: "/",
      expires: new Date(response.data.tokens?.access.expires),
    });
    cookie.set("refresh_token", response.data.tokens?.refresh, {
      path: "/",
      expires: new Date(response.data.tokens?.refresh.expires),
    });
    return response.data;
  } else {
    throw new Error(response.data.message);
  }
};
const LoginContainer = () => {
  const loginMutation = useMutation(userLogin);
  const router = useRouter();
  const toast = useCustomToast();
  const handleSubmitLoginForm = async (formData: LoginFormType) => {
    loginMutation.mutate(formData);
  };
  useEffect(() => {
    if (loginMutation.isSuccess) {
      toast(
        "You have successfully logged in",
        <BsFillCheckCircleFill className="w-4 h-4 text-black" />
      );
      router.push("/");
    } else if (loginMutation.isError) {
      let errorMessage = "An unknown error occurred";
      if (loginMutation.error instanceof Error) {
        errorMessage = loginMutation.error.message;
        toast(errorMessage, <VscError className="w-4 h-4 text-black" />);
      }
    }
  }, [loginMutation.isSuccess, loginMutation.isError, toast]);

  return <Login handleSubmitLoginForm={handleSubmitLoginForm} />;
};

export default LoginContainer;
