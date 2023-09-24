"use client";
import Register, {
  RegisterFormValues,
} from "@/components/website/presentational/Register";

import { useRouter } from "next/navigation";
import { registerUserApi } from "@/api/userApi";
import useCustomToast from "@/hooks/useCustomToast";
import { useMutation } from "@tanstack/react-query";
import { VscError } from "react-icons/vsc";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useEffect } from "react";

const registerUser = async function (data: RegisterFormValues) {
  data.role = "Admin";
  const response = await registerUserApi(data);
  if (response.status >= 400) throw new Error(response.statusText);
  return response.data;
};

const RegisterContainer = function () {
  const registerMutation = useMutation(registerUser);
  const router = useRouter();
  const toast = useCustomToast();

  const handleSubmitForm = (data: RegisterFormValues) => {
    registerMutation.mutate(data);
  };

  useEffect(() => {
    if (registerMutation.isLoading) {
      toast("Loading...", null, "loading");
    } else if (registerMutation.isSuccess) {
      toast(
        "Thank you for signing up",
        <BsFillCheckCircleFill className="w-4 h-4 text-black" />
      );

      router.push(`/auth/verify-email`);
    } else if (registerMutation.isError) {
      toast(
        registerMutation.error as string,
        <VscError className="w-4 h-4 text-black" />
      );
    }
  }, [
    registerMutation.isLoading,
    registerMutation.data,
    registerMutation.isError,
    registerMutation.isSuccess,
  ]);

  return <Register handleSubmitForm={handleSubmitForm} />;
};
export default RegisterContainer;
