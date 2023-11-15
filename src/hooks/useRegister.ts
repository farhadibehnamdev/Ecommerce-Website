import { registerUserApi } from "@/api/userApi";
import { RegisterFormValues } from "@/components/website/Register";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const registerUser = async function (data: RegisterFormValues) {
  data.role = "Admin";
  const response = await registerUserApi(data);
  if (response.status >= 400) throw new Error(response.statusText);
  return response.data;
};
const useRegister = function () {
  const router = useRouter();
  const toastId = toast.loading("Processing...");
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onError(error, variables, context) {
      toast.error(error.message, { id: toastId });
    },
    onSuccess(data, variables, context) {
      toast.success("Thank you for signing up", { id: toastId });
      router.push("/auth/verify-email");
    },
  });
  return { registerMutation };
};
export default useRegister;
