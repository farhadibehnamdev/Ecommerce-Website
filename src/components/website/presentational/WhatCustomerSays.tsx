import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";

const WhatCustomerSays = function () {
  return (
    <>
      <div className="overflow-hidden flex items-center justify-center shadow sm:rounded-lg w-full bg-dark5">
        <div className="md:max-w-[1140px] sm:w-full md:mx-14">
          <div className="flex justify-between col-span-3 xs:mx-5 xs:mb-1 items-center sm:mx-10 md:mx-10 lg:mx-0">
            <h1 className="text-4xl xs:text-lg  text-dark font-jostBodyRegular my-12 text-left self-start">
              What our Customer say’s
            </h1>
            <div className="flex justify-center items-end gap-5">
              <button className="bg-dark5 sm:w-3 sm:h-3 w-4 h-4 p-5 rounded-10 flex justify-center items-center hover:bg-dark ">
                <div className="flex justify-center items-center hover:text-white">
                  <ArrowLeft
                    className="block sm:h-4 sm:w-4 h-6 w-6 text-dark "
                    aria-hidden="true"
                  />
                </div>
              </button>
              <button className="bg-dark w-4 h-4 p-5 rounded-10 flex justify-center items-center ">
                <div className="flex justify-center items-center">
                  <ArrowRight
                    className="block h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="px-4 mb-12 sm:p-6 xl:p-0 lg:p-0 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid md:gap-y-10 sm:grid-cols-1 sm:gap-y-10 justify-center gap-x-8">
            <div className="flex flex-col xs:mb-4">
              <div className="flex gap-1 items-start flex-col bg-white p-7 rounded-10">
                <div className="flex gap-1">
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-16 font-400 font-jostBodyRegular text-dark max-w-[300px] mb-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/images/Leslie.png"
                    width={48}
                    height={48}
                    alt="Leslie"
                  />
                  <div>
                    <p className="text-16 text-dark font-700 font-jostBodyBold">
                      Leslie Alexander
                    </p>
                    <p className="text-14 text-gray font-400 font-jostBodyRegular">
                      Model
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col xs:mb-4">
              <div className="flex gap-1 items-start flex-col bg-white p-7 rounded-10">
                <div className="flex gap-1 items-center ">
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-16 font-400 font-jostBodyRegular text-dark max-w-[300px] mb-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/images/jacob.png"
                    width={48}
                    height={48}
                    alt="jacob"
                  />
                  <div>
                    <p className="text-16 text-dark font-700 font-jostBodyBold">
                      Jacob Jones
                    </p>
                    <p className="text-14 text-gray font-400 font-jostBodyRegular">
                      Co-Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col xs:mb-4">
              <div className="flex gap-1 items-start flex-col bg-white p-7 rounded-10">
                <div className="flex gap-1 items-center ">
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-16 font-400 font-jostBodyRegular text-dark max-w-[300px] mb-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/images/oval.png"
                    width={48}
                    height={48}
                    alt="oval"
                  />
                  <div>
                    <p className="text-16 text-dark font-700 font-jostBodyBold">
                      Jenny Wilson
                    </p>
                    <p className="text-14 text-gray font-400 font-jostBodyRegular">
                      Fashion Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatCustomerSays;
