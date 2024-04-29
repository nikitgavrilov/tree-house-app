import React from "react";
import Header from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
