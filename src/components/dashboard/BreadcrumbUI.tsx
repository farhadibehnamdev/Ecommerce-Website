"use client";
import useBreadcrumb, { Items } from "@/hooks/useBreadcrumb";
import { HomeIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BreadcrumbUI = function () {
  const path = useBreadcrumb();
  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4 md:mx-5">
        <li>
          <div>
            <Link
              href="/dashboard"
              className="text-zinc-400 hover:text-gray-500"
            >
              <HomeIcon
                className="h-5 w-5 flex-shrink-0 hover:text-zinc-800"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {path.map((page: Items) => {
          return (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-zinc-400"
                  aria-hidden="true"
                />

                <Link
                  href={page.current ? "#" : page.href}
                  className={`ml-3 text-base font-medium text-zinc-400 ${
                    page.current ? "" : "hover:text-zinc-800"
                  }`}
                  aria-current={page.current ? "page" : undefined}
                >
                  <span className="flex justify-between items-center gap-2">
                    <page.icon
                      className={`h-5 w-5 flex-shrink-0 ${
                        page.current ? "" : "hover:text-zinc-800"
                      }`}
                      aria-hidden="true"
                    />

                    <span>{page.name}</span>
                  </span>
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbUI;
