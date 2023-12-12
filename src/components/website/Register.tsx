"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import useRegister from "@/hooks/auth/useRegister";
export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

type registerFormProps = {
  handleSubmitForm: Function;
};

const Register = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();
  const { registerMutation } = useRegister();
  const onSubmit = async (data: RegisterFormValues) => {
    await registerMutation.mutateAsync(data);
  };
  return (
    <>
      <div className="flex flex-1 bg-white text-dark min-h-full">
        <Toaster />
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            width={0}
            height={0}
            priority={true}
            sizes="100vw"
            src="/images/register-photo.png"
            alt="register"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: "auto", height: "100vh" }}
          />
        </div>
        <div className="flex flex-auto flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-xl lg:min-w-fit">
            <div>
              <h2 className="mt-8 text-3xl text-dark break-words font-700 font-jostBodyBold">
                Create New Account
              </h2>
              <p className="mt-1 ml-1 text-16 font-400 font-jostBodyRegular text-gray">
                Please enter details
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                  <div>
                    <label
                      htmlFor="fistName"
                      className="block text-xs font-400 break-words text-dark leading-23"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("firstName")}
                        placeholder="Robert"
                        className="block w-full rounded-10 text-16 border-0 px-4 py-4 shadow-sm ring-1 ring-slate-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-400 break-words text-dark leading-23"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("lastName")}
                        type="text"
                        placeholder="Fox"
                        className="block w-full rounded-10 text-16 border-0 px-4 py-4 shadow-sm ring-1 ring-slate-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-400 break-words text-dark leading-23"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("email", {
                          required: "A email is required.",
                        })}
                        type="email"
                        placeholder="email@example.com"
                        aria-invalid="true"
                        aria-describedby="email-error"
                        className={`${
                          errors.email &&
                          " ring-red-500 focus:ring-0 border-red-500 outline-none border-solid border-[1px]"
                        } block w-full rounded-10 text-16  px-4 py-4 shadow-sm ring-1 ring-slate-800 `}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        Not a valid email address.
                      </p>
                    )}
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
                        {...register("password", {
                          required: "A password field is required.",
                        })}
                        type="password"
                        autoComplete="current-password"
                        placeholder="**********"
                        className={`${
                          errors.email &&
                          " ring-red-500 focus:ring-0 border-red-500 outline-none border-solid border-[1px]"
                        } block w-full rounded-10 text-16  px-4 py-4 shadow-sm ring-1 ring-slate-800 `}
                      />
                      {errors.password && (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center gap-2 px-5 py-5 rounded-10 bg-dark tex-white text-16 font-400 break-words leading-6 text-white shadow-sm"
                    >
                      <span className="flex justify-center items-center gap-5">
                        <span> Register</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
