import { ApiReturnProduct } from "@/api/productApi";
import TableUI from "./Table";

interface ProductsProps {
  data: ApiReturnProduct;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}
const Products = function ({
  data,
  isError,
  isSuccess,
  isLoading,
}: ProductsProps) {
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong...</p>;
  console.log("data ::", data);
  return <TableUI />;
};

export default Products;
