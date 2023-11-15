import { logingUserApi } from "@/api/userApi";
import { LoginFormType } from "@/components/website/Login";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
const cookie = new Cookies();

const userLogin = async function (data: LoginFormType) {
  const response = await logingUserApi(data);
  if (response.status === 201) {
    cookie.set("access_token", response.data.tokens?.access, {
      path: "/",
      expires: new Date(response.data.tokens?.access.expires),
    });
    cookie.set("refresh_token", response.data.tokens?.refresh, {
      path: "/",
      expires: new Date(response.data.tokens?.refresh.expires),
    });
    return response.data;
  } else {
    throw new Error(response.data.message);
  }
};

const useLogin = function () {
  const router = useRouter();
  const toastId = toast.loading("Loading...");
  const loginMutation = useMutation({
    mutationFn: userLogin,
    onError(error, variables, context) {
      toast.error(error.message, { id: toastId });
    },
    onSuccess(data, variables, context) {
      toast.success("You have successfully logged in", {
        id: toastId,
      });
      router.push("/");
    },
  });
  return { loginMutation };
};

export default useLogin;
