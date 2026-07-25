import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SignupFormValues } from "../types/signup.types";
import { defaultValues } from "../constants/signup.constants";
import { signupSchema } from "../schema/signup.schema";

export const useSignup = () => {
  const methods = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
    defaultValues: defaultValues,
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
  };
  return { methods, onSubmit };
};
