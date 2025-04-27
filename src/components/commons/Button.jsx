import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-2 text-base italic font-black leading-6 uppercase rounded-[100px]";

  const variantStyles = {
    primary: "bg-yellow-400 text-stone-900",
    secondary: "border border-yellow-400 border-solid text-neutral-300",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
