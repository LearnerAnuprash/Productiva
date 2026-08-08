import { AuthImage } from "@/assets";
import AppInput from "@/shared/components/app-input";
import { Button } from "antd";
import {
  FormProvider,
  type SubmitHandler,
  type UseFormReturn,
} from "react-hook-form";
import { Link } from "react-router-dom";
import type { SignupFormValues } from "../types/signup.types";

type SignupViewProps = {
  methods: UseFormReturn<SignupFormValues>;
  onSubmit: SubmitHandler<SignupFormValues>;
};

const SignupView = ({ methods, onSubmit }: SignupViewProps) => {
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
                SIGN UP
              </span>
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="text-gray-500">
                Please enter your details to create an account.
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

                <AppInput
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  methods={methods}
                  type="password"
                />
                <AppInput
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  methods={methods}
                  type="password"
                />
              </div>

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="w-full mt-2"
              >
                Sign Up
              </Button>

              <div className="flex gap-1 items-center justify-center mt-2">
                <p className="font-normal text-[15px] leading-5 text-gray-600">
                  Already have an account?
                </p>
                <Link
                  to="/auth/login"
                  className="text-primary-500 font-semibold text-[15px]"
                >
                  Log in instead
                </Link>
              </div>
            </form>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignupView;
