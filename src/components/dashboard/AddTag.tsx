import useAddTag from "@/hooks/tags/useAddTag";
("use client");
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

type AddTagType = {
  code: string;
  name: string;
};

const AddTagSchema = z.object({
  code: z.string().min(3, "Please fill in the code field."),
  name: z.string().min(3, "Please fill in the name field."),
});

export type AddTagSchemaType = z.infer<typeof AddTagSchema>;
const AddTag = function () {
  const { addTagMutation } = useAddTag();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddTagType>();
  const onSubmit = function (data: AddTagSchemaType) {
    addTagMutation.mutate(data);
  };
  return (
    <div className="w-full">
      <BreadcrumbUI />
      <div className="w-1/2 mx-auto ">
        <h1 className="text-3xl text-zinc-800 font-semibold">Add Tag</h1>
        <Spacer y={4} />

        <form className="mx-auto w-full " onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Card>
              <CardBody className="w-full p-5">
                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                  <Input
                    type="text"
                    label="Code"
                    placeholder="abc"
                    labelPlacement="outside"
                    variant="bordered"
                    className="max-w-full bg-white"
                    size="lg"
                    {...register("code", { required: true })}
                    errorMessage={errors.code && errors.code.message}
                    isInvalid={!!errors.code}
                  />
                </div>
                <Spacer y={4} />

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
            <Button
              variant="bordered"
              className="bg-white py-2 mr-2 px-10"
              radius="sm"
              size="lg"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTag;
