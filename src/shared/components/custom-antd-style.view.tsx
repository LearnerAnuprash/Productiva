import { Divider } from "antd";
import type { DividerProps } from "antd";

export const DividerWithoutMargin = ({ className, ...props }: DividerProps) => {
  return <Divider className={`!my-0 ${className ?? ""}`} {...props} />;
};
