import { useRef, useState } from "react";
import MetaDataUI from "./MetaDataUI";
import ProductCategory from "./ProductCategory";
import ProductBrand from "./ProductBrand";
import ProductVisibility from "./ProductVisibility";
import Pricing from "./Pricing";
import ProductTag from "./ProductTag";
import General from "./General";
import BreadcrumbUI from "./BreadcrumbUI";
import { UseFormRegisterReturn } from "react-hook-form";
import { Button } from "@nextui-org/react";

interface AddProdcutsProps {
  register: Function;
  handleSubmit: Function;
}

const AddProduct = function ({ register, handleSubmit }: AddProdcutsProps) {
  const editorRef = useRef();
  const [text, setText] = useState<string>("");
  const formRef = useRef(null);
  const onSubmit = function (data: any) {
    console.log("salam ::", data);
  };
  return (
    <>
      <BreadcrumbUI />

      <div className="grid grid-cols-12 mt-5 md:mx-5">
        <div className="cols-span-12  2xl:col-span-11 text-zinc-800">
          <div className="flex justify-between mb-10 items-end flex-wrap">
            <div className="mb-6 sm:mb-0">
              <h3 className="mb-0 text-[28px] font-semibold">Add Product</h3>
            </div>
            <div className="mb-2 flex sm:justify-end items-center flex-wrap">
              {/* <button
                type="submit"
                className="bg-black  text-white rounded-md px-10 py-2 mr-2 hover:text-black hover:bg-white hover:border-white  sm:mb-0 mb-2"
              ></button> */}
              <Button
                type="submit"
                className="bg-black text-white py-2 mr-2 px-10"
                radius="lg"
                size="lg"
              >
                Publish
              </Button>
              <button className="px-10 py-2 border border-[#dfdfdf] rounded-md bg-white text-black hover:text-black hover:bg-white hover:border-white sm:mb-0 mb-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 md:mx-5">
        <div className="col-span-12  2xl:col-span-11">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-6 mb-6"
          >
            <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
              <General text={text} setText={setText} register={register} />
              <Pricing register={register} handleSubmit={handleSubmit} />
              {/* <div className="flex w-full flex-col shadow-sm">
                <Tabs
                  size="lg"
                  variant="underlined"
                  className="bg-white rounded-t-md"
                  color="default"
                  aria-label="Options"
                >
                  <Tab
                    className="bg-white  rounded-b-md"
                    key="photos"
                    title="Main Image"
                  >
                    <FileInputContainer />
                  </Tab>
                  <Tab
                    className="bg-white  rounded-b-md"
                    key="music"
                    title="Image Gallery"
                  >
                    <div className="bg-white p-4 w-full">bye</div>
                  </Tab>
                </Tabs>
              </div> */}
              <MetaDataUI />
            </div>

            <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
              <ProductVisibility />
              <ProductCategory />
              <ProductBrand />
              <ProductTag />
            </div>
            <button
              type="submit"
              hidden
              className="bg-black hidden text-white rounded-md px-10 py-2 mr-2 hover:text-black hover:bg-white hover:border-white  sm:mb-0 mb-2"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
