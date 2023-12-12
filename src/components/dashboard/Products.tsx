"use client";
import { ApiReturnProduct } from "@/api/productApi";
import { useProducts } from "@/hooks/products/useProducts";
import BaseTable from "./BaseTable";

interface ProductsProps {
  data: ApiReturnProduct;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}
const Products = function () {
  const { data, isLoading, isError, isSuccess } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong...</p>;
  return <BaseTable />;
};

export default Products;
