import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";

const WhatCustomerSays = function () {
  return (
    <>
      <div className="overflow-hidden flex flex-col justify-center items-center shadow sm:rounded-lg w-full bg-dark5">
        <div className="px-4 mb-12 sm:p-6 xl:p-0 lg:p-0 grid grid-cols-3 justify-center gap-x-8 w-[1140px]">
          <div className="flex justify-between col-span-3 items-center">
            <h1 className="text-4xl text-dark font-jostBodyRegular my-12 text-left self-start">
              What our Customer say’s
            </h1>
            <div className="flex justify-center items-end gap-5">
              <button className="bg-dark5 w-4 h-4 p-5 rounded-10 flex justify-center items-center hover:bg-dark ">
                <div className="flex justify-center items-center hover:text-white">
                  <ArrowLeft
                    className="block h-6 w-6 text-dark "
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
          <div className="flex flex-col">
            <div className="flex gap-1 items-start flex-col bg-white p-7 rounded-10">
              <div className="flex gap-1">
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="text-16 font-400 font-jostBodyRegular text-dark w-[300px] mb-8">
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
          <div className="flex flex-col ">
            <div className="flex gap-1 items-start flex-col bg-white p-7 rounded-10">
              <div className="flex gap-1 items-center ">
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="text-16 font-400 font-jostBodyRegular text-dark w-[300px] mb-8">
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
          <div className="flex flex-col ">
            <div className="flex gap-1 items-start flex-col bg-white p-7 rounded-10">
              <div className="flex gap-1 items-center ">
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="text-16 font-400 font-jostBodyRegular text-dark w-[300px] mb-8">
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
    </>
  );
};

export default WhatCustomerSays;
