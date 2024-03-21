"use client";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { VscError } from "react-icons/vsc";

const ResetPasswordConfirm = function ({
  setShow,
  show,
  message,
  noticeType,
}: any) {
  const router = useRouter();
  const handleBackToLogin = function () {
    setShow(false);
    router.push("/auth/login");
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShow}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-dark p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-dark">
                    {noticeType === "success" ? (
                      <div className="h-5 w-5 rounded-10  bg-white">
                        <CheckIcon
                          className="text-dark p-1"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <VscError
                        className="h-6 w-6 text-red-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {noticeType === "success"
                        ? "Password Changed Successfully"
                        : "Something went Wrong..."}
                    </Dialog.Title>
                    <div className="mt-2">
                      {/*  */}
                      <p className="text-sm text-gray-500">
                        {noticeType === "success"
                          ? "Your password has been updated successfully"
                          : "Please go to your email and click on link again"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-dark px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-dark hover:bg-white hover:ring-1 hover:ring-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    onClick={handleBackToLogin}
                  >
                    Back to Login
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ResetPasswordConfirm;
