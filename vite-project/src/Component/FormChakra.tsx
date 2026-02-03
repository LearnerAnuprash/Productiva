import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import TextInput from "./TextInput.tsx";
import PasswordInput from "./PasswordInput.tsx";

// const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

const FormChakra: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault(); //avoids default reload behavior
    console.log(username, email, password, confirm);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Username"
          name="username"
          placeholder="Enter Username"
          onChange={(value) => {
            setUsername(value);
          }}
        />

        <TextInput
          label="Email"
          name="email"
          placeholder="Enter Email"
          onChange={(value) => {
            setEmail(value);
          }}
        />

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter Password"
          onChange={(value) => {
            setPassword(value);
          }}
        />

        <PasswordInput
          label="Confirm Password"
          name="confirm"
          placeholder="Confirm Password"
          onChange={(value) => {
            setConfirm(value);
          }}
        />

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </form>
    </div>
  );
};

export default FormChakra;
