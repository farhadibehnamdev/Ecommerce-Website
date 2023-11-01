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
import { AddProductFormSchemaType, IProductForm } from "./AddProduct";
import { FieldErrors, UseFormRegister } from "react-hook-form";
const currencyList = [
  { id: 0, label: "USD", value: "USD" },
  { id: 1, label: "EUR", value: "EUR" },
];

interface IPricing {
  register: UseFormRegister<AddProductFormSchemaType>;
  errors: FieldErrors<AddProductFormSchemaType>;
}

const Pricing = function ({ register, errors }: IPricing) {
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
            placeholder="Price"
            labelPlacement="outside"
            size="lg"
            className="w-full"
            {...register("price", { required: true, valueAsNumber: true })}
            errorMessage={errors.price && errors.price.message}
            isInvalid={!!errors.price}
          />
          <Spacer x={3} />
          <Select
            labelPlacement="outside"
            variant="bordered"
            label="Currency"
            className="w-full"
            placeholder="Select an currency"
            size="lg"
            {...register("currency", { required: true })}
            errorMessage={errors.currency && "You must select a currency"}
            isInvalid={errors.currency ? true : false}
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
