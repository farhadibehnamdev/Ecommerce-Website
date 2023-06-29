"use client";

import Image from "next/image";
import { ArrowRight } from "react-huge-icons/outline";

const Hero = function () {
  return (
    <div className="relative bg-dark5  xl:max-w-[1380px]  lg:w-full">
      <div className=" lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="ml-0 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="relative mx-auto   max-w-2xl lg:mx-0">
            <p className="mt-6 text-dark font-400 font-jostBodyRegular break-words text-3xl">
              Classic Exclusive
            </p>
            <h3 className="mt-6 text-dark font-700 font-jostBodyBold break-words text-4xl">
              Women’s Collection
            </h3>
            <p className="mt-6 text-dark font-400 font-jostBodyRegular break-words text-3xl">
              UPTO 40% OFF
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md  bg-dark text-16 font-jostBodyRegular px-5 py-5 text-white"
              >
                <span className="flex justify-center text-white gap-3  items-end">
                  <p>Shop Now</p>
                  <p className="flex items-end justify-start">
                    <ArrowRight className="w-6 h-6" />
                  </p>
                </span>
              </a>
            </div>
            <div className="text-white mb-24 ml-10 font-700 opacity-60 font-jostBodyBold  text-241  relative break-words">
              <p className="absolute">BESTSELLE</p>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:ml-0">
          <Image
            width={593}
            height={884}
            className="aspect-[3/2] w-auto bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full sm:aspect-auto"
            src="/images/photo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

// const Hero = function () {
//   return (
//     // lg:grid lg:grid-cols-12
//     <div className="mx-auto max-w-8625 ">
//       <div className="relative bg-dark5 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
//         <div className="px-6 pb-24 pt-10 sm:pb-32  lg:px-0 lg:pb-56 lg:col-span-6 lg:pt-48 xl:col-span-6">
//           <div className="mx-auto max-w-2xl lg:mx-0">
//             <p className="mt-6 text-dark font-400 font-jostBodyRegular break-words text-3xl">
//               Classic Exclusive
//             </p>
//             <h3 className="mt-6 text-dark font-700 font-jostBodyBold break-words text-4xl">
//               Women’s Collection
//             </h3>
//             <p className="mt-6 text-dark font-400 font-jostBodyRegular break-words text-3xl">
//               UPTO 40% OFF
//             </p>
//             <div className="mt-10 flex items-center gap-x-6">
//               <a
//                 href="#"
//                 className="rounded-md  bg-dark text-16 font-jostBodyRegular px-5 py-5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 <span className="flex justify-center text-white gap-3  items-end">
//                   <p>Shop Now</p>
//                   <p className="flex items-end justify-start">
//                     <ArrowRight className="w-6 h-6" />
//                   </p>
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1 xl:mr-0">
//           <Image
//             width={1380}
//             height={884}
//             className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
//             src="/images/Hero-photo.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Hero;
