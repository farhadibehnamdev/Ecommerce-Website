import { current } from "@reduxjs/toolkit";
import AdditionalInfoTab from "./AdditionalInfoTab";
import DescriptoinTab from "./DescriptionTab";
import ReviewsTab from "./ReviewsTab";
import { useState } from "react";
const tabs = [
  {
    name: "Descriptions",
    component: <DescriptoinTab />,
    href: "#",
    current: false,
  },
  {
    name: "Additional Information",
    component: <AdditionalInfoTab />,
    href: "#",
    current: false,
  },
  { name: "Reviews", component: <ReviewsTab />, href: "#", current: true },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const ProductDetailsTabs = function () {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <>
      <section aria-labelledby="details-heading" className="mt-12 text-dark5">
        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              defaultValue={tabs.find((tab: any) => tab?.current)?.name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? "border-dark text-dark font-700"
                        : "border-transparent text-dark  hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                    onChange={() => setCurrentTab(tab)}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto w-full bg-red-600">
        <div className="text-dark text-16">{currentTab.component}</div>
      </section>
    </>
  );
};
export default ProductDetailsTabs;
