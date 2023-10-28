import { UseFormRegister, FieldErrors } from "react-hook-form";
import { AddProductFormSchemaType } from "@/components/dashboard/AddProduct";

export interface IAddProductFormType {
  register: UseFormRegister<AddProductFormSchemaType>;
  errors: FieldErrors<AddProductFormSchemaType>;
}

