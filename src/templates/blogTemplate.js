import React from 'react';
import { Link, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// components
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";

export const query = graphql`
  query ($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      publishedDate(formatString: "DD.MM.YYYY")
      body {
        json
      }
    }
  }
`;

const blogTemplate = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        
        return <img src={url} alt={alt} />
      }
    }
  }

  // console.log(data.contentfulBlogPost.slug)

  return (
    <Layout>
      <Seo
        title={data.contentfulBlogPost.title}
        description={data.contentfulBlogPost.title}
        keywords={data.contentfulBlogPost.slug.replace("-", ", ")}
      />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
      <Link to="/blog">nazad na blog</Link>
    </Layout>
  )
}

export default blogTemplate;
