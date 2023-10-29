import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
  Spacer,
  Input,
} from "@nextui-org/react";
import { AddProductFormSchemaType } from "./AddProduct";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IAddProductFormType } from "@/types/AddProductType";
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
interface IProductFeature extends IAddProductFormType {
  setValue: UseFormSetValue<AddProductFormSchemaType>;
}
const ProductFeature = function ({
  register,
  setValue,
  errors,
}: IProductFeature) {
  const handleSelectChange = (e: any) => {
    const selectedOptions = e.target.value ? e.target.value.split(", ") : [];
    if (selectedOptions.length > 0) {
      setValue("color", selectedOptions);
    } else {
      setValue("color", [""]); // replace '' with a default value if necessary
    }
  };
  const handleSelectSizeChange = (e: any) => {
    const selectedOptions = e.target.value ? e.target.value.split(", ") : [];
    if (selectedOptions.length > 0) {
      setValue("size", selectedOptions);
    } else {
      setValue("size", [""]); // replace '' with a default value if necessary
    }
  };
  return (
    <Card className="bg-white w-full mb-4" shadow="sm" radius="sm">
      <CardHeader className="px-4 py-4">
        <h3 className="text-[22px] font-bold text-slate-600">
          Product Attribute
        </h3>
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
            {...register("color", {
              required: true,
              onChange(event) {
                handleSelectChange(event);
              },
            })}
            errorMessage={errors.color && "You must select a color"}
            isInvalid={!!errors.color}
          >
            {colors.map((curr) => (
              <SelectItem
                className="text-slate-800"
                key={curr.color}
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
            {...register("size", {
              required: true,
              onChange(event) {
                handleSelectSizeChange(event);
              },
            })}
            errorMessage={errors.size && errors.size.message}
            isInvalid={!!errors.size}
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
            {...register("quantity", { required: true, valueAsNumber: true })}
            errorMessage={errors.quantity && errors.quantity.message}
            isInvalid={!!errors.quantity}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductFeature;
