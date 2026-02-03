import React from "react";
import { Form, Input } from "antd";
import type { Rule } from "antd/es/form";

type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  onChange: (value: string) => void;
  rules?: Rule[];
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  placeholder,
  onChange,
  rules = [{ required: true, message: "Please input this field!" }],
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Item>
  );
};

export default TextInput;
