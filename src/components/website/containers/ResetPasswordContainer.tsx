"use client";
import api from "@/api/api";
import ResetPassword, {
  ResetPasswordFormDataType,
} from "@/components/website/ResetPassword";
import useNotification from "@/hooks/useNotification";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ResetPasswordContainer = function ({ token }: { token: string }) {
  const [fetching, isFetching] = useState(false);
  const { showNotice, message, show, noticeType, setShow } = useNotification();
  const handleSubmitResetPassword = async function (
    data: ResetPasswordFormDataType
  ) {
    isFetching(true);
    const response = await api.post<ResetPasswordFormDataType>(
      "auth/reset-password",
      data,
      { params: { token } }
    );
    if (response.status === 201) {
      isFetching(false);
      showNotice("Password has been reset successfully", "success");
    } else {
      isFetching(false);
      showNotice("something went wrong...", "fail");
    }
  };

  return (
    <ResetPassword
      showNotice={showNotice}
      message={message}
      show={show}
      noticeType={noticeType}
      setShow={setShow}
      isFetching={fetching}
      handleSubmitResetPassword={handleSubmitResetPassword}
    />
  );
};

export default ResetPasswordContainer;
