import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

// styles
import themeTogglerStyles from "./toggleTheme.module.scss"

const ToggleTheme = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) {
          return null
        }
        
        return (
          <div className={themeTogglerStyles.togglerContainer}>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                className={themeTogglerStyles.checkbox}
                id="check"
              />{" "}
            <label htmlFor="check" className={themeTogglerStyles.label}>
              <span className={themeTogglerStyles.moon} role="img">🌙</span>
              <span className={themeTogglerStyles.sun} role="img">☀️</span>
              <div className={themeTogglerStyles.ball}></div>
            </label>
          </div>
        )}}
    </ThemeToggler>
  )
}

export default ToggleTheme
