import React from "react";

// components
import Header from "../header/header";
import Footer from "../footer/footer";

// styles
import "../../styles/index.scss";
import layoutStyles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
