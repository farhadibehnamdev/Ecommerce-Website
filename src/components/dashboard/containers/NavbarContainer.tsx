"use client";
import { useContext, useEffect, useState } from "react";
import Navbar from "../presentational/Navbar";
import SessionContext, { ISessionContext } from "@/contexts/SessionContext";

const NavbarContainer = function () {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { user, isLoading, isFetching, refetch } =
    useContext<ISessionContext>(SessionContext);


  return (
    <Navbar
      user={user!}
      isLoading={isLoading}
      setSidebarOpen={setSidebarOpen}
    />
  );
};

export default NavbarContainer;

