import { Button, Input } from "antd";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
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
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit, (errors) =>
            console.log("Errors:", errors),
          )}
          className="max-w-50 flex flex-col gap-3"
        >
          <label htmlFor="username">Username:</label>
          <Controller
            name="username"
            control={methods.control}
            render={({ field }) => (
              <Input id="username" placeholder="Username" {...field} />
            )}
          />
          <p className="text-red-500">
            {methods.formState.errors.username?.message}
          </p>

          <label htmlFor="password">Password:</label>
          <Controller
            name="password"
            control={methods.control}
            render={({ field }) => (
              <Input id="password" placeholder="Enter password" {...field} />
            )}
          />
          <p className="text-red-500">
            {methods.formState.errors.password?.message}
          </p>

          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginView;
