import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Img from 'gatsby-image';

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


const Blog: React.FC = (props) => {

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <p>{props.data.contentfulBlogPost.article.article}</p>
      <Img fluid={props.data.contentfulBlogPost.image.fluid} />

    </Layout>
  )
}

export default Blog;