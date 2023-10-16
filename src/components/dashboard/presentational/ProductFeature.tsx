import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
  Spacer,
  Input,
  ListboxItem,
} from "@nextui-org/react";
import Image from "next/image";

type Color = {
  id: number;
  value: string;
  color: string;
};

type Size = {
  id: number;
  value: string;
};

const colors: Color[] = [
  { id: 1, value: "bg-red-500", color: "red" },
  { id: 2, value: "bg-blue-500", color: "blue" },
  { id: 3, value: "bg-black", color: "black" },
  { id: 4, value: "bg-lime-500", color: "lime" },
];

const sizes: Size[] = [
  { id: 1, value: "xs" },
  { id: 2, value: "sm" },
  { id: 3, value: "lg" },
  { id: 4, value: "lx" },
];
const ProductFeature = function () {
  return (
    <Card className="bg-white w-full mb-4" shadow="sm" radius="sm">
      <CardHeader className="px-4 py-4">
        <h3 className="text-[25px] bg- font-bold">Additional Feature</h3>
      </CardHeader>
      <Divider className="mb-2" />
      <CardBody className="overflow-hidden">
        <div className="mb-5 flex justify-between">
          <Select
            labelPlacement="outside"
            variant="bordered"
            label="Please select a color"
            className="w-full"
            placeholder="No items has been selected."
            size="md"
            selectionMode="multiple"
          >
            {colors.map((curr) => (
              <SelectItem
                className="text-slate-800"
                key={curr.value}
                value={curr.color}
                textValue={curr.color}
                startContent={
                  <span className={`${curr.value} rounded-full w-5 h-5`} />
                }
              >
                <span className="flex items-center">{curr.color}</span>
              </SelectItem>
            ))}
          </Select>
          <Spacer x={3} />
          <Select
            labelPlacement="outside"
            variant="bordered"
            label="Please select a size"
            className="w-full"
            placeholder="No items has been selected."
            size="md"
            selectionMode="multiple"
          >
            {sizes.map((curr) => (
              <SelectItem
                className="text-slate-800"
                key={curr.value}
                value={curr.value}
                textValue={curr.value}
              >
                <span className="flex items-center">{curr.value}</span>
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="mb-5">
          <Input
            type="text"
            variant="bordered"
            label="Quantity"
            placeholder="Quantity"
            labelPlacement="outside"
            size="lg"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductFeature;
