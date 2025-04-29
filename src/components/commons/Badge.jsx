import React from "react";

const Badge = ({ text, style = {}, className = "" }) => {
  return (
    <span
      className={`absolute flex items-center justify-center 
        bg-[var(--background-custom-red)] 
        text-[var(--text-neutral-subdued)] 
        text-xs font-medium uppercase
        px-[6px] py-[3px] rounded-[4px] 
        max-md:text-[6px] max-md:leading-[6px]
        max-lg:scale-90 max-lg:origin-center
        text-center ${className}`}
      style={style}
    >
      {text}
    </span>
  );
};

export default Badge;
