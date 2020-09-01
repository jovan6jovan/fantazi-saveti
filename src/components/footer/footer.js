import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
    <footer>
      <p>Created by {data.site.siteMetadata.author} &copy; {date.getFullYear()}.</p>
    </footer>
  )
}

export default Footer;
