import { StarIcon } from "@heroicons/react/20/solid";

const WhatCustomerSays = function () {
  return (
    <>
      <div className="overflow-hidden flex flex-col justify-center items-center shadow sm:rounded-lg w-full bg-dark5">
        <h1 className="text-4xl text-dark font-jostBodyRegular my-12">
          What our Customer say’s
        </h1>
        <div className="px-4 mb-12 sm:p-6 grid grid-cols-3 justify-center gap-x-8 w-[1140px]">
          <div className="flex flex-col ">
            <div className="flex gap-1 items-center flex-col bg-white p-7 rounded-10">
              <div className="flex gap-1 items-center ">
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="text-16 font-400 font-jostBodyRegular text-dark w-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </div>
              <div className="flex "></div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-1 items-center flex-col bg-white p-7 rounded-10">
              <div className="flex gap-1 items-center ">
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="text-16 font-400 font-jostBodyRegular text-dark w-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </div>
              <div className="flex "></div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-1 items-center flex-col bg-white p-7 rounded-10">
              <div className="flex gap-1 items-center ">
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <StarIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="text-16 font-400 font-jostBodyRegular text-dark w-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </div>
              <div className="flex "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatCustomerSays;
