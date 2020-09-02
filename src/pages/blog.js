import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"

// components
import Layout from "../components/layout/layout";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // console.log(data.allMarkdownRemark.edges);

  return (
    <Layout>
      <section>
        <h1>Blog</h1>
        <p>Ovde idu postovi</p>
        <ol>
          {data.allMarkdownRemark.edges.map((post, idx) => {
            return (
              <li key={idx}>
                <Link to={`/blog/${post.node.fields.slug}`}>
                  <h2>{post.node.frontmatter.title}</h2>
                  <p>{post.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </section>
    </Layout>
  )
}

export default Blog;
