import { Popover, Transition } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment } from "react";
import { Trash } from "react-huge-icons/outline";

const products = [
  {
    id: 1,
    name: "Girls Pink Moana Printed Dress",
    href: "#",
    color: "Salmon",
    count: 1,
    size: "S",
    price: 80,
    imageSrc: "/images/cart-img-1.png",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Women Textured Handheld Bag",
    href: "#",
    color: "Blue",
    count: 2,
    price: 80,
    size: "Regular",
    imageSrc: "/images/cart-img-2.png",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Tailored Cotton Casual Shirt",
    href: "#",
    color: "Blue",
    count: 2,
    price: 40,
    size: "M",
    imageSrc: "/images/cart-img-3.png",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];
export const ShoppingCart = function () {
  return (
    <Popover className="flow-root lg:relative">
      <Popover.Button className="group -m-2 flex items-center p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            stroke="#131118"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 6v1a3 3 0 1 0 6 0V6"
          />
          <path
            stroke="#131118"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z"
          />
        </svg>
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="absolute top-16 bg-white  shadow-lg p-5  lg:left-auto lg:right-0 lg:top-full lg:-mr-2 lg:mt-3 lg:w-85  lg:ring-1 lg:ring-black lg:ring-opacity-5">
          <form className="mx-auto max-w-2xl">
            <p className="text-dark font-jostBodyRegular font-400 leading-23 text-16 mb-7">
              You have 3 items in your cart
            </p>
            <ul role="list" className="divide-y divide-grayOpacity">
              {products.map((product: any, index) => (
                <li
                  key={product.id}
                  className={`flex items-start ${
                    index === 0 ? "pb-5" : "py-5"
                  }`}
                >
                  <div className="flex items-center w-70px h-70px  bg-grayOpacity  justify-center">
                    <Image
                      width={51}
                      height={46}
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="flex-none p-2"
                    />
                  </div>
                  <div className={`ml-2.5 flex-auto`}>
                    <h3 className="text-dark font-jostBodyRegular text-14 font-400">
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <h3 className="text-dark font-jostBodyBold text-14 font-700 ">
                      <a href={product.href}>
                        {product.count} x ${product.price}.00
                      </a>
                    </h3>
                    <h3 className="text-dark font-jostBodyRegular font-400 text-14">
                      <div className="flex justify-between">
                        <a href={product.href}>Size: {product.size}</a>
                        <Trash className="w-5 h-5 text-red-400" />
                      </div>
                    </h3>
                  </div>
                </li>
              ))}
              <div className="flex justify-between py-5">
                <span className="text-16 text-dark font-jostBodyBold font-700 leading-23">
                  Subtotal
                </span>
                <span className="text-16 text-dark font-jostBodyBold font-700 leading-23">
                  $200.00
                </span>
              </div>
            </ul>

            <button
              type="submit"
              className="w-full rounded-10 border mb-2.5 bg-white border-dark pl-24 pr-24 pt-16.5px pb-16.5px  font-jostBodyRegular text-14 font-400 text-dark"
            >
              View Cart
            </button>

            <button
              type="submit"
              className="w-full rounded-10 bg-dark pl-122.5px pr-122.5px pt-16.5px pb-16.5px  font-jostBodyRegular text-14 font-400 text-white"
            >
              Checkout
            </button>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
