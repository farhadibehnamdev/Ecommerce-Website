import Image from "next/image";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Select,
  SelectItem,
  Spacer,
} from "@nextui-org/react";

const currencyList = [
  { id: 0, label: "USD", value: "USD" },
  { id: 1, label: "EUR", value: "EUR" },
];

const Pricing = function ({ register }: any) {
  return (
    <Card className="bg-white w-full mb-4" shadow="sm" radius="sm">
      <CardHeader className="px-4 py-4">
        <h3 className="text-[22px] font-bold text-slate-600">Pricing</h3>
      </CardHeader>
      <Divider className="mb-2" />
      <CardBody className="overflow-hidden">
        <div className="mb-5 flex justify-between">
          <Input
            type="text"
            variant="bordered"
            label="Price"
            placeholder="Product Name"
            labelPlacement="outside"
            size="lg"
            {...register("metaTitle")}
            className="w-full"
          />
          <Spacer x={3} />
          <Select
            labelPlacement="outside"
            variant="bordered"
            label="Currency"
            className="w-full"
            placeholder="Select an currency"
            size="lg"
          >
            {currencyList.map((curr) => (
              <SelectItem
                className="text-slate-800"
                key={curr.value}
                value={curr.value}
              >
                {curr.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </CardBody>
    </Card>
  );
};

export default Pricing;
