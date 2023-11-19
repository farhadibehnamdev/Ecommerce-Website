"use client";
import { useEffect } from "react";
import { sendVerificationEmailApi } from "@/api/userApi";
import SendVerificationEmail from "../SendVerificationEmail";

const SendVerificationEmailContainer = function () {
  return <SendVerificationEmail />;
};
export default SendVerificationEmailContainer;
