import React, { useState } from "react";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("HOME");
  const menuItems = ["HOME", "ITEMS 1", "ITEMS 2", "ITEMS 3", "ITEMS 4"];

  return (
    <div className="md:hidden w-full min-h-screen p-5 absolute left-0 z-10 bg-[var(--background-neutral-normal)]">
      <div className="flex flex-col gap-4 w-full">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveMenu(item)}
            className={`w-full h-12 px-5 py-2 rounded-[100px] flex items-center justify-center text-center text-sm mx-auto leading-[20px] font-[500] uppercase ${activeMenu === item
              ? "text-yellow-400 bg-zinc-700"
              : "text-white"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;

