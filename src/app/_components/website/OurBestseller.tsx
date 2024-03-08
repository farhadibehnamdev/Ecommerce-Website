"use client";
import { useRef, useState } from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Eye } from "react-huge-icons/outline";
type ShowStateType = {
  [key: string]: boolean;
};
const products = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$200",
  },
  {
    id: 2,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$700",
  },
  {
    id: 3,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",

    discount: "$100",
  },
  {
    id: 4,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$900",
  },
  {
    id: 5,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$200",
  },
  {
    id: 6,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$700",
  },
  {
    id: 7,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",

    discount: "$100",
  },
  {
    id: 8,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$900",
  },
  // More products...
];
const OurBestseller = function () {
  const [isShow, setIsShow] = useState<ShowStateType>({});
  const toggleHandler = function (id: number, show: boolean) {
    console.log("isShow :", isShow);
    setIsShow((prevState: any) => ({ ...prevState, [id]: show }));
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:xl:w-[1140px]  mb-36 xl:pt-0 xl:px-0">
        <div className="md:flex md:items-center sm:flex sm:items-center sm:justify-center md:justify-center mb-[50px]">
          <h2 className="text-4xl  text-dark font-400 font-jostBodyRegular tracking-tight">
            Our Bestseller
          </h2>
        </div>

        <div className="mt-6 grid text-dark md:grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 xl:grid-cols-4 lg:grid-cols-4 md:gap-y-0 lg:gap-x-8 lg:gap-[30px]">
          {products.map((product) => (
            <div
              onMouseEnter={() => toggleHandler(product.id, true)}
              onMouseLeave={() => toggleHandler(product.id, false)}
              key={product.id}
              className="group relative md:my-5"
            >
              <div className="h-[330px] w-full flex item-center  justify-center overflow-hidden  bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80 relative">
                <div
                  className={`absolute flex  ${
                    isShow[product.id] ? "visible" : "invisible"
                  } flex-col p-5 gap-2 right-0 items-baseline justify-start`}
                >
                  <button className="rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center font-jostBodyBold font-700">
                    <HeartIcon
                      className="block h-5 w-5 text-dark"
                      aria-hidden="true"
                    />
                  </button>
                  <button className="rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center font-jostBodyBold font-700">
                    <ArrowsRightLeftIcon
                      className="block h-5 w-5 text-dark"
                      aria-hidden="true"
                    />
                  </button>
                  <button className="rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center font-jostBodyBold font-700">
                    <Eye
                      className="block h-5 w-5 text-dark"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <Image
                  width={262}
                  height={429}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
                <button
                  className={`bg-white ${
                    isShow[product.id] ? "visible" : "invisible"
                  }  w-[182px] rounded-10 p-4 absolute bottom-0  mb-5 text-dark font-400 text-16 font-jostBodyRegular  drop-shadow-boxShadow  hover:bg-dark600 hover:text-white hover:drop-shadow-boxShadow`}
                >
                  Add to Cart
                </button>
              </div>
              <h3 className="mt-4 font-700 text-16">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <div className="flex justify-start gap-2 items-center">
                <p className="mt-1 text-16 font-700 text-dark">
                  {product.price}
                </p>
                <p className="mt-[2px] text-gray text-16 font-400 font-jostBodyRegular line-through">
                  {product.discount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBestseller;
