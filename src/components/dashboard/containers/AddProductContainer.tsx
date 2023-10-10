"use client";
import useAddProduct from "@/hooks/useAddProduct";
import AddProduct from "../presentational/AddProduct";

const AddProductContainer = function () {
  const query = useAddProduct();
  return (
    <>
      <AddProduct />
    </>
  );
};

export default AddProductContainer;
