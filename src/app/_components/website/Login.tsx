"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import useLogin from "@/hooks/auth/useLogin";
export type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();
  const { loginMutation } = useLogin();
  const onSubmit = function (data: LoginFormType) {
    loginMutation.mutate(data);
  };
  return (
    <div className="flex flex-1 bg-white min-h-full">
      <Toaster />
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
              Welcome👋
            </h2>
            <p className="mt-1 ml-1 text-16 font-400 font-jostBodyRegular text-gray">
              Please login here
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
                  <label
                    htmlFor="password"
                    className="block text-dark  font-jostBodyRegular text-xs font-400 leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      autoComplete="current-password"
                      placeholder="**********"
                      className={`${
                        errors.password &&
                        " ring-red-500 focus:ring-0 focus:ring-red-800 focus:border-red-500 focus:outline-none border-solid border-[1px]"
                      } block w-full rounded-10 text-16  px-4 py-4 shadow-sm ring-1 ring-slate-800`}
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      {...register("rememberMe", { required: false })}
                      type="checkbox"
                      className="h-4 w-4 px-2 py-2 accent-dark text-xs rounded-10 font-jostBodyRegular border-gray-300"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block  font-jostBodyRegular text-16 leading-6 text-dark"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-14 font-jostBodyRegular font-400 leading-23">
                    <Link href="/auth/forgot-password" className="text-dark">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center px-5 py-5 rounded-10 bg-dark tex-white text-16 font-400 break-words leading-6 text-white shadow-sm"
                  >
                    <span className="flex justify-center gap-2">
                      <span>Login</span>
                    </span>
                  </button>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="#"
                    className="text-dark text-center font-lg underline"
                  >
                    if you do not have an account.click on link
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
