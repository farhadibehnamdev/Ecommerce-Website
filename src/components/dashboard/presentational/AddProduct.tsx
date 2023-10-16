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
import ProductFeature from "./ProductFeature";

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
      <div className="grid grid-cols-12 items-stretch md:mx-5">
        <div className="cols-span-12  2xl:col-span-11 text-zinc-800">
          <div className="flex justify-between mb-10 items-end flex-wrap">
            <div className="mb-6 sm:mb-0">
              <h3 className="text-[28px] font-semibold">Add Product</h3>
            </div>
            <div className="mb-2 flex sm:justify-end items-center flex-wrap">
              <Button
                type="submit"
                className="bg-black border text-white py-2 mr-2 px-10"
                radius="sm"
                size="lg"
              >
                Publish
              </Button>
              <Button
                className="py-2  px-10 border  text-black bg-white"
                size="lg"
                radius="sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 md:mx-5">
        <div className="col-span-12  2xl:col-span-11">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-6 mb-6"
          >
            <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
              <General text={text} setText={setText} register={register} />
              <Pricing register={register} handleSubmit={handleSubmit} />
              <ProductFeature />

              <MetaDataUI register={register} />
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
