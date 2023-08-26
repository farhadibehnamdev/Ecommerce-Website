"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Notification from "./Notification";
import { BounceLoader } from "react-spinners";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { CSSProperties } from "react";

type ForgotPasswordFormType = {
  email: string;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const ForgotPassword = function ({
  message,
  show,
  setShow,
  noticeType,
  isFetching,
  handleSubmitEmail,
}: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormType>();

  const onSubmit = function (formData: ForgotPasswordFormType) {
    handleSubmitEmail(formData);
  };

  return (
    <div className="flex flex-1 bg-white min-h-full">
      <Notification
        message={message}
        show={show}
        setShow={setShow}
        noticeType={noticeType}
      />
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/images/forgot-password.jpg"
          alt="login"
          className="inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-auto flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-xl lg:min-w-fit">
          <div>
            <div className="flex text-dark justify-start items-center gap-2">
              <IoChevronBackOutline className="h-4 w-4" />
              <Link href="/auth/login">Back</Link>
            </div>
            <h2 className="mt-8 text-3xl text-dark break-words font-700 font-jostBodyBold">
              Forgot Password
            </h2>
            <p className="mt-1 ml-1 text-16 font-400 font-jostBodyRegular text-gray">
              Enter your registered email address. we’ll send you a code to
              reset your password.
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-7 text-dark"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-400 break-words text-dark leading-23"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      autoComplete="email"
                      placeholder="email@example.com"
                      className={`${
                        errors.email &&
                        " ring-red-500 focus:ring-0 border-red-500 focus:outline-none border-solid border-[1px]"
                      } block w-full rounded-10 text-16  px-4 py-4 shadow-sm ring-1 ring-slate-800 `}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center px-5 py-5 rounded-10 bg-dark tex-white text-16 font-400 break-words leading-6 text-white shadow-sm"
                  >
                    <span className="flex justify-center gap-2">
                      <span>Send Link Verification</span>
                      <BounceLoader
                        color="#fff"
                        loading={isFetching}
                        cssOverride={override}
                        size={25}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
