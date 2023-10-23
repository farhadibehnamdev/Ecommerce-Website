"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { UserProfile, userProfile } from "@/api/userApi";
import { MdEditSquare } from "react-icons/md";

const fetchUserProfile = async function () {
  const response = await userProfile();
  if (response.status === 200) {
    return response.data;
  } else if (response.status >= 400) {
    throw new Error(response.data.message);
  }
};

export default function Profile() {
  const { data, isLoading, isError } = useQuery<UserProfile>(
    ["userProfile"],
    fetchUserProfile
  );
  return (
    <div className="flex justify-center">
      {isLoading ? (
        <MoonLoader
          color="#bfbcbc"
          loading={isLoading}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="divide-y  w-1/3 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6 bg-zinc-100">
            {/* Content goes here */}
            {/* We use less vertical padding on card headers on desktop than on body sections */}
            <div>
              <button className="bg-zinc-800 rounded-10 px-4 py-2 flex justify-between gap-2 items-center ">
                <AiFillEdit className="w-4 h-4" /> <span>Edit</span>
              </button>
            </div>
            <div className="flex justify-center">
              <div className=" rounded-full bg-white p-1">
                <Image
                  unoptimized={true}
                  priority
                  width={32}
                  height={32}
                  quality={100}
                  className="inline-block h-28 w-28 rounded-full"
                  src="/images/photo-profile.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-zinc-800 font-medium text-center text-lg">
                {data?.firstName} {data?.lastName}
              </p>
              <p className="text-zinc-800 text-sm font-medium text-center">
                {data?.role}
              </p>
            </div>
          </div>

          <div className="px-4 py-5  sm:p-6"></div>
        </div>
      )}
    </div>
  );
}

import { UserIcon } from "@heroicons/react/20/solid";
import { IoSettings } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import {
  AiFillEdit,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa6";
import { MoonLoader } from "react-spinners";
import { TbEditCircle } from "react-icons/tb";
import Settings from "./Settings";
import GeneralTabInfo from "./GeneralTabInfo";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
