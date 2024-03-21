"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { ArrowRight } from "react-huge-icons/outline";

export const Hero = function () {
  return (
    <section className=" bg-dark5  xl:bg-left mt-5 xl:mt-2">
      <div className="container flex flex-col-reverse items-center justify-center gap-16 xl:flex-row">
        <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-center">
          <h2 className="text-xl xl:text-2xl text-left">Classic Exclusive</h2>
          <h1 className="text-3xl lg:text-5xl xl:text-5xl font-black">
            Women’s Collection
          </h1>
          <h3 className="text-xl xl:text-2xl text-left">UPTO 40% OFF</h3>
          <Button className="mt-5 max-w-fit bg-dark text-white ">
            <p>Shop Now</p>
            <p className="flex items-end justify-start">
              <ArrowRight className="w-6 h-6" />
            </p>
          </Button>
        </div>
        <Image src="/images/photo.jpg" alt="" width={500} height={885} />
        {/* <div className="text-red-600 font-bold font-700 opacity-60 text-9xl break-words">
            <p className="absolute">BESTSELLER</p>
          </div> */}
      </div>
    </section>
  );
};
