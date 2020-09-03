import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/"
            >
              Početna
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/contact"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
