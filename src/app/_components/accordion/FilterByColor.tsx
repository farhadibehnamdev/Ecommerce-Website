import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const filters = [
  {
    id: "color",
    name: "Filter by Color",
    options: [
      { value: "red", label: "Red", count: 6 },
      { value: "blue", label: "Blue", count: 60 },
      { value: "orange", label: "Orange", count: 12 },
      { value: "black", label: "Black", count: 2 },
      { value: "green", label: "Green", count: 15 },
    ],
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const FilterByColor = function () {
  return (
    <>
      <form>
        {filters.map((section) => (
          <Disclosure
            as="div"
            key={section.id}
            className="border-b border-grayOpacity py-6 text-dark text-16 flex flex-col"
          >
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root ">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-bold  text-dark text-[18px]">
                      Filter by Color
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <span
                            id={`filter-${section.id}-${optionIdx}`}
                            className={`h-4 w-4 bg-${
                              option.value === "black"
                                ? "black"
                                : option.value + "-600"
                            } rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                          ></span>
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          ({option.count})
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
    </>
  );
};

export default FilterByColor;
