import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"

// components
import Seo from "../components/seo/seo";
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
      <Seo title="Blog" />
      <section>
        <h1>Blog</h1>
        <p>Najkonkretniji fantazi saveti na netu.</p>
        <div className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((post) => {
            return (
              <article className={blogStyles.post}>
                <Link to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                  <p>{post.node.publishedDate}</p>
                </Link>
              </article>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Blog;
