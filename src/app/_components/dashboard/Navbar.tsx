"use client";
import { User as UserApi } from "@/api/userApi";
import { BellIcon } from "@heroicons/react/24/outline";
import {
  Badge,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
  User,
} from "@nextui-org/react";
import SessionContext, { ISessionContext } from "@/contexts/SessionContext";

import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { PiSidebarDuotone } from "react-icons/pi";
const userNavigation = [
  { name: "Your profile", href: "/dashboard/users/profile" },
  { name: "Sign out", href: "#" },
];

const Navbar = function () {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  // const { user, isLoading, isFetching, refetch, status } =
  //   useContext<ISessionContext>(SessionContext);
  const { user, isLoading } = useContext<ISessionContext>(SessionContext);

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
            <div className="max-w-[200px] w-full flex items-center gap-3">
              <div className="flex gap-2">
                <Skeleton className="flex rounded-full w-10 h-10" />
                <Skeleton className="flex rounded-full w-10 h-10" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-6 w-4/5 rounded-lg" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button> */}
              <Badge content="99+" shape="circle" color="danger">
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="more than 99 notifications"
                  variant="light"
                >
                  <Bell size={24} />
                </Button>
              </Badge>
              <Divider
                orientation="vertical"
                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
              />

              {/* Profile dropdown */}

              <Dropdown placement="bottom-start" className="text-slate-800">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      size: "md",
                      isBordered: true,
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description={`${user?.role}`}
                    name={`${user?.firstName} ${user?.lastName}`}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  {userNavigation.map((item) => (
                    <DropdownItem
                      textValue={item.name}
                      className="block px-3  text-sm leading-6 text-black"
                      key={item.name}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
