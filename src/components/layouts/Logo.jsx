import React from "react";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <figure className="overflow-hidden w-[71px] h-[39px] max-md:w-[72px] max-md:h-[36px]">
      <img
        src={logo}
        alt="Logo"
        className="object-contain w-full h-full"
      />
    </figure>
  );
};

export default Logo;