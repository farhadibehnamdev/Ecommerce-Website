"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import SessionContext, { ISessionContext } from "@/contexts/SessionContext";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { HeartIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";
import { ShoppingCart } from "../../(site)/_components/shopping-cart";
import { TopNavigation } from "./top-navigation";

export const Header = function () {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { user } = useContext<ISessionContext>(SessionContext);
  const handleLogout = async function () {};

  return (
    <Navbar maxWidth="full" className="h-20">
      <NavbarContent className="mx-10">
        <NavbarBrand>
          <p className="font-bold text-inherit text-zinc-900 text-xl">BuyBuy</p>
        </NavbarBrand>
        <TopNavigation />
        <NavbarContent justify="end" className="text-zinc-600 ">
          <NavbarItem className="flex justify-center items-center gap-3">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
            />
            <HeartIcon className="w-6 h-6 hover:cursor-pointer" />
            <Dropdown
              backdrop="blur"
              radius="sm"
              placement="bottom-end"
              className="text-zinc-800 mt-2"
            >
              <DropdownTrigger>
                <ShoppingBagIcon className="w-6 h-6 hover:cursor-pointer" />
              </DropdownTrigger>
              <ShoppingCart />
            </Dropdown>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex ">
            {user ? (
              <Dropdown placement="bottom-end" className="text-zinc-800">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="font-semibold">{user.email}</p>
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button
                className="bg-zinc-800 text-white"
                as={Link}
                href="/auth/login"
              >
                Login
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
};
