"use client";
import { Provider } from "react-redux";
import store from ".";
import React from "react";

export const ReduxProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
};
