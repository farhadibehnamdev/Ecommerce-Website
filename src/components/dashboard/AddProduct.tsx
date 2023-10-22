import { useContext, useRef, useState } from "react";
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
import { useForm } from "react-hook-form";
import useAddProduct from "@/hooks/useAddProduct";
import { StepsType } from "./Stepper";
import { StepperContext } from "@/contexts/StepperContext";

interface AddProdcutsProps {
  steps: StepsType[];
  setStepComplete: Function;
}

interface ProductForm {
  name: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  currency: string;
  quantity: number;
  size: string;
  color: string;
  tags: string[];
  details: string;
}

const AddProduct = function ({ steps, setStepComplete }: AddProdcutsProps) {
  const query = useAddProduct();
  const context = useContext(StepperContext);
  if (!context)
    throw new Error("Stepper must be used within a StepperProvider");
  const { currentStep } = context;
  const { register, handleSubmit } = useForm();
  const editorRef = useRef();
  const formRef = useRef(null);
  const onSubmit = function (data: any) {
    const dataStep = steps.map((step) => {
      return {
        ...step,
        current: step.id === currentStep ? false : true,
        status: step.id === currentStep ? "completed" : "not",
      };
    });
    setStepComplete(dataStep);
  };
  return (
    <>
      <div className="max-w-full md:mx-5">
        <div className="w-full text-zinc-800">
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

      <div className="max-w-full md:mx-5">
        <div className="col-span-12  2xl:col-span-11">
          <form
            // ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-6 mb-6"
          >
            <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
              <General register={register} />
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
            <Button
              type="submit"
              className="bg-black border text-white py-2 mr-2 px-10"
              radius="sm"
              size="lg"
            >
              Publish
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
