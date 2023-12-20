import { IAddTag, addTagApi } from "@/api/tagApi";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import toast from "react-hot-toast";

const addTag = async function (data: IAddTag) {
  try {
    const response = await addTagApi(data);
    if (response?.status >= 400) throw new Error(response?.statusText);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const useAddTag = function () {
  const toastRef = useRef<string | null>(null);
  const addTagMutation = useMutation({
    mutationKey: ["add", "tag"],
    mutationFn: addTag,
    onMutate() {
      toastRef.current = toast.loading("Loading...");
    },
    onError(error, variables, context) {
      toast.error(error.message, { id: toastRef.current! });
    },
    onSuccess(data, variables, context) {
      toast.success("Tag created successfuly", { id: toastRef.current! });
    },
  });
  return { addTagMutation };
};
export default useAddTag;
