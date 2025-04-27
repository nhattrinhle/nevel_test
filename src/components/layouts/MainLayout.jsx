import React from "react";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      {/* Footer */}
    </div>
  );
};

export default Layout;