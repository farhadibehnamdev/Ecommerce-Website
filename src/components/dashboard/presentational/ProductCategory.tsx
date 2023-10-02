"use client";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Person = {
  id: number;
  name: string;
  imageUrl: string;
};

const people: Person[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More users...
];
const ProductCategory = function () {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person: Person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className="col-span-12 mb-5 rounded-md bg-white p-5 shadow-sm gap-x-8 gap-y-8 md:grid-cols-2">
      <h3 className=" mb-4  text-lg font-bold text-zinc-800 leading-6">
        Category
      </h3>
      <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Label className="block text-[12px] font-medium leading-6 text-zinc-600 ">
          Please select a category
        </Combobox.Label>
        <div className="relative  w-full block">
          <Combobox.Input
            placeholder="No item has been selected."
            className="w-full block rounded-md border-0 pl-7 bg-white py-1.5  text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-1 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(person: Person) => person?.name}
          />
          <Combobox.Button className="absolute w-full inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon
              className="h-5 w-5 text-zinc-500"
              aria-hidden="true"
            />
          </Combobox.Button>

          {filteredPeople.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.map((person: Person) => (
                <Combobox.Option
                  key={person.id}
                  value={person}
                  className={({ active }) =>
                    classNames(
                      "relative cursor-default select-none py-2 pl-3 pr-9",
                      active ? "bg-zinc-600 text-white" : "text-gray-900"
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <div className="flex items-center">
                        <Image
                          src={person.imageUrl}
                          alt=""
                          className="h-6 w-6 flex-shrink-0 rounded-full"
                          width={30}
                          height={30}
                        />
                        <span
                          className={classNames(
                            "ml-3 truncate",
                            selected && "font-semibold"
                          )}
                        >
                          {person.name}
                        </span>
                      </div>

                      {selected && (
                        <span
                          className={classNames(
                            "absolute inset-y-0 right-0 flex items-center pr-4",
                            active ? "text-white" : "text-zinc-600"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  );
};

export default ProductCategory;
