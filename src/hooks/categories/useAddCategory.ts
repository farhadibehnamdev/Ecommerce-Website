import { IAddCategory, addCategoryApi } from "@/api/categoryApi";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import toast from "react-hot-toast";

const addCategory = async (data: IAddCategory) => {
  try {
    const response = await addCategoryApi(data);
    if (response.status >= 400) throw new Error(response.statusText);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const useAddCategory = () => {
  const toastRef = useRef<string | null>(null);

  const addCategoryMutation = useMutation({
    mutationKey: ["add", "category"],
    mutationFn: addCategory,
    onMutate() {
      toastRef.current = toast.loading("Loading...");
    },
    onError(error, variables, context) {
      toast.error(error.message, { id: toastRef.current! });
    },
    onSuccess(data, variables, context) {
      toast.success("Category created successfuly", { id: toastRef.current! });
    },
  });
  return { addCategoryMutation };
};

export default useAddCategory;
