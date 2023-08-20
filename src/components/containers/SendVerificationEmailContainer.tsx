"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { registerSelector } from "@/store/slices/auth/registerSlice";
import SendVerificationEmail from "@/components/presentational/SendVerificationEmail";
import { sendVerificationEmailThunk } from "@/store/thunks/authThunk/sendVerificationEmailThunk";
import { sendVerificationEmailSelector } from "@/store/slices/auth/sendVerificationSlice";

const SendVerificationEmailContainer = function () {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(registerSelector);
  const { token } = useAppSelector(sendVerificationEmailSelector);
  const handleSubmitVerification = function () {
    if (data?.tokens?.access?.token && !data.emailVerificationToken)
      dispatch(sendVerificationEmailThunk(data?.tokens?.access?.token));
  };

  return (
    <SendVerificationEmail
      handleSubmitVerification={handleSubmitVerification}
      emailVerificationToken={data?.emailVerificationToken || token}
    />
  );
};
export default SendVerificationEmailContainer;
