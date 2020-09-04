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

  return (
    <Helmet>
      <title>{`${data.site.siteMetadata.title} | ${title}`}</title>
      <meta name="description" content={data.site.siteMetadata.description || description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords || keywords} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <link rel="canonical" href={data.site.siteMetadata.url || url} />
    </Helmet>
  )
}

export default Seo;
