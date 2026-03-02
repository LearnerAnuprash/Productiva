import { Outlet } from "react-router-dom";
import { DividerWithoutMargin } from "../shared/components/custom-antd-style";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <DividerWithoutMargin />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
