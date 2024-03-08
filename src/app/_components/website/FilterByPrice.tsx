import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const FilterByPrice = function () {
  return (
    <Disclosure
      as="div"
      key={"Product_Categories"}
      className="border-b border-grayOpacity py-6 text-dark text-16 flex flex-col"
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root ">
            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-bold  text-dark text-[18px]">
                Filter by Price
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

          <Disclosure.Panel as="div">
            <div className="mt-5 mb-4">
              <span className="text-dark text-16">Price: $0 - $200</span>
            </div>
            <Slider
              range
              allowCross={false}
              defaultValue={[0, 20]}
              trackStyle={{ backgroundColor: "#000" }}
              handleStyle={{
                backgroundColor: "#000",
                borderColor: "#000",
              }}
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FilterByPrice;
