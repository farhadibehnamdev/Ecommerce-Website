"use client";
import {
  Button,
  Card,
  CardBody,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BreadcrumbUI from "./BreadcrumbUI";

type AddCategoryType = {
  name: string;
  description: string;
};

const AddCategorySchema = z.object({
  name: z.string().min(1, "Please fill in the name field."),
  description: z.string(),
});

export type AddCategorySchemaType = z.infer<typeof AddCategorySchema>;
const AddCategory = function () {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddCategoryType>();
  const onSubmit = function (data: AddCategorySchemaType) {
    console.log("data ::: ", data);
  };
  return (
    <div className="w-full">
      <BreadcrumbUI />
      <div className="w-1/2 mx-auto ">
        <h1 className="text-3xl text-zinc-800 font-semibold">Add Category</h1>
        <Spacer y={4} />

        <form
          // ref={formRef}
          className="mx-auto w-full "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Card>
              <CardBody className="w-full p-5">
                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                  <Input
                    type="text"
                    label="Name"
                    placeholder="abc"
                    labelPlacement="outside"
                    variant="bordered"
                    className="max-w-full bg-white"
                    size="lg"
                    {...register("name", { required: true })}
                    errorMessage={errors.name && errors.name.message}
                    isInvalid={!!errors.name}
                  />
                </div>
                <Spacer y={4} />
                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                  <Textarea
                    label="Description"
                    variant="bordered"
                    placeholder="Enter your description"
                    disableAnimation
                    labelPlacement="outside"
                    disableAutosize
                    classNames={{
                      base: "w-full",
                      input: "resize-y min-h-[40px]",
                    }}
                  />
                </div>
              </CardBody>
            </Card>
            <Spacer y={4} />

            <Button
              type="submit"
              className="bg-black border text-white py-2 mr-2 px-10"
              radius="sm"
              size="lg"
            >
              Publish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCategory;
