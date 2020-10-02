import React from "react"

// components
import Header from "../header/header"
import Footer from "../footer/footer"
import ToggleTheme from "../toggleTheme/toggleTheme"

// styles
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <ToggleTheme />
        <div
          className={layoutStyles.content}
          style={{
            backgroundColor: "var(--bg)",
            color: "var(--textNormal)",
            transition: "color 0.2s ease-out, background 0.2s ease-out",
          }}
        >
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout
