import React from "react";

function NavigationItem({ label, isActive, onClick }) {
  return (
    <button
      className={`self-stretch px-5 py-2.5 my-auto min-h-10 rounded-[100px] ${isActive ? "text-yellow-400 bg-zinc-700" : ""
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default NavigationItem;
