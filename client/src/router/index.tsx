import { Route, Routes } from "react-router-dom";
import ROUTE from "../constants/route";
import HomePage from "../page/Home";
import PublicRoute from "../component/PublicRoute";
import Knowledge from "../page/Knowledge";
import AuthLayout from "../component/AuthLayout";
import Login from "../page/Login";
import Register from "../page/Register";
import Fix from "../page/Fix";
import Order from "../page/Order";
import ProductDetails from "../page/ProductDetailsPage";
import AdminPage from "../page/AdminPage";


export type RouteType = {
    path: ROUTE | string;
    title?: string;
    isPrivate?: boolean;
    element: () => JSX.Element;
  };

  const routes: RouteType[] = [
    { path: ROUTE.HOME, title: "HomePage", element: HomePage },
    { path: ROUTE.KNOWLEDGE, title: "Kiến Thức", element: Knowledge },
    { path: ROUTE.LOGIN, title: "Đăng nhập", element: Login },
    { path: ROUTE.REGISTER, title: "Đăng ký", element: Register },
    { path: ROUTE.FIX, title: "Sửa chữa", element: Fix },
    { path: ROUTE.ORDER, title: "Giỏ hàng", element: Order },
    { path: ROUTE.PRODUCTDETAILS, title: "Chi tiết sản phẩm", element: ProductDetails },
    { path: ROUTE.ADMIN, title: "Admin", element: AdminPage },
  ];

  export default function AppRouter() {
    return (
      <Routes>
        {routes.map((route) => {
          const { element: Component } = route;
          const RouteWrapper =
          route.path === ROUTE.LOGIN || route.path === ROUTE.REGISTER
            ? AuthLayout
            : PublicRoute;
          return (
            <Route
              key={route.path}
              {...route}
              element={
                <RouteWrapper>
                  <Component />
                </RouteWrapper>
              }
            ></Route>
          );
        })}
      </Routes>
    );
  }