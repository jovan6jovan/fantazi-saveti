import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"

// components
import Layout from "../components/layout/layout";

// styles
import blogStyles from "./blog.module.scss";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"DD.MM.YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <section>
        <h1>Blog</h1>
        <p>Ovde idu postovi</p>
        <ul className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((post, idx) => {
            return (
              <li key={idx} className={blogStyles.post}>
                <Link to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                  <p>{post.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default Blog;
