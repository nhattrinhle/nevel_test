import React from "react";
import Header from "./header/Header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-w-full overflow-x-hidden">
      <Header />
      <main className="w-full mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;