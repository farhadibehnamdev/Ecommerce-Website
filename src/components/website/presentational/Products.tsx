"use client";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";
import ProductItems from "./ProductItems";
import FiltersProduct from "./FiltersProduct";
import Breadcrumbs from "./Breadcrumbs";
import Pagination from "./Pagination";

const Products = function () {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-14">
            <Breadcrumbs />

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-[2fr,8fr] gap-10">
              <FiltersProduct />
              <ProductItems />
            </div>
            <Pagination />
          </section>
        </main>
      </div>
    </>
  );
};

export default Products;
