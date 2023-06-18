"use client";
import Image from "next/image";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const solutions = [
  {
    id: 1,
    title: "Men",
    data: [
      {
        name: "Analytics",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: ChartPieIcon,
      },
      {
        name: "Integrations",
        description: "Connect with third-party tools and find out expectations",
        href: "#",
        icon: SquaresPlusIcon,
      },
      {
        name: "Engagement",
        description:
          "Speak directly to your customers with our engagement tool",
        href: "#",
        icon: CursorArrowRaysIcon,
      },
    ],
  },
  {
    id: 2,
    title: "Women",
    data: [
      {
        name: "Automations",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: ArrowPathIcon,
      },
      {
        name: "Security",
        description: "Your customers' data will be safe and secure",
        href: "#",
        icon: FingerPrintIcon,
      },
      {
        name: "Reports",
        description: "Edit, manage and create newly informed decisions",
        href: "#",
        icon: DocumentChartBarIcon,
      },
    ],
  },
];

const Navbar = function () {
  return (
    <Disclosure as="nav" className="bg-white shadow lg:pt-4 lg:pb-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    width={144}
                    height={58}
                    className="hidden h-10 w-auto lg:block"
                    src="/images/logo.png"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                <a
                  href="#"
                  className="inline-flex font-jostBodyRegular text-16 font-normal leading-23 items-center border-b-2  px-1 pt-1 text-dark"
                >
                  Home
                </a>
                <Popover className="relative flex">
                  <Popover.Button className="inline-flex items-center gap-x-1 text-16 font-jostBodyRegular leading-23 focus:outline-none">
                    <span className="text-dark">Shop</span>
                    <ChevronDownIcon
                      className="h-5 w-5 text-dark"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-16 flex w-screen max-w-max -translate-x-1/3 px-4">
                      <div className="w-screen max-w-md  flex-auto overflow-hidden  bg-white text-16 leading-23 shadow-lg ring-1 ring-zinc-200 lg:max-w">
                        <div className="grid grid-cols-2  divide-x divide-grayOpacity  pt-10 pb-10 lg:grid-cols-2">
                          {solutions.map((items, index) => (
                            <div
                              key={items.id}
                              className="grid gap-y-3 pl-10 pr-0"
                            >
                              <p className="text-dark font-jostBodyBold font-700 mb-5">
                                {items.title}
                              </p>
                              {items.data.map((item, index) => {
                                return (
                                  <a
                                    key={item.name}
                                    className={`inline-block text-dark font-jostBodyRegular text-16 leading-23 ${
                                      index < solutions.length ? "mb-4" : ""
                                    }`}
                                  >
                                    {item.name}
                                  </a>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <a
                  href="#"
                  className="inline-flex items-center font-jostBodyRegular text-16 font-normal leading-23 border-b-2 border-transparent px-1 pt-1  text-dark hover:border-gray-300 hover:text-gray-700"
                >
                  Our Story
                </a>
                <a
                  href="#"
                  className="inline-flex font-jostBodyRegular text-16 font-normal leading-23 items-center border-b-2 border-transparent px-1 pt-1  text-dark hover:border-gray-300 hover:text-gray-700"
                >
                  Contact Us
                </a>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center gap-5">
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                    <button className="rounded-full bg-white p-1 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                      >
                        <path
                          fill="#131118"
                          fillRule="evenodd"
                          d="M2.75 11.5a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0Zm8.75 10.25c-5.66 0-10.25-4.59-10.25-10.25S5.84 1.25 11.5 1.25 21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                    <button className="rounded-full bg-white p-1 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        fill="none"
                      >
                        <path
                          stroke="#131118"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M11.765 2.702 11 3.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                    <button className="rounded-full bg-white p-1 text-gray-400">
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
                    </button>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative rounded-10 bg-dark py-13.5px px-30px"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
