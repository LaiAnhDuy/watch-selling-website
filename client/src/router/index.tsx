import { Route, Routes } from "react-router-dom";
import ROUTE from "../constants/route";
import HomePage from "../page/Home";
import PublicRoute from "../component/PublicRoute";
import Knowledge from "../page/Knowledge";


export type RouteType = {
    path: ROUTE | string;
    title?: string;
    isPrivate?: boolean;
    element: () => JSX.Element;
  };

  const routes: RouteType[] = [
    { path: ROUTE.HOME, title: "HomePage", element: HomePage },
    { path: ROUTE.KNOWLEDGE, title: "Kiến Thức", element: Knowledge },
  ];

  export default function AppRouter() {
    return (
      <Routes>
        {routes.map((route) => {
          const { element: Component } = route;
          const RouteWrapper =  PublicRoute;
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