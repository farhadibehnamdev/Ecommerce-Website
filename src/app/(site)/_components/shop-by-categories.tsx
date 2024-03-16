import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-huge-icons/outline";

const ShopByCategories = function () {
  return (
    <>
      {/* xl:w-[1140px] mt-24 mb-36 */}

      <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:xl:w-[1140px] mt-24 mb-36 lg:px-0 xl:px-0">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-dark xl:text-[40px] sm:text-[20px] flex justify-center items-center  xl:font-jostBodyBold">
            Shop By Categories
          </h3>
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
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-8 content-center overflow-hidden relative">
          <div className="w-[272px] h-[360px] flex item-center justify-center bg-dark5 overflow-hidden relative ">
            <div className="absolute right-0">
              <span className="text-dark5  text-7xl font-jostBodyBold font-bold">
                Casual
              </span>
            </div>
            <Image
              width={221}
              height={347}
              className="mt-[8px] ml-[50px]"
              src="/images/casual.png"
              alt="casual"
            />
            <button className="bg-white rounded-10 absolute bottom-0 transition ease-in delay-75  mb-5 text-dark font-400 text-16 font-jostBodyRegular pl-14 pr-14 py-5 shadow-xl  hover:bg-dark600 hover:text-white hover:drop-shadow-boxShadow">
              Casual Wear
            </button>
          </div>
          <div className="w-[262px] h-[360px] flex item-center justify-center overflow-hidden bg-dark5 relative">
            <div className="absolute -right-10">
              <span className="text-dark5  text-7xl font-jostBodyBold font-700">
                Western
              </span>
            </div>
            <Image
              width={242}
              height={347}
              src="/images/western.png"
              alt="western"
              className="mt-[13px] ml-[27px]"
            />
            <button className="bg-white rounded-10 transition ease-in delay-50 absolute bottom-0  mb-5 text-dark font-400 text-16 font-jostBodyRegular pl-14 pr-14 py-5 shadow-xl  hover:bg-dark600 hover:text-white hover:drop-shadow-boxShadow">
              Western Wear
            </button>
          </div>
          <div className="w-[262px] h-[360px] flex item-center justify-center  overflow-hidden bg-dark5 relative">
            <div className="absolute right-0">
              <span className="text-dark5  text-7xl font-jostBodyBold font-700">
                Ethnic
              </span>
            </div>
            <Image
              width={216}
              height={398}
              src="/images/ethnic.png"
              className="mt-[13px] ml-[47px]"
              alt="ethnic"
            />
            <button className="bg-white rounded-10 transition ease-in delay-50 absolute bottom-0 mb-5 text-dark font-400 text-16 font-jostBodyRegular pl-14 pr-14 py-5 shadow-xl  hover:bg-dark600 hover:text-white hover:drop-shadow-boxShadow">
              Ethnic Wear
            </button>
          </div>
          <div className="w-[262px] h-[360px] flex item-center justify-center  bg-dark5 relative">
            <div className="absolute left-8">
              <span className="text-dark5  text-7xl font-jostBodyBold font-700">
                Kids
              </span>
            </div>
            <Image
              width={221}
              height={347}
              src="/images/kids.png"
              className="mt-[13px] ml-[47px]"
              alt="kids"
            />
            <button className="bg-white rounded-10 transition ease-in delay-50 absolute bottom-0  mb-5 text-dark font-400 text-16 font-jostBodyRegular pl-14 pr-14 py-5 drop-shadow-boxShadow hover:bg-dark600 hover:text-white hover:drop-shadow-boxShadow">
              Kids Wear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByCategories;
