import React, { useState } from "react";
import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("HOME");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-[var(--background-neutral-accent)] flex justify-between items-center w-full max-md:max-w-full md:h-auto md:relative max-md:h-[60px] max-md:px-[20px] max-md:py-[12px] px-[40px] py-[20px]">
        {/* Left section containing toggle, logo and desktop nav */}
        <div className="flex items-center gap-10 max-md:gap-4">
          {/* Mobile Toggle Button - only visible on mobile */}
          <button
            className="md:hidden flex items-center justify-center w-6 h-[19px] cursor-pointer"
            onClick={toggleMobileMenu}
          >

            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Logo and Desktop Navigation container */}
          <div className="flex items-center gap-6">
            <Logo />
            <DesktopNav activeNav={activeNav} setActiveNav={setActiveNav} />
          </div>
        </div>

        {/* Auth Buttons */}
        <AuthButtons />
      </header>

      {/* Mobile Menu - appears when toggle is clicked */}
      {isMobileMenuOpen && <MobileMenu activeNav={activeNav} setActiveNav={setActiveNav} />}
    </>
  );
};

export default Header;