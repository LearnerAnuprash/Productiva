import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";

const { Sider, Content } = Layout;

const menuItems = [
  { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
  { key: "/tasks", icon: <UnorderedListOutlined />, label: "Tasks" },
  { key: "/calendar", icon: <CalendarOutlined />, label: "Calendar" },
];

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={220}
        className="bg-background-200!"
      >
        <div className="flex items-center justify-center h-16 text-lg font-bold text-primary-700">
          {collapsed ? "P" : "Productivon"}
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          className="bg-transparent!"
        />
      </Sider>
      <Layout className="h-full">
        <div className="flex items-center px-4 h-16 bg-background-300 shrink-0">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="!text-xl !text-primary-700"
          />
        </div>
        <Content className="h-full overflow-auto">
          <div className="p-6 min-h-full bg-background-50 rounded-lg">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
