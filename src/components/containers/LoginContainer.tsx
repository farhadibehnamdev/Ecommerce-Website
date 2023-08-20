"use client";
import Login, { LoginFormType } from "@/components/presentational/Login";
import useNotification from "@/hooks/useNotification";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearState, loginSelector } from "@/store/slices/auth/loginSlice";
import { loginThunk } from "@/store/thunks/authThunk/loginThunk";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginContainer = () => {
  const { showNotice, message, show, setShow, noticeType } = useNotification();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data, isError, isFetching, isSuccess, errorMessage } =
    useAppSelector(loginSelector);

  const handleSubmitLoginForm = (formData: LoginFormType) => {
    dispatch(loginThunk(formData));
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isSuccess) {
      showNotice("You have successfully logged in", "success");
      timeoutId = setTimeout(() => {
        router.push("/");
      }, 3000);
    } else if (isError) {
      showNotice(errorMessage, "fail");
    }
    return () => {
      dispatch(clearState());
      clearTimeout(timeoutId);
    };
  }, [isSuccess, isError, showNotice]);

  return (
    <Login
      handleSubmitLoginForm={handleSubmitLoginForm}
      isFetching={isFetching}
      message={message}
      show={show}
      setShow={setShow}
      noticeType={noticeType}
    />
  );
};

export default LoginContainer;
