import React from "react"
import { graphql } from "gatsby"

// components
import Seo from "../components/seo/seo"
import Layout from "../components/layout/layout"
import Pager from "../components/pager/pager"
import ArticleCard from "../components/articleCard/articleCard"

// styles
import blogStyles from "../styles/blog.module.scss";

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "DD.MM.YYYY")
          excerpt
        }
      }
    }
  }
`

const blogPageTemplate = ({ data, pageContext }) => {
  const articles = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Seo title="Blog" />
      <h1>Blog</h1>
      <p style={{marginBottom: "2.5rem"}}>
        Najkonkretniji fantazi saveti na netu. Dominirajte mini ligama i ostvarite što bolji plasman.
      </p>
      <div className={blogStyles.posts}>
        {articles.map((article, idx) => {
          return (
            <ArticleCard
              key={idx}
              title={article.node.title}
              date={article.node.publishedDate}
              excerpt={article.node.excerpt}
              path={`/blog/${article.node.slug}`}
            />
          )
        })}
      </div>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default blogPageTemplate
