"use client";
import { NextUIProvider } from "@nextui-org/react";

const NextUIProviderWrapper = function ({ children }: any) {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUIProviderWrapper;
