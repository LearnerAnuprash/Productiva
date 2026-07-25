import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/login.schema";
import type { LoginFormValues } from "../types/login.types";
import { defaultValues } from "../constants/login.constants";

export const useLogin = () => {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: defaultValues,
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };
  return { methods, onSubmit };
};
