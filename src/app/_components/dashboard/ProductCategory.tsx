"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { AddProductFormSchemaType, IProductForm } from "./AddProduct";
import { FieldErrors, UseFormRegister } from "react-hook-form";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

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

interface IProductCategory {
  register: UseFormRegister<AddProductFormSchemaType>;
  errors: FieldErrors<AddProductFormSchemaType>;
}

const ProductCategory = function ({ register, errors }: IProductCategory) {
  const [query, setQuery] = useState("");

  return (
    <Card className="bg-white w-full mb-4" shadow="sm" radius="sm">
      <CardHeader className="mt-2 px-4">
        <h3 className="text-[22px] font-bold text-slate-600">Category</h3>
      </CardHeader>
      <Divider className="mb-2" />
      <CardBody className="overflow-hidden">
        <Select
          labelPlacement="outside"
          variant="bordered"
          label="Please select a category"
          className="w-full"
          placeholder="No items has been selected."
          size="md"
          {...register("category", { required: true })}
          errorMessage={errors.category && "You must select a category"}
          isInvalid={errors.category ? true : false}
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

export default ProductCategory;
