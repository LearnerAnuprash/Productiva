import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "antd";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { AuthImage } from "../../assets";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginView = () => {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

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
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Controller
                    name="email"
                    control={methods.control}
                    render={({ field }) => (
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        size="large"
                        {...field}
                      />
                    )}
                  />
                  <p className="text-red-500 text-sm">
                    {methods.formState.errors.email?.message}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <Controller
                    name="password"
                    control={methods.control}
                    render={({ field }) => (
                      <Input.Password
                        id="password"
                        placeholder="Enter your password"
                        size="large"
                        {...field}
                      />
                    )}
                  />
                  <p className="text-red-500 text-sm">
                    {methods.formState.errors.password?.message}
                  </p>
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
                  Don’t have an account yet?
                </p>
                <Link
                  to="/auth/signup"
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
