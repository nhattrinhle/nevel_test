import React from "react";

const Button = ({ children, className, disabled = false, ...props }) => {
  const baseStyles = "rounded-[100px] transition-colors duration-300 cursor-pointer";
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`${baseStyles} ${disabled ? disabledStyles : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;