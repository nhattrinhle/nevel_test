import React from "react";

function NavigationItem({ label, isActive, onClick }) {
  return (
    <button
      className={`px-4.5 py-2 my-auto min-h-10 text-sm leading-5 rounded-[100px] cursor-pointer transition-colors duration-300 font-[600]  ${isActive
        ? "text-[var(--background-primary-normal)] bg-[var(--background-neutral-subdued)]"
        : "text-[var(--text-neutral-accent)] bg-transparent"
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default NavigationItem;