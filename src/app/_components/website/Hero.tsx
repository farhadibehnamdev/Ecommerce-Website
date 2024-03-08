"use client";

import Image from "next/image";
import { ArrowRight } from "react-huge-icons/outline";

const Hero = function () {
  return (
    <div className="relative bg-dark5  max-w-[1380px] md:h-full  lg:w-full md:w-full sm:w-full">
      <div className=" grid lg:grid-cols-12  lg:gap-x-8 lg:px-8 md:grid-cols-2  md:px-10">
        <div className="ml-0 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 sm:mx-auto lg:mx-auto w-fit xs:mx-auto ">
          <div className="relative  max-w-2xl lg:mx-0">
            <p className="mt-6 text-dark xs:text-center sm:text-center md:text-left lg:text-left font-400 font-jostBodyRegular break-words text-3xl">
              Classic Exclusive
            </p>
            <h3 className="mt-6 text-dark font-700 xs:text-center md:text-left sm:text-center lg:text-left font-jostBodyBold break-words text-4xl">
              Women’s Collection
            </h3>
            <p className="mt-6 text-dark font-400 xs:text-center md:text-left sm:text-center lg:text-left font-jostBodyRegular break-words text-3xl">
              UPTO 40% OFF
            </p>
            <div className="mt-10 flex items-center xs:justify-center md:justify-normal sm:justify-center gap-x-6 md:mx-auto md:w-fit lg:w-fit lg:ml-0 lg:mx-0">
              <a
                href="#"
                className="rounded-md  bg-dark text-16 font-jostBodyRegular px-5 py-5 text-white"
              >
                <span className="flex justify-center text-white gap-3 items-end ">
                  <p>Shop Now</p>
                  <p className="flex items-end justify-start">
                    <ArrowRight className="w-6 h-6" />
                  </p>
                </span>
              </a>
            </div>
            <div className="text-white mb-24 ml-10 font-700 opacity-60 font-jostBodyBold  text-241  relative break-words">
              <p className="absolute">BESTSELLER</p>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:ml-0">
          <Image
            width={500}
            height={885}
            className="aspect-[3/2] w-auto bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto  sm:aspect-auto md:bottom-0 md:absolute md:h-full 
            md:inset-0"
            src="/images/photo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
