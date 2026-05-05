import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#7F9562",
      },
      components: {
        Button: {
          colorPrimary: "#7F9562",
          colorPrimaryHover: "#65794d",
          colorPrimaryActive: "#65794d",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>,
);
