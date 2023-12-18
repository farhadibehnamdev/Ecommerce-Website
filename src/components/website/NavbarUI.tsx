"use client";
import { useContext, useState } from "react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import api from "@/api/api";
import { useQueryClient } from "@tanstack/react-query";
import SessionContext, { ISessionContext } from "@/contexts/SessionContext";
import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Image,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Spacer,
} from "@nextui-org/react";
import {
  HeartIcon,
  SearchIcon,
  ShoppingBagIcon,
  Trash2Icon,
} from "lucide-react";
import { ShoppingCart } from "./ShoppingCart";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const men = [
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
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];
const women = [
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
];
//TODO:refactor
const NavbarUI = function () {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const query = useQueryClient();
  const { user, isPending, refetch, isFetching, isSuccess } =
    useContext<ISessionContext>(SessionContext);
  console.log("user NavbarUI ::", user);
  // //TODO:Take this out to parent
  const handleLogout = async function () {
    const response = await api.get("auth/logout");
    if (response.status === 200) {
      query.resetQueries({ queryKey: ["userProfile"], exact: true });
    }
  };

  return (
    <Navbar maxWidth="full" className="h-20">
      <NavbarContent className="mx-10">
        <NavbarBrand>
          <p className="font-bold text-inherit text-zinc-900 text-xl">BuyBuy</p>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem isActive className="text-zinc-800">
            Home
          </NavbarItem>
          <NavbarContent className="hidden sm:flex gap-3">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ChevronDownIcon className="w-4 h-4" />}
                    radius="sm"
                    variant="light"
                  >
                    Features
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-fit text-black mx-2"
                classNames={{
                  list: [
                    "grid grid-cols-2 gap-2 mx-auto",
                    "divide-x-1",
                    "divide-zinc-300",
                  ],
                }}
              >
                <DropdownSection title="Men" className="pl-4  w-fit">
                  {men.map((item, index) => (
                    <DropdownItem
                      className="mb-2"
                      key={item.name}
                      href={item.href}
                      description={item.description}
                      startContent={
                        <item.icon className="w-4 h-4 flex items-center justify-center" />
                      }
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                </DropdownSection>
                <DropdownSection title="Women" className="pl-4 w-fit">
                  {women.map((item, index) => (
                    <DropdownItem
                      className="mb-2"
                      key={item.name}
                      href={item.href}
                      description={item.description}
                      startContent={
                        <item.icon className="w-4 h-4 flex items-center justify-center" />
                      }
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
          <NavbarContent justify="center" className="text-zinc-800">
            <NavbarItem>Our story</NavbarItem>
            <NavbarItem>Blog</NavbarItem>
            <NavbarItem>Contact Us</NavbarItem>
          </NavbarContent>
        </NavbarContent>
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
            <NavbarItem className="hidden lg:flex">
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
              <>
                <Button
                  className="bg-zinc-800 text-white"
                  as={Link}
                  href="/auth/login"
                >
                  Login
                </Button>
              </>
            )}
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarUI;
