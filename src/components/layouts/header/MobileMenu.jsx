import React from "react";
import { useLocation, Link } from "react-router-dom";
import NavigationItem from "./NavigationItem";

const MobileMenu = () => {
  const location = useLocation();
  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "ITEMS 1", path: "/items1" },
    { label: "ITEMS 2", path: "/items2" },
    { label: "ITEMS 3", path: "/items3" },
    { label: "ITEMS 4", path: "/items4" },
  ];

  return (
    <div className="md:hidden w-full min-h-screen p-5 absolute left-0 z-10 bg-[var(--background-neutral-normal)]">
      <div className="flex flex-col gap-4 w-full">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <NavigationItem
              label={item.label}
              isActive={location.pathname === item.path}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;

