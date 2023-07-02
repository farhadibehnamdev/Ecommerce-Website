import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";

const ShopByCategories = function () {
  return (
    <>
      <div className="xl:w-[1140px] mt-24 mb-36">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-dark text-[40px] font-jostBodyRegular">
            Shop By Categories
          </h3>
          <div className="flex items-center justify-between gap-5">
            <button className="bg-dark5 w-4 h-4 p-5 rounded-10">
              <ArrowLeft
                className="block h-6 w-6 text-dark"
                aria-hidden="true"
              />
            </button>
            <button className="bg-dark w-4 h-4 p-5 rounded-10">
              <ArrowRight
                className="block h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 overflow-hidden">
          <div className="w-[262px] h-[360px] bg-dark5">
            <Image
              width={221}
              height={347}
              className="mt-[13px] ml-[67px]"
              src="/images/casual.png"
              alt="casual"
            />
          </div>
          <div className="w-[262px] h-[360px]   bg-dark5">
            <Image
              width={221}
              height={347}
              src="/images/western.png"
              alt="western"
              className="mt-[13px] ml-[67px]"
            />
          </div>
          <div className="w-[262px] h-[360px]   bg-dark5 ">
            <Image
              width={216}
              height={398}
              src="/images/ethnic.png"
              className="mt-[13px] ml-[67px]"
              alt="ethnic"
            />
          </div>
          <div className="w-[262px] h-[360px]   bg-dark5">
            <Image
              width={219}
              height={374}
              src="/images/kids.png"
              className="mt-[13px] ml-[67px]"
              alt="kids"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByCategories;
