import React from "react";
import { useLocation, Link } from "react-router-dom";
import NavigationItem from "./NavigationItem";

const DesktopNav = () => {
  const location = useLocation();
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ITEMS1", path: "/items1" },
    { label: "ITEMS2", path: "/items2" },
    { label: "ITEMS3", path: "/items3" },
    { label: "ITEMS4", path: "/items4" },
  ];

  return (
    <nav className="hidden md:flex overflow-hidden justify-center items-center self-stretch my-auto text-sm font-medium leading-5 uppercase whitespace-nowrap min-w-60 max-md:max-w-full">
      {navItems.map((item) => (
        <Link to={item.path} key={item.label}>
          <NavigationItem
            label={item.label}
            isActive={location.pathname === item.path}
          />
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;