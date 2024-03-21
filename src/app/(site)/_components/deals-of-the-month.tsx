import Image from "next/image";
import { ArrowRight } from "react-huge-icons/outline";

const DealsOfTheMonth = function () {
  return (
    <div className=" mx-auto xl:max-w-7xl sm:px-6 sm:py-24 mb-36 xl:pt-0 xl:px-0">
      <div className=" flex flex-1 justify-center items-center">
        <div className="flex flex-col justify-center items-center lg:items-start  sm:items-center">
          <h2 className="text-dark font-400 text-[40px] mb-2 ">
            Deals of the Month
          </h2>
          <p className="text-dark font-400 text-16 break-words mb-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
          <div className="flex gap-[20px] items-center mb-12">
            <span className="rounded-10 text-center break-words px-4 py-[7px] ring-dark5 ring-1 font-jostBodyBold font-700 text-dark text-[30px]">
              120
              <p className="text-[20px] font-400">Days</p>
            </span>
            <span className="rounded-10 text-center break-words px-4 py-[7px] font-700 ring-dark5 ring-1  text-dark text-[30px]">
              18
              <p className="text-[20px] font-400">Hours</p>
            </span>
            <span className="rounded-10 text-center break-words px-4 py-[7px] font-700 ring-dark5 ring-1 text-dark text-[30px]">
              15
              <p className="text-[20px] font-400">Mins</p>
            </span>
            <span className="rounded-10 text-center break-words px-4 py-[7px] font-700 ring-dark5 ring-1 text-dark text-[30px]">
              1<p className="text-[20px] font-400">Secs</p>
            </span>
          </div>
          <button className="text-16 flex justify-center gap-2 items-center font-400 text-white bg-dark p-5 rounded-10  break-words">
            <span>View All Products</span>
            <ArrowRight className="h-6 w-6 text-white flex items-center" />
          </button>
        </div>
        <Image
          width={553}
          height={500}
          src="/images/deals-photo.png"
          alt="deals-of-the-month"
          className="object-cover sm:mx-auto"
        />
      </div>
    </div>
  );
};

export default DealsOfTheMonth;
