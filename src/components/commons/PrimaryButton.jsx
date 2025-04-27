import React from "react";
import Button from "./Button";

const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <Button
      className={`bg-[var(--background-primary-normal)] text-neutral-invert-accent hover:bg-[var(--background-primary-accent)] ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;