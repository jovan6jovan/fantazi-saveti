import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, keywords, title, url }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
        keywords
        url
      }
    }
  }
`);

console.log(description, keywords, title, url);

  return (
    <Helmet>
      <title>{`${data.site.siteMetadata.title} | ${title}`}</title>
      <meta name="description" content={description || data.site.siteMetadata.description} />
      <meta name="keywords" content={keywords || data.site.siteMetadata.keywords} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <link rel="canonical" href={url || data.site.siteMetadata.url} />
    </Helmet>
  )
}

export default Seo;
