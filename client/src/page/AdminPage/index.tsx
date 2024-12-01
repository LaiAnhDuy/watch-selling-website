/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  LineChartOutlined,
  TeamOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  AuditOutlined,
  TagOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { IMAGE_PATH } from "../../constants/images";
import AdminDashboard from "../../component/AdminComponent/AdminDashboard";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AdminUser from "../../component/AdminComponent/AdminUser/AdminUser";
import AdminProduct from "../../component/AdminComponent/AdminProduct/AdminProduct";
import AdminOrder from "../../component/AdminComponent/AdminOrder";
import AdminCoupon from "../../component/AdminComponent/AdminCoupon";
import AdminSupplier from "../../component/AdminComponent/AdminSupplier";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "dashboard",
    label: "Thống kê",
    icon: <LineChartOutlined />,
  },
  {
    key: "orders",
    label: "Đơn hàng",
    icon: <ShoppingCartOutlined />,
  },
  {
    key: "supplier",
    label: "Nhà cung cấp",
    icon: <AuditOutlined />,
  },
  {
    key: "products",
    label: "Sản phẩm",
    icon: <AppstoreOutlined />,
  },
  {
    key: "users",
    label: "Người dùng",
    icon: <TeamOutlined />,
  },
  {
    key: "coupons",
    label: "Giảm giá",
    icon: <TagOutlined />,
  },
];

const AdminPage = () => {
  const [keySelected, setKeySelected] = useState("dashboard");
  const navigate = useNavigate();

  const renderPage = (key: any) => {
    switch (key) {
      case "dashboard":
        return <AdminDashboard />;
      case "users":
        return <AdminUser />;
      case "products":
        return <AdminProduct />;
      case "orders":
        return <AdminOrder />;
      case "coupons":
        return <AdminCoupon />;
      case "supplier":
        return <AdminSupplier />;
      default:
        return <></>;
    }
  };

  const handleOnClick = (event: { key: string }) => {
    setKeySelected(event.key);
  };

  return (
    <div className="flex">
      <div className="w-[210px] border-[#b7afaf] border-r-2 h-[100vh]">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={IMAGE_PATH.DWATCH} className="px-5 mb-10 mt-5 w-full" />
        </div>
        <Menu
          onClick={handleOnClick}
          mode="inline"
          selectedKeys={[keySelected]}
          className="text-lg w-full !border-none"
          items={items}
        />
      </div>
      <div className="flex-1 bg-slate-100 p-10">{renderPage(keySelected)}</div>
    </div>
  );
};

export default AdminPage;
