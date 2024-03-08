"use client";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { IAddProductFormType } from "@/types/AddProductType";
import { useState } from "react";
import { AddProductFormSchemaType } from "./AddProduct";
import { UseFormSetValue } from "react-hook-form";

type Person = {
  id: number;
  value: string;
  label: string;
  imageUrl: string;
};

const people: Person[] = [
  {
    id: 1,
    value: "Leslie Alexander",
    label: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    value: "Drake M",
    label: "Drake M",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    value: "Ali Karimi",
    label: "Ali Karimi",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

interface IProductTag extends IAddProductFormType {
  setValue: UseFormSetValue<AddProductFormSchemaType>;
}

// More users...
const ProductTag = function ({ register, setValue, errors }: IProductTag) {
  const handleSelectChange = (e: any) => {
    const selectedOptions = e.target.value ? e.target.value.split(", ") : [];
    if (selectedOptions.length > 0) {
      setValue("tags", selectedOptions);
    } else {
      setValue("tags", [""]); // replace '' with a default value if necessary
    }
  };
  return (
    <Card className="bg-white w-full mb-4" shadow="sm" radius="sm">
      <CardHeader className="mt-2 px-4">
        <h3 className="text-[22px] font-bold text-slate-600">Tag</h3>
      </CardHeader>
      <Divider className="mb-2" />
      <CardBody className="overflow-hidden">
        <Select
          labelPlacement="outside"
          variant="bordered"
          label="Please select a tag"
          className="w-full"
          placeholder="No items has been selected."
          size="md"
          selectionMode="multiple"
          {...register("tags", {
            required: true,
            onChange(event) {
              handleSelectChange(event);
            },
          })}
          errorMessage={errors.tags && errors?.tags?.message}
          isInvalid={!!errors.tags}
        >
          {people.map((curr) => (
            <SelectItem
              className="text-slate-800"
              key={curr.value}
              value={curr.value}
              textValue={curr.value}
            >
              <span className="flex items-center">
                <Image
                  width={30}
                  height={30}
                  src={curr.imageUrl}
                  alt=""
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                />

                {curr.label}
              </span>
            </SelectItem>
          ))}
        </Select>
      </CardBody>
    </Card>
  );
};
export default ProductTag;
