import React from "react";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-w-full overflow-x-hidden">
      <Header />
      <main className="w-full mx-auto">{children}</main>
    </div>
  );
};

export default Layout;