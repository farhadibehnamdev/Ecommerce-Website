"use client";
import { ApiReturnProduct } from "@/api/productApi";
import TableUI from "./Table";
import { useProducts } from "@/hooks/useProducts";

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
  console.log("data ::", data);
  return <TableUI />;
};

export default Products;
