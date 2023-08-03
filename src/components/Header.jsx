import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTER_PATHS } from "../constant/routerPath";
import { useProductContext } from "../contexts/productContext";

export const Header = () => {
  const { state } = useProductContext();

  return (
    <div>
      <ul>
        <li>
          <NavLink to={ROUTER_PATHS.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTER_PATHS.CART}>Cart {state.count}</NavLink>
        </li>
      </ul>
    </div>
  );
};
