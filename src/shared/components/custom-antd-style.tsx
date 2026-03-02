import { Divider } from "antd";
import type { DividerProps } from "antd";

// Divider component with default top and bottom margin /removed/ globally
export const DividerWithoutMargin = ({ className, ...props }: DividerProps) => {
  return <Divider className={`!my-0 ${className ?? ""}`} {...props} />;
};
