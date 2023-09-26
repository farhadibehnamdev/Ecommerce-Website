"use client";
import api from "@/api/api";
import Navbar from "@/components/website/presentational/Navbar";
import SessionContext, { ISessionContext } from "@/contexts/SessionContext";
import { useQueryClient } from "@tanstack/react-query";
import { useContext, useReducer, useState } from "react";
const NavbarContainer = function () {
  const query = useQueryClient();
  const { user, isLoading, refetch, isFetching } =
    useContext<ISessionContext>(SessionContext);
  return (
    <Navbar
      user={user!}
      isLoading={isLoading}
      isFetching={isFetching}
      refetch={refetch}
      query={query}
    />
  );
};

export default NavbarContainer;
