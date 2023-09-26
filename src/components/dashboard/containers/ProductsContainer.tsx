"use client";
import { useProducts } from "@/hooks/useProducts";
import Products from "../presentational/Products";

const ProductsContainer = function () {
  const { data, isLoading, isError, isSuccess } = useProducts();
  return (
    <Products
      data={data}
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
    />
  );
};

export default ProductsContainer;
