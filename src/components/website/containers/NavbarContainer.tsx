"use client";
import Navbar from "@/components/website/presentational/Navbar";
import { useAppSelector } from "@/store/hooks";
import { loginSelector, logout } from "@/store/slices/auth/loginSlice";
import { useDispatch } from "react-redux";
const NavbarContainer = function () {
  const dispatch = useDispatch();
  const { isAuth, data } = useAppSelector(loginSelector);

  if (data?.tokens?.access?.token && data?.tokens?.access?.expires) {
    const { token, expires } = data.tokens.access;
    const date = new Date(expires);
    const now = new Date();
    if (now.getTime() > date.getTime()) {
      console.log("hi hi HI::");
      dispatch(logout());
    }
  }
  return <Navbar isAuth={isAuth} />;
};

export default NavbarContainer;
