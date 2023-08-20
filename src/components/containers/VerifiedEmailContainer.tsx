"use client";
import api from "@/api/api";
import VerifiedEmail from "@/components/presentational/VerifiedEmail";
import { useEffect, useState } from "react";

const VerifiedEmailContainer = function ({ token }: { token: string }) {
  const [message, setMessage] = useState("");
  const confirmEmail = async function () {
    const resposne = await api.get<string>("auth/verify-email", {
      params: { token },
    });
    if (resposne.status === 200) {
      setMessage("Email has been verified");
    } else {
      setMessage("Something went wrong...");
    }
  };
  useEffect(() => {
    try {
      confirmEmail();
    } catch (error: any) {
      setMessage("Something went wrong...");
    }
  }, []);
  return <VerifiedEmail message={message} />;
};

export default VerifiedEmailContainer;
