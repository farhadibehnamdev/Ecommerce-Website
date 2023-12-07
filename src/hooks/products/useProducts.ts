import { ApiReturnProduct, getProductsApi } from "@/api/productApi";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async function () {
  const response = await getProductsApi();
  if (response.status >= 400) {
    throw new Error("Something went wrong...");
  } else {
    return response.data;
  }
};

export const useProducts = function () {
  const query = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
  return query;
};
