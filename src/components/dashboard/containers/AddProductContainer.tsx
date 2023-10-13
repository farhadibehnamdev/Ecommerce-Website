"use client";
import useAddProduct from "@/hooks/useAddProduct";
import AddProduct from "../presentational/AddProduct";
import { useForm } from "react-hook-form";

interface ProductForm {
  name: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  currency: string;
  quantity: number;
  size: string;
  color: string;
  tags: string[];
  details: string;
}
const AddProductContainer = function () {
  const query = useAddProduct();
  const { register, handleSubmit } = useForm();
  return <AddProduct />;
};

export default AddProductContainer;
