"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";

const MetaDataUI = function ({ register }: any) {
  return (
    <Card className="bg-white w-full" shadow="sm" radius="sm">
      <CardHeader className="px-4 py-4">
        <h3 className="text-[25px] font-bold">SEO</h3>
      </CardHeader>
      <Divider className="mb-2" />
      <CardBody className="overflow-hidden">
        <div className="mb-5 flex justify-between">
          <Input
            type="text"
            variant="bordered"
            label="Meta Title"
            placeholder="Product Name"
            labelPlacement="outside"
            size="lg"
            {...register("metaTitle")}
            className="w-full"
          />
          <Spacer x={3} />
          <Input
            type="text"
            variant="bordered"
            label="Meta Title"
            placeholder="Product Name"
            labelPlacement="outside"
            size="lg"
            className="w-full"
            {...register("metakeyword")}
          />
        </div>
        <div className="mb-5">
          <Textarea
            variant="bordered"
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default MetaDataUI;
