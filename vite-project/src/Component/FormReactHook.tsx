import { useForm, type SubmitHandler } from "react-hook-form"; //oimporting useForm from react-hook-form

//type defining for fields
type FormFields = {
  email: string;
  password: string;
};

const FormReactHook = () => {
  const { register, handleSubmit, formState } = useForm<FormFields>(); //form of type FormFields
  const { errors } = formState; //destructure

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  console.log(formState);

  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Email:</p>

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter valid email format ",
              },
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                }
                return true;
              },
            })}
            type="email"
            placeholder="Email"
            className="border-2"
          />
        </div>

        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}

        <div>
          <p>Password:</p>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            type="password"
            placeholder="Password"
            className="border-2"
          />
        </div>

        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 w-20 h-auto mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormReactHook;
