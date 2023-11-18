"use client";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { CSSProperties } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbFaceIdError } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/navigation";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const SendVerificationEmail = function () {
  const router = useRouter();
  const handleBackToHome = function () {
    router.push("/");
  };
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center ring-2 ring-dark p-5 rounded-10">
        <p className="text-base flex justify-center font-semibold text-indigo-600">
          <HiOutlineMailOpen className="h-14 w-14 mb-4 text-dark" />
        </p>
        <h1 className="mt-4 mb-5 text-3xl font-bold tracking-tight text-dark sm:text-5xl">
          Email Verification
        </h1>
        <p className="text-dark font-jostBodyBold">
          We have sent a verification email to your email address. Please click
          on the link in the email to verify your account.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="rounded-md flex justify-center items-center gap-2 bg-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:ring-1 hover:ring-dark hover:text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark"
          >
            <span> Email verification has been sent</span>
            <CheckCircleIcon
              className="-mr-0.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={handleBackToHome}
            type="button"
            className="rounded-md flex justify-center ring-1 ring-dark text-center items-center gap-2 bg-white text-dark px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-white hover:ring-1 hover:ring-dark hover:text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark"
          >
            <span> Go to home</span>
            <AiOutlineHome
              className="-mr-0.5 h-5 w-5 text-dark"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendVerificationEmail;
