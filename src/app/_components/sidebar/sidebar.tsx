"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import {
  LucideIcon,
  Wine,
  TagsIcon,
  Palette,
  PencilRuler,
  Users,
  MessageSquareCode,
  LayoutDashboard,
  ShoppingBag,
  BookHeart,
  FolderTree,
  BadgePercent,
  PackageSearch,
  DoorOpen,
} from "lucide-react";
type NavigationMenu = {
  name: string;
  href: string;
  icon: LucideIcon;
  current: boolean;
};

const navigation: NavigationMenu[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    current: true,
  },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: PackageSearch,
    current: false,
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
    icon: FolderTree,
    current: false,
  },
  { name: "Tags", href: "/tags", icon: TagsIcon, current: false },
  { name: "Brands", href: "/brands", icon: Wine, current: false },
  { name: "Colors", href: "/colors", icon: Palette, current: false },
  { name: "Size", href: "/size", icon: PencilRuler, current: false },
  {
    name: "Customers",
    href: "/dashboard/customers",
    current: false,
    icon: Users,
  },
  {
    name: "Reviews",
    href: "/dashboard/reviews",
    current: false,
    icon: MessageSquareCode,
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    current: false,
    icon: ShoppingBag,
  },
  {
    name: "Favorites",
    href: "/dashboard/favorites",
    current: false,
    icon: BookHeart,
  },
  {
    name: "Discounts",
    href: "/dashboard/discounts",
    current: false,
    icon: BadgePercent,
  },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navMenu, setNavMenu] = useState<NavigationMenu[]>(navigation);
  const activeMenuHandler = (item: NavigationMenu) => {
    setNavMenu((items) =>
      items.map((navLink) => ({
        ...navLink,
        current: item.name === navLink.name,
      }))
    );
  };
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <DoorOpen
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      width={32}
                      height={32}
                      src="images/mark.svg"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-50 text-indigo-600"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-indigo-600"
                                      : "text-gray-400 group-hover:text-indigo-600",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>

                      {/* <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                          <Cog6ToothIcon
                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden shadow-sm  text-sm  lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow  flex-col gap-y-5 overflow-y-auto border-r border-light text-zinc-800 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Image
              width={32}
              height={32}
              src="/images/mark.svg"
              alt="Your Company"
            />
          </div>
          <nav className="flex font-interRegular flex-1 flex-col">
            <ul role="list" className="flex flex-1  flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navMenu.map((item) => (
                    <li key={item.name} onClick={() => activeMenuHandler(item)}>
                      <Link
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-zinc-900 bg-opacity-5  text-black-900"
                            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-black-900"
                              : "text-gray-400 group-hover:text-indigo-600",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <Cog6ToothIcon
                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                  Settings
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
