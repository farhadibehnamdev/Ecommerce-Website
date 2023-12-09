import { IAddProduct, addProductApi } from "@/api/productApi";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import toast from "react-hot-toast";

const addProduct = async function (data: IAddProduct) {
  const response = await addProductApi(data);
  if (response.status >= 400) throw new Error(response.data.message);
  return response.data;
};

const useAddProduct = () => {
  const toastRef = useRef<string | null>(null);

  const productAddMutation = useMutation({
    mutationKey: ["add", "product"],
    mutationFn: addProduct,
    onMutate() {
      toastRef.current = toast.loading("Loading...");
    },
    onSuccess() {
      toast.success("Product added successfuly", { id: toastRef.current! });
    },
    onError(error, variables, context) {
      toast.error(error.message, { id: toastRef.current! });
    },
  });
  return { productAddMutation };
};

export default useAddProduct;
