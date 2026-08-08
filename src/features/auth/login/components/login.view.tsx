import { AuthImage } from "@/assets";
import AppInput from "@/shared/components/app-input";
import { Button } from "antd";
import {
  FormProvider,
  type SubmitHandler,
  type UseFormReturn,
} from "react-hook-form";
import { Link } from "react-router-dom";
import type { LoginFormValues } from "../types/login.types";

type LoginViewProps = {
  methods: UseFormReturn<LoginFormValues>;
  onSubmit: SubmitHandler<LoginFormValues>;
};

const LoginView = ({ methods, onSubmit }: LoginViewProps) => {
  return (
    <div className="flex h-screen">
      <img
        src={AuthImage}
        alt="Auth representation"
        className="hidden md:block"
      />
      <div className="flex items-center justify-center w-full px-4">
        <FormProvider {...methods}>
          <div className="w-full max-w-sm flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-primary-500 tracking-wider">
                LOGIN
              </span>
              <h1 className="text-3xl font-bold">Welcome back</h1>
              <p className="text-gray-500">
                Please enter your details to login.
              </p>
            </div>

            <form
              onSubmit={methods.handleSubmit(onSubmit, (errors) =>
                console.log("Errors:", errors),
              )}
              className="flex flex-col gap-5 w-full"
            >
              <div className="flex flex-col gap-4">
                <AppInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  methods={methods}
                />

                <div className="flex flex-col gap-1">
                  <AppInput
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    methods={methods}
                    type="password"
                  />
                  <Link to="/auth/forgot-password" className="text-end mt-1">
                    <span className="text-end underline text-gray-500 text-sm">
                      Forgot Password?
                    </span>
                  </Link>
                </div>
              </div>

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="w-full mt-2"
              >
                Login
              </Button>

              <div className="flex gap-1 items-center justify-center mt-2">
                <p className="font-normal text-[15px] leading-5 text-gray-600">
                  Don't have an account yet?
                </p>
                <Link
                  to="/signup"
                  className="text-primary-500 font-semibold text-[15px]"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoginView;
