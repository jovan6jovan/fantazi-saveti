import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import footerStyles from "./footer.module.scss";

const Footer = () => {
  const date = new Date();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
`);

  return (
    <footer className={footerStyles.footer}>
      <p>Created by <a href="https://github.com/jovan6jovan" target="_blank" rel="noreferrer noopener">{data.site.siteMetadata.author}</a> &copy; {date.getFullYear()}.</p>
    </footer>
  )
}

export default Footer;
