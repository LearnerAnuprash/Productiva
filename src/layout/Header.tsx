import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { capitalize } from "../shared/helper/data-helper";

const Header = () => {
  return (
    <div className="flex items-center justify-between mt-1">
      <h1 className="text-2xl font-bold">{capitalize("productiva")}</h1>
      <nav className="flex justify-evenly w-40">
        <Link to={"/notifications"}>
          <BellOutlined className="text-2xl" />
        </Link>
        <Link to={"/settings"}>
          <SettingOutlined className="text-2xl" />
        </Link>
        <Link to={"/profile"}>
          <span className="bg-gray-500 text-white p-0.5 rounded-2xl">BD</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
