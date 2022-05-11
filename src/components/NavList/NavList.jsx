import React from "react";
import NavItem from "../NavItem/NavItem";
import { Ul } from "./index";

const data = [
  { id: 0, title: "home", to: "/" },
  { id: 1, title: "portfolio", to: "/portfolio" },
  { id: 2, title: "services", to: "/services" },
  { id: 3, title: "about us", to: "/about" },
];

const NavList = ({ setIsSidebar }) => {
  return (
    <Ul>
      {data.map((item) => {
        return (
          <NavItem to={item.to} key={item.id} setIsSidebar={setIsSidebar}>
            {item.title}
          </NavItem>
        );
      })}
    </Ul>
  );
};

export default NavList;
