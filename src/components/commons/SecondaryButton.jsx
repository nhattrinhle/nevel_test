import React from "react";
import Button from "./Button";

const SecondaryButton = ({ children, className, ...props }) => {
  return (
    <Button
      className={`bg-transparent text-[var(--text-neutral-accent)] border border-solid border-[var(--background-primary-normal)] hover:border-[var(--border-primary-subdued)] ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;