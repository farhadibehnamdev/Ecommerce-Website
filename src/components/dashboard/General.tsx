"use client";
import { Controller, Control } from "react-hook-form";

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { AddProductFormSchemaType } from "./AddProduct";
import TextEditor from "./TextEditor";

interface IGeneral {
  register: UseFormRegister<AddProductFormSchemaType>;
  errors: FieldErrors<AddProductFormSchemaType>;
  control: Control<AddProductFormSchemaType>;
}

const General = function ({ register, errors, control }: IGeneral) {
  return (
    <>
      <Card className="bg-white w-full" radius="sm">
        <CardHeader className="px-4 py-4">
          <h3 className="text-[22px] font-700 text-slate-600">Basic Info</h3>
        </CardHeader>
        <Divider className="mb-2" />
        <CardBody className="overflow-hidden">
          <div className="mb-5">
            <Input
              type="text"
              variant="bordered"
              label="Product Name"
              placeholder="Product Name"
              labelPlacement="outside"
              size="lg"
              {...register("name", { required: true })}
              errorMessage={errors.name && errors.name.message}
              isInvalid={!!errors.name}
            />
            <span className="text-[12px]">
              A product name is required and recommended to be unique.
            </span>
          </div>
          <div className="mb-5 rounded-lg">
            <p className="mb-2 text-base text-black">Description</p>

            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextEditor onChange={onChange} value={value} errors={errors} />
              )}
            />
            <Spacer y={3} />
            {errors.description && (
              <div className="text-center flex items-center text-red-600">
                <p>{errors?.description?.message}</p>
              </div>
            )}
          </div>
        </CardBody>
      </Card>

      <Spacer y={4} />
    </>
  );
};

export default General;
