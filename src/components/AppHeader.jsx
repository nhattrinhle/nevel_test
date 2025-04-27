import React from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";

function Header() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-10 py-5 max-md:px-5">
      <div className="flex flex-wrap gap-6 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
        <Logo />
        <Navigation />
      </div>
      <AuthButtons />
    </header>
  );
}

export default Header;