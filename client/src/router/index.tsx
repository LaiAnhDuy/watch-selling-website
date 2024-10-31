import { Route, Routes } from "react-router-dom";
import ROUTE from "../constants/route";
import HomePage from "../page/Home";
import PublicRoute from "../component/PublicRoute";
import Knowledge from "../page/Knowledge";
import Login from "../page/Login";
import Register from "../page/Register";
import Fix from "../page/Fix";
import Order from "../page/Order";
import ProductDetails from "../page/ProductDetailsPage";
import AdminPage from "../page/AdminPage";
import { Fragment } from "react/jsx-runtime";

export type RouteType = {
  path: ROUTE | string;
  title?: string;
  isPrivate?: boolean;
  isShowHeader: boolean;
  element: () => JSX.Element;
};

const routes: RouteType[] = [
  {
    path: ROUTE.HOME,
    title: "HomePage",
    isShowHeader: true,
    element: HomePage,
  },
  {
    path: ROUTE.KNOWLEDGE,
    title: "Kiến Thức",
    isShowHeader: true,
    element: Knowledge,
  },
  {
    path: ROUTE.LOGIN,
    title: "Đăng nhập",
    isShowHeader: false,
    element: Login,
  },
  {
    path: ROUTE.REGISTER,
    title: "Đăng ký",
    isShowHeader: false,
    element: Register,
  },
  { path: ROUTE.FIX, title: "Sửa chữa", isShowHeader: true, element: Fix },
  { path: ROUTE.ORDER, title: "Giỏ hàng", isShowHeader: true, element: Order },
  {
    path: ROUTE.PRODUCTDETAILS,
    title: "Chi tiết sản phẩm",
    isShowHeader: true,
    element: ProductDetails,
  },
  { path: ROUTE.ADMIN, title: "Admin", isShowHeader: false, element: AdminPage },
];

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => {
        const { element: Component } = route;
        const RouteWrapper = route.isShowHeader ? PublicRoute : Fragment;
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
