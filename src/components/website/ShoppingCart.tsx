import {
  Image,
  Button,
  Divider,
  DropdownItem,
  DropdownSection,
  DropdownMenu,
} from "@nextui-org/react";
import { Trash2Icon } from "lucide-react";
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
    <DropdownMenu
      className="w-fit"
      aria-label="Profile Actions"
      variant="flat"
      itemClasses={{
        base: ["data-[hover=true]:bg-white", "cursor:none", "rounded-none"],
      }}
    >
      <DropdownItem className="ml-1 mb-7">
        <h1 className="text-zinc-900 text-16">You have 3 items in your cart</h1>
      </DropdownItem>
      <DropdownSection>
        <DropdownItem key="item1" className="h-14  mb-11 outline-none">
          <div className="flex justify-center items-center gap-4 p-2">
            <div className="">
              <Image
                radius="sm"
                alt="image cart"
                className="w-[60px] h-[60px]"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </div>
            <div className="flex flex-col text-zinc-800 gap-1">
              <p className="font-semibold">Girls Pink Moana Printed Dress</p>
              <p className="font-bold">1 x $80.00</p>
              <p className="font-medium"> Size: S</p>
            </div>
            <div className="flex justify-end items-end">
              <Trash2Icon className="w-4 h-4 text-red-400" />
            </div>
          </div>
          <Divider orientation="horizontal" className="bg-zinc-100" />
        </DropdownItem>
        <DropdownItem key="item2" className="h-14  mb-11 outline-none">
          <div className="flex justify-center items-center gap-3 p-2">
            <div className="">
              <Image
                radius="sm"
                alt="image cart"
                className="w-[60px] h-[60px]"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </div>
            <div className="flex flex-col text-zinc-800 gap-1">
              <p className="font-semibold">Girls Pink Moana Printed Dress</p>
              <p className="font-bold">1 x $80.00</p>
              <p className="font-medium"> Size: S</p>
            </div>
            <div className="flex justify-end items-end">
              <Trash2Icon className="w-4 h-4 text-red-400" />
            </div>
          </div>
          <Divider orientation="horizontal" className="bg-zinc-100" />
        </DropdownItem>
        <DropdownItem key="item2" className="h-14 mb-8">
          <div className="flex justify-center items-center gap-3 p-3">
            <div className="">
              <Image
                radius="sm"
                alt="image cart"
                className="w-[60px] h-[60px]"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </div>
            <div className="flex flex-col text-zinc-800 gap-1">
              <p className="font-semibold">Girls Pink Moana Printed Dress</p>
              <p className="font-bold">1 x $80.00</p>
              <p className="font-medium"> Size: S</p>
            </div>
            <div className="flex justify-end items-end">
              <Trash2Icon className="w-4 h-4 text-red-400" />
            </div>
          </div>
          <Divider orientation="horizontal" className="bg-zinc-100" />
        </DropdownItem>
      </DropdownSection>
      <DropdownItem key="subtotal" className="mb-5">
        <div className="flex justify-between mx-2">
          <span className="font-bold text-16">Subtotal</span>
          <span className="font-bold text-16">$200.00</span>
        </div>
      </DropdownItem>
      <DropdownItem>
        <Button variant="bordered" radius="sm" size="lg" className="w-full">
          View Cart
        </Button>
      </DropdownItem>
      <DropdownItem>
        <Button radius="sm" className="bg-zinc-800 w-full text-white" size="lg">
          Checkout
        </Button>
      </DropdownItem>
    </DropdownMenu>
  );
};
