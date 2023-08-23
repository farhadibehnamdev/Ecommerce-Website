"use client";
import Login, {
  LoginFormType,
} from "@/components/website/presentational/Login";
import useNotification from "@/hooks/useNotification";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearState, loginSelector } from "@/store/slices/auth/loginSlice";
import { loginThunk } from "@/store/thunks/authThunk/loginThunk";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

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
    if (isSuccess) {
      showNotice("You have successfully logged in", "success");
      let timeoutId = setTimeout(() => {
        router.push("/");
        clearTimeout(timeoutId);
      }, 2000);
    } else if (isError) {
      showNotice(errorMessage, "fail");
    }
    return () => {
      dispatch(clearState());
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
