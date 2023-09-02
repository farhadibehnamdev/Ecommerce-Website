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
  MagnifyingGlassIcon,
  SquaresPlusIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { ShoppingCart } from "./ShoppingCart";
import { Heart, MenuLineHorizontal, Search } from "react-huge-icons/outline";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { loginSelector } from "@/store/slices/auth/loginSlice";

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

const Navbar = function ({ isAuth }: { isAuth: boolean }) {
  const [activePanel, setActivePanel] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = (panel: string) => {
    setActivePanel(panel);
    setOpenSearch(!openSearch);
  };
  const handleClick2 = (panel: string) => {
    setActivePanel(panel);
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white mx-auto  md:max-w-[1440px] lg:max-w-[1440px] xl:max-w-[1440px] py-4"
      >
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mb-2">
            <div className="flex h-16 justify-between items-center">
              <div className="flex px-2 lg:px-0 xs:hidden sm:hidden md:hidden lg:inline-flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    width={144}
                    height={58}
                    className="h-10 w-auto lg:block"
                    src="/images/logo.png"
                    alt="Your Company"
                  />
                </div>
              </div>
              <Disclosure.Button
                onClick={() => handleClick2("menu")}
                className="lg:hidden md:inline-flex xs:inline-flex sm:inline-flex  items-center justify-start rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                <MenuLineHorizontal className="h-10 w-10 xs:block text-dark" />
              </Disclosure.Button>
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
                        <div className="grid grid-cols-2  divide-x  divide-grayOpacity  pt-10 pb-10 lg:grid-cols-2">
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
              <div className=" xs:flex xs:ml-4 xs:gap-6 sm:gap-6 sm:ml-4 md:ml-4 md:justify-start md:flex lg:ml-4 lg:flex lg:items-center gap-5">
                <div className=" xs:flex sm:ml-4 sm:flex  md:ml-4 md:flex md:flex-shrink-0 md:items-center ">
                  <div className="xs:flex sm:flex xs:ml-4 sm:ml-4 sm:gap-3 xs:gap-3 md:ml-4 md:flex md:flex-shrink-0 md:items-center ">
                    <div className="  xs:flex sm:ml-4 sm:flex md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                      <Disclosure.Button
                        onClick={() => handleClick("search")}
                        className="rounded-full bg-white p-1 text-gray-400"
                      >
                        <Search className="h-[25px] w-[25px] text-dark" />
                      </Disclosure.Button>
                    </div>
                    <div className="  xs:flex sm:ml-4 sm:flex md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                      <button className="rounded-full bg-white p-1 text-gray-400">
                        <Heart className="h-[25px] w-[25px] text-dark" />
                      </button>
                    </div>
                    <div className=" xs:flex sm:ml-4 sm:flex xs:items-center xs:justify-center sm:items-center sm:justify-center xs:gap-x-2 sm:gap-x-2  md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                      <ShoppingCart />
                    </div>
                  </div>
                  <div className="flex-shrink-0  xs:flex sm:flex">
                    {isAuth ? (
                      <div className="flex items-center text-dark">
                        {/* Mobile menu button */}

                        {/* Profile dropdown */}
                        <Menu
                          as="div"
                          className="relative ml-3 focus:ring-1 focus:ring-dark focus:outline-stone-800"
                        >
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <Image
                                width={30}
                                height={30}
                                className="h-8 w-8 rounded-full"
                                src="/images/photo-profile.jpg"
                                alt=""
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Your Profile
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    ) : (
                      <Link
                        href="/auth/login"
                        type="button"
                        className="relative rounded-10 bg-dark py-13.5px px-30px hover:text-dark hover:bg-white hover:ring-1 hover:ring-dark"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {activePanel === "menu" && (
            <Transition
              show={openMenu}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="lg:hidden text-dark text-16 font-jostBodyRegular font-400">
                <div className="space-y-1 pb-3 pt-2">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                  >
                    Home
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    Shop
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    Our Story
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    Contact us
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </Transition>
          )}
        </>
      </Disclosure>
      {activePanel === "search" && (
        <Disclosure>
          <Transition
            show={openSearch}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className=" visible  mx-auto max-w-7xl px-2 sm:px-4 border-t-[1px] border-grayOpacity lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="relative z-10 flex px-2 lg:px-0"></div>
                <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      )}
    </>
  );
};

export default Navbar;
