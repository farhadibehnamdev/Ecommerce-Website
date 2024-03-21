import { UseFormRegister, FieldErrors } from "react-hook-form";
import { AddProductFormSchemaType } from "@/app/(dashboard)/dashboard/products/new/_components/add-product";

export interface IAddProduct {
  register: UseFormRegister<AddProductFormSchemaType>;
  errors: FieldErrors<AddProductFormSchemaType>;
}
