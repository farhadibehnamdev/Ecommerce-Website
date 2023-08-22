import Image from "next/image";
import { BounceLoader } from "react-spinners";
import Notification from "./Notification";
import { useForm } from "react-hook-form";
import { CSSProperties } from "react";
import ResetPasswordConfirm from "./ResetPasswordConfirm";

export type ResetPasswordFormDataType = {
  password: string;
  passwordConfirmation: string;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const ResetPassword = function ({
  message,
  show,
  setShow,
  noticeType,
  isFetching,
  handleSubmitResetPassword,
}: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormDataType>();
  const onSubmit = function (formData: ResetPasswordFormDataType) {
    handleSubmitResetPassword(formData);
  };
  return (
    <div className="flex flex-1 bg-white min-h-full">
      <ResetPasswordConfirm
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
          src="/images/login-photo.png"
          alt="login"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: "auto", height: "100vh" }}
        />
      </div>
      <div className="flex flex-auto flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-xl lg:min-w-fit">
          <div>
            <h2 className="mt-8 text-3xl text-dark break-words font-700 font-jostBodyBold">
              Reset Password
            </h2>
            <p className="mt-1 ml-1 text-16 font-400 font-jostBodyRegular text-gray">
              Please enter your new password here
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
                    New Password
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      autoComplete="password"
                      placeholder="email@example.com"
                      className={`${
                        errors.password &&
                        " ring-red-500 focus:ring-0 border-red-500 focus:outline-none border-solid border-[1px]"
                      } block w-full rounded-10 text-16  px-4 py-4 shadow-sm ring-1 ring-slate-800 `}
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-dark  font-jostBodyRegular text-xs font-400 leading-6 text-gray-900"
                  >
                    New Password Confirmation
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("passwordConfirmation", { required: true })}
                      type="password"
                      autoComplete="current-password"
                      placeholder="**********"
                      className={`${
                        errors.password &&
                        " ring-red-500 focus:ring-0 focus:ring-red-800 focus:border-red-500 focus:outline-none border-solid border-[1px]"
                      } block w-full rounded-10 text-16  px-4 py-4 shadow-sm ring-1 ring-slate-800`}
                    />
                    {errors.passwordConfirmation && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.passwordConfirmation.message}
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
                      <span>Reset Password</span>
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

export default ResetPassword;
