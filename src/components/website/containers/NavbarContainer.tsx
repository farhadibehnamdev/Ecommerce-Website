"use client";
import api from "@/api/api";
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
      let status = false;
      api.get("auth/logout").then((res) => {
        if (res.status === 200) {
          status = true;
        }
      });
      if (status) dispatch(logout());
    }
  }
  return <Navbar isAuth={isAuth} />;
};

export default NavbarContainer;
