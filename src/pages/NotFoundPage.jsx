import React from "react";
import Header from "../components/layouts/header/Header";
import Footer from "../components/layouts/footer/footer";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl">The page you are looking for doesn't exist.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;