import { useRoutes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { ROUTER_PATHS } from "../constant/routerPath";

const routes = [
  { index: true, element: <Home /> },
  { path: ROUTER_PATHS.CART, element: <Cart /> },
];

export const Router = () => {
  const router = useRoutes(routes);
  return router;
};
