"use client";

import { Divider } from "primereact/divider";

const MetaDataUI = function () {
  return (
    <div className="col-span-12 shadow-sm xl:col-span-8 2xl:col-span-9">
      <div className="mb-6 bg-white px-8 py-8 rounded-md">
        <h3 className="text-[25px] mb-4 font-bold  leading-6 text-gray-900">
          SEO
        </h3>
        <Divider className="bg-red-600" />
        <div className="bg-white grid grid-cols-2 gap-4 sm:rounded-md md:col-span-2">
          <div className="mt-2">
            <label
              htmlFor="about"
              className="block mb-2 text-base leading-6 text-gray-900"
            >
              Meta Title
            </label>
            <div className="rounded-md  ring-1 ring-zinc-200">
              <input
                type="text"
                name="website"
                id="website"
                className="block w-full p-3 flex-1 border-0 bg-transparent  text-zinc-200 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="www.example.com"
              />
            </div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="about"
              className="block mb-2 text-base leading-6 text-gray-900"
            >
              Meta Keywords
            </label>
            <div className="rounded-md  ring-1 ring-zinc-200">
              <input
                type="text"
                name="website"
                id="website"
                className="block w-full flex-1 border-0 bg-transparent p-3 text-zinc-200 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="www.example.com"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="rounded-md ">
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Meta Description
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  cols={10}
                  name="comment"
                  id="comment"
                  className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-zinc-400 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaDataUI;
