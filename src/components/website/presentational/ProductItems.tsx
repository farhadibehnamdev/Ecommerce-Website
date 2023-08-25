import {
  ArrowsRightLeftIcon,
  ChevronDownIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Eye } from "react-huge-icons/outline";
import ProductCategories from "./ProductCategories";
import { Menu, Transition } from "@headlessui/react";

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
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
type ShowStateType = {
  [key: string]: boolean;
};
const ProductItems = function () {
  const [isShow, setIsShow] = useState<ShowStateType>({});
  const toggleHandler = function (id: number, show: boolean) {
    setIsShow((prevState: any) => ({ ...prevState, [id]: show }));
  };
  return (
    <div className="grid grid-cols-3 gap-x-10">
      <Menu as="div" className="relative flex col-span-3 justify-between ">
        <h4 className=" font-jostBodyRegular text-dark text-[16px] tracking-tight">
          Showing 1–16 of 72 results
        </h4>
        <div>
          <Menu.Button className="group text-dark text-16 inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
            Sort
            <ChevronDownIcon
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {sortOptions.map((option) => (
                <Menu.Item key={option.name}>
                  {({ active }) => (
                    <a
                      href={option.href}
                      className={classNames(
                        option.current
                          ? "font-medium text-gray-900"
                          : "text-gray-500",
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {option.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
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
                <Eye className="block h-5 w-5 text-dark" aria-hidden="true" />
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
          <h3 className="mt-4 font-700 text-dark text-16">
            <a href={product.href}>
              <span className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-dark">{product.color}</p>
          <div className="flex justify-start gap-2 items-center">
            <p className="mt-1 text-16 font-700 text-dark">{product.price}</p>
            <p className="mt-[2px] text-gray text-16 font-400 font-jostBodyRegular line-through">
              {product.discount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductItems;
