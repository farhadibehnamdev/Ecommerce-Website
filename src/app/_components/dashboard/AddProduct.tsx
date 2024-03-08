"use client";
import { useContext, useRef, useState } from "react";
import ProductCategory from "./ProductCategory";
import ProductBrand from "./ProductBrand";
import Pricing from "./Pricing";
import ProductTag from "./ProductTag";
import General from "./General";
import { Button } from "@nextui-org/react";
import ProductFeature from "./ProductFeature";
import { useForm } from "react-hook-form";
import useAddProduct from "@/hooks/products/useAddProduct";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface IProductForm {
  name: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  currency: string;
  quantity: number;
  size: string[];
  color: string[];
  tags: string[];
  // details: string;
}
const AddProductFormSchema = z.object({
  name: z.string().min(1, "You must put a name for your product"),
  description: z
    .string()
    .min(5, "You must write at least 5 characters.")
    .trim(),
  category: z.string().min(1, "You must select a category"),
  brand: z.string().min(1, "You must select a brand"),
  price: z.number().min(1, "You must put a valid product price"),
  currency: z.string().min(1, "You must select a currency"),
  quantity: z.number().min(0, "You must put a right value like 0 or more"),
  size: z.string().array().nonempty("You must select a size"),
  color: z.string().array().nonempty("You must select a color"),
  tags: z.string().array().nonempty(),
});
export type AddProductFormSchemaType = z.infer<typeof AddProductFormSchema>;

const AddProduct = function ({ onComplete }: any) {
  const { productAddMutation } = useAddProduct();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<AddProductFormSchemaType>({
    resolver: zodResolver(AddProductFormSchema),
  });
  const editorRef = useRef();
  const formRef = useRef(null);
  const onSubmit = function (data: any) {
    productAddMutation.mutate(data);
    onComplete();
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
              <General control={control} register={register} errors={errors} />
              <Pricing register={register} errors={errors} />
              <ProductFeature
                setValue={setValue}
                register={register}
                errors={errors}
              />
              {/* <MetaDataUI register={register} errors={errors} /> */}
            </div>

            <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
              <ProductCategory register={register} errors={errors} />
              <ProductBrand register={register} errors={errors} />
              <ProductTag
                setValue={setValue}
                register={register}
                errors={errors}
              />
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
