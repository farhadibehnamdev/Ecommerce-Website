"use client";
import Image from "next/image";
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
import { Fragment, useContext, useState } from "react";
import { ShoppingCart } from "./ShoppingCart";
import Link from "next/link";
import api from "@/api/api";
import { User } from "@/api/userApi";
import { useQueryClient } from "@tanstack/react-query";
import SessionContext, { ISessionContext } from "@/contexts/SessionContext";
import {
  Avatar,
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
import { SearchIcon } from "lucide-react";

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
//TODO:refactor
const NavbarUI = function () {
  const [activePanel, setActivePanel] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const query = useQueryClient();
  const { user, isLoading, refetch, isFetching } =
    useContext<ISessionContext>(SessionContext);
  const handleClick = (panel: string) => {
    setActivePanel(panel);
    setOpenSearch(!openSearch);
  };
  //TODO:Take this out to parent
  const handleLogout = async function () {
    const response = await api.get("auth/logout");
    if (response.status === 200) {
      query.resetQueries({ queryKey: ["user"], exact: true });
    }
  };
  const handleMenuClick = (panel: string) => {
    setActivePanel(panel);
    setOpenMenu(!openMenu);
  };
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          {/* <AcmeLogo /> */}
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
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
        <Dropdown placement="bottom-end">
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
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarUI;
