import React, { useState } from "react";
import NavigationItem from "./NavigationItem";

const DesktopNav = () => {
  const [activeItem, setActiveItem] = useState("HOME");
  const navItems = ["HOME", "ITEMS1", "ITEMS2", "ITEMS3", "ITEMS4"];

  return (
    <nav className="hidden md:flex overflow-hidden justify-center items-center self-stretch my-auto text-sm font-medium leading-5 uppercase whitespace-nowrap min-w-60 max-md:max-w-full">
      {navItems.map((item) => (
        <NavigationItem
          key={item}
          label={item}
          isActive={activeItem === item}
          onClick={() => setActiveItem(item)}
        />
      ))}
    </nav>
  );
}

export default DesktopNav;