const path = require('path')
const { paginate } = require('gatsby-awesome-pagination');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve('./src/templates/article.tsx');
  const pageTemplate = path.resolve('./src/templates/postList.tsx');

  const res = await graphql(`
  query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(data)/(posts)/"}}) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
  `)
  const resPost = await graphql(`
  query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(data)/(posts)/"}}) {
      edges {
        node {
          html
          frontmatter {
            date
            title
            slug
            tags
            shortDesc
            id
            postImage {
              absolutePath
              relativePath
              childrenImageSharp {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
  
  `)
  console.log(resPost)
  paginate({
    createPage,
    items: resPost.data.allMarkdownRemark.edges,
    itemsPerPage: 12,
    pathPrefix: '/',
    component: path.resolve(`./src/templates/postlist.tsx`)
  });

  resPost.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: articleTemplate,
      path: `/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug
      }
    })
  })
}