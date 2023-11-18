"use client";
import api from "@/api/api";
import ForgotPassword from "../ForgotPassword";
import { useRouter } from "next/navigation";
import useNotification from "@/hooks/useNotification";
import { useState } from "react";

const ForgotPasswordContainer = function () {
  const router = useRouter();
  const [fetching, isFetching] = useState(false);
  const { showNotice, message, show, setShow, noticeType } = useNotification();
  const forgotPasswordAccount = async function (formData: string) {
    isFetching(true);
    const response = await api.post<string>("auth/forgot-password", formData);
    isFetching(true);
    if (response.status === 201) {
      showNotice("We have been sent a verification email", "success");
      isFetching(false);
    } else {
      showNotice("something went wrong...", "fail");
      isFetching(false);
    }
  };

  const handleSubmitEmail = function (formData: string) {
    forgotPasswordAccount(formData);
  };

  return (
    <ForgotPassword
      handleSubmitEmail={handleSubmitEmail}
      message={message}
      show={show}
      setShow={setShow}
      noticeType={noticeType}
      isFetching={fetching}
    />
  );
};

export default ForgotPasswordContainer;
