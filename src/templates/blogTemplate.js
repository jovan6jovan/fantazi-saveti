import React from 'react';
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";

export const query = graphql`
query (
  $slug: String
) {
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter{
      title
      date
    }
    html
  }
}
`;
const blogTemplate = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default blogTemplate;
