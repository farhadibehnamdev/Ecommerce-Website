import { User } from "@/api/userApi";
import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment, useContext, useState } from "react";
import ContentLoader from "react-content-loader";
import { PiSidebarDuotone } from "react-icons/pi";
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type NavbarProps = {
  user: User;
  isLoading: boolean;
  setSidebarOpen: Function;
};

const Navbar = function ({ user, isLoading, setSidebarOpen }: NavbarProps) {
  return (
    <div className="lg:pl-72 text-zinc-900 border-b border-light">
      <div className="sticky top-0 z-40 font-jostBodyBold flex h-16 shrink-0 items-center gap-x-4 bg-white px-4  sm:gap-x-6 sm:px-6 lg:px-8">
        {/* Separator */}
        <div className="h-6 w-px  bg-gray-200 lg:hidden" aria-hidden="true" />

        <div className="flex flex-1 text-dark gap-x-4 self-stretch lg:gap-x-6">
          <button
            type="button"
            className="my-3 -mx-3 p-2.5 text-gray-700 flex flex-1 relative"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <PiSidebarDuotone className="w-5 h-5 text-dark cursor-pointer rounded-lg justify-center items-center gap-1 inline-flex" />
          </button>
          {isLoading ? (
            <>
              <ContentLoader
                speed={1}
                width={400}
                height={160}
                viewBox="0 0 400 160"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="292" y="25" rx="3" ry="3" width="88" height="17" />
                <circle cx="258" cy="31" r="20" />
                <circle cx="186" cy="31" r="20" />
              </ContentLoader>
            </>
          ) : (
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                aria-hidden="true"
              />

              {/* Profile dropdown */}

              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <Image
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="images/mark.svg"
                    alt=""
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <p
                      className="ml-4 text-sm font-semibold leading-6 text-dark "
                      aria-hidden="true"
                    >
                      {`${user?.firstName} ${user?.lastName}`}
                    </p>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
