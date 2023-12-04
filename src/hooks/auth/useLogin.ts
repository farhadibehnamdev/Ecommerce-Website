import { LoginFormType } from "@/components/website/Login";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { useRef, useState } from "react";
import { loginUserApi } from "@/api/userApi";
const cookies = new Cookies();

const userLogin = async function (data: LoginFormType) {
  const response = await loginUserApi(data);
  if (response.status >= 400) throw new Error(response.statusText);
  if (response.status === 201) {
    cookies.set("access_token", response.data.tokens?.access.token, {
      path: "/",
      expires: new Date(response.data.tokens?.access.expires),
      httpOnly: true,
    });
    cookies.set("refresh_token", response.data.tokens?.refresh.token, {
      path: "/",
      expires: new Date(response.data.tokens?.refresh.expires),
      httpOnly: true,
    });
    return response.data.user;
  } else {
    throw new Error(response.error.message);
  }
};

const useLogin = function () {
  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);
  const toastId = useRef<string | null>(null);
  const router = useRouter();
  const loginMutation = useMutation({
    mutationKey: ["userlogin"],
    mutationFn: userLogin,
    onMutate() {
      if (!isLoadingState) {
        toastId.current = toast.loading("Loading...");
        setIsLoadingState(true);
      }
    },
    onError(error, variables, context) {
      toast.error(error.message, { id: toastId.current! });
      setIsLoadingState(false);
    },
    onSuccess(data, variables, context) {
      toast.success("You have successfully logged in", {
        id: toastId.current!,
      });
      setIsLoadingState(false);
      router.push("/");
    },
  });
  return { loginMutation };
};

export default useLogin;
