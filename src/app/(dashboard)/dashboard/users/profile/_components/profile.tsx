"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Pencil } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex justify-center">
      {false ? (
        <p>loading...</p>
      ) : (
        <div className="divide-y  w-1/3 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6 bg-zinc-100">
            {/* Content goes here */}
            {/* We use less vertical padding on card headers on desktop than on body sections */}
            <div>
              <button className="bg-zinc-800 rounded-10 px-4 py-2 flex justify-between gap-2 items-center ">
                <Pencil className="w-4 h-4" /> <span>Edit</span>
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
                ben farhadi
              </p>
              <p className="text-zinc-800 text-sm font-medium text-center">
                Admin
              </p>
            </div>
          </div>

          <div className="px-4 py-5  sm:p-6"></div>
        </div>
      )}
    </div>
  );
}
