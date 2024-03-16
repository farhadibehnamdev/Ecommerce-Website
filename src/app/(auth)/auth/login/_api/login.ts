import { createData } from "@/core/http-service/http-service";
import { ILogin } from "@/types/login.types";
import { useMutation } from "@tanstack/react-query";

const login = (model: ILogin): Promise<void> =>
  createData<ILogin, void>("/auth/login", model);

type UseLoginOptions = {
  onSuccess?: () => void;
};

export const useLogin = ({ onSuccess }: UseLoginOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: login,
    onSuccess: onSuccess,
  });

  return { submit, isPending };
};
