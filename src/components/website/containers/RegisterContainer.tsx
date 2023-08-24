"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Register, {
  RegisterFormValues,
} from "@/components/website/presentational/Register";
import { registerThunk } from "@/store/thunks/authThunk/registerThunk";
import {
  clearState,
  registerSelector,
} from "@/store/slices/auth/registerSlice";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useNotification from "@/hooks/useNotification";

const RegisterContainer = function () {
  const dispatch = useAppDispatch();
  const { showNotice, message, show, setShow, noticeType } = useNotification();
  const router = useRouter();
  const { isFetching, isSuccess, isError, data, errorMessage } =
    useAppSelector(registerSelector);

  const handleSubmitForm = (data: RegisterFormValues) => {
    dispatch(registerThunk(data));
  };
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isSuccess) {
      showNotice("Thank you for signing up", "success");
      timeoutId = setTimeout(() => {
        router.push("/auth/verify-email");
      }, 3000);
    } else if (isError) {
      showNotice(errorMessage, "fail");
    }
    return function () {
      dispatch(clearState());
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [isSuccess, isError]);
  return (
    <Register
      handleSubmitForm={handleSubmitForm}
      message={message}
      show={show}
      setShow={setShow}
      noticeType={noticeType}
      isFetching={isFetching}
    />
  );
};
export default RegisterContainer;
