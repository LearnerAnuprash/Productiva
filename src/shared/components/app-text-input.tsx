import { Input } from "antd";
import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";

interface AppInputProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
}

const AppInput = <T extends FieldValues>({
  methods,
  name,
  label,
  placeholder,
  type = "text",
}: AppInputProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <Controller
        name={name}
        control={methods.control}
        render={({ field }) => (
          <Input
            id={name}
            placeholder={placeholder}
            size="large"
            {...field}
            type={type}
          />
        )}
      />
      <p className="text-red-500 text-sm">
        {methods.getFieldState(name).error?.message}
      </p>{" "}
    </div>
  );
};

export default AppInput;
