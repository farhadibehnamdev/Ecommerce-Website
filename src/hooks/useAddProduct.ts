import { IAddProduct, addProductApi } from "@/api/productApi";
import { useMutation } from "@tanstack/react-query";

const addProduct = async function (data: IAddProduct) {
  const response = await addProductApi(data);
  if (response.status >= 400) throw new Error(response.data.message);
  return response.data;
};

const useAddProduct = () => useMutation(addProduct);

export default useAddProduct;
