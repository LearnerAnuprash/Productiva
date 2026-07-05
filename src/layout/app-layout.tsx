import { Outlet } from "react-router-dom";
import { DividerWithoutMargin } from "../shared/components/custom-antd-style.view";
import Footer from "./footer.view";
import Header from "./header.view";

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
