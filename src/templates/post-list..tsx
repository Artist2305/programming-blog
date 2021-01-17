import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';


export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM do, YYYY")
      image {
          file {
            url
            contentType
          }
          title
          fluid(maxWidth: 1200){
            ...GatsbyContentfulFluid
          }
        }
      article {
          article
        }
    }
  }
  `


const Blog: React.FC = () => {

  return (
    <Layout>

    </Layout>
  )
}

export default Blog;