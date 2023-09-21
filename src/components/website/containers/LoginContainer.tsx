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
const userLogin = async function (params: LoginFormType) {
  const response = await logingUserApi(params);
  return response.data;
};
const LoginContainer = () => {
  const loginMutation = useMutation(userLogin);
  const router = useRouter();
  const toast = useCustomToast();
  const handleSubmitLoginForm = async (formData: LoginFormType) => {
    loginMutation.mutate(formData);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  loginMutation.isSuccess &&
    toast(
      "You have successfully logged in",
      <BsFillCheckCircleFill className="w-4 h-4" />
    );
  loginMutation.isError &&
    toast("Something went wrong!", <VscError className="w-4 h-4" />);

  return <Login handleSubmitLoginForm={handleSubmitLoginForm} />;
};

export default LoginContainer;
