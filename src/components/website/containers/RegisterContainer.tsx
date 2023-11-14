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
import toast from "react-hot-toast";

const registerUser = async function (data: RegisterFormValues) {
  data.role = "Admin";
  const response = await registerUserApi(data);
  if (response.status >= 400) throw new Error(response.statusText);
  return response.data;
};

const RegisterContainer = function () {
  const registerMutation = useMutation({ mutationFn: registerUser });
  const router = useRouter();
  const handleSubmitForm = (data: RegisterFormValues) => {
    const toastId = toast.loading("Processing...");
    registerMutation.mutate(data, {
      onSuccess(data, variables, context) {
        toast.success("Thank you for signing up", { id: toastId });
        router.push("/auth/verify-email");
      },
      onError(error, variables, context) {
        toast.error(error.message, { id: toastId });
      },
    });
  };

  return <Register handleSubmitForm={handleSubmitForm} />;
};
export default RegisterContainer;
