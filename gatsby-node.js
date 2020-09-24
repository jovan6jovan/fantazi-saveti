const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if(node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPageTemplate = path.resolve('./src/templates/blogPageTemplate.js');
  const blogPostTemplate = path.resolve('./src/templates/blogPostTemplate.js');
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  paginate({
    createPage,
    items: response.data.allContentfulBlogPost.edges,
    itemsPerPage: 5,
    pathPrefix: "/blog",
    component: blogPageTemplate
  })

  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
