"use client";
import api from "@/api/api";
import VerifiedEmail from "@/components/website/VerifiedEmail";
import { useEffect, useState } from "react";

const VerifiedEmailContainer = function ({ token }: { token: string }) {
  const [message, setMessage] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const confirmEmail = async function () {
      try {
        const resposne = await api.get<any>("auth/verify-email", {
          params: { token },
        });

        if (resposne.status === 200) {
          setIsLoading(false);

          setMessage("Email has been verified");
          setIsFailed(false);
        }
      } catch (error: any) {
        setIsLoading(false);
        setMessage(error.response.data.message);
        setIsFailed(true);
      }
    };
    confirmEmail();
  }, []);
  return (
    <VerifiedEmail
      message={message}
      isFailed={isFailed}
      isLoading={isLoading}
    />
  );
};

export default VerifiedEmailContainer;
