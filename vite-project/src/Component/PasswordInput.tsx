import React from "react";
import { Form, Input } from "antd";
import type { Rule } from "antd/es/form";

type PasswordInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  onChange: (value: string) => void;
  rules?: Rule[];
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  placeholder,
  onChange,
  rules = [{ required: true, message: "Please input password!" }],
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input.Password
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Item>
  );
};

export default PasswordInput;
