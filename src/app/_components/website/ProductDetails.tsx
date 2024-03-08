"use client";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import ProductDetailsTabs from "./ProductDetailsTabs";
import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";

const product = {
  name: "YK Disney",
  subTitle: "Girls Pink Moana Printed Dress",
  price: "$80",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
      thumbnails: [0, 1, 2],
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Red",
      bgColor: "bg-red-600",
      selectedColor: "ring-red-700",
    },
    {
      name: "Washed Blue",
      bgColor: "bg-blue-600",
      selectedColor: "ring-blue-400",
    },

    {
      name: "Washed Orange",
      bgColor: "bg-orange-500",
      selectedColor: "ring-orange-500",
    },
    {
      name: "Washed Black",
      bgColor: "bg-dark",
      selectedColor: "ring-gray-500",
    },
    {
      name: "Washed Green",
      bgColor: "bg-green-500",
      selectedColor: "ring-green-500",
    },
    {
      name: "Washed Yellow",
      bgColor: "bg-yellow-500",
      selectedColor: "ring-yellow-500",
    },
  ],
  description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
  reviews: [],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
let temp = 17;

const ProductDetails = function () {
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto  sm:px-6 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ProductImageGallery product={product} classNames={classNames} />
          <ProductInfo product={product} classNames={classNames} />
        </div>
        <ProductDetailsTabs />
      </div>
    </div>
  );
};

export default ProductDetails;
