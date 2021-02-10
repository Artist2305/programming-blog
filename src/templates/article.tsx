import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import ContentCard from '../components/ContentCard';
import tw from 'twin.macro';

import SectionTitle from '../components/SectionTitle';
const ContentDivider = tw.div`grid grid-cols-12`;
const Content = tw.div`lg:col-span-9 md:col-span-12 px-16 pt-2`;
const Aside = tw.div`lg:col-span-3 md:col-span-12 m-2`;
const ArticleTitle = tw.h1`text-5xl font-bold pt-7 pb-3 text-center`;
const Author = tw.p`text-center text-gray-500 italic pb-7`;
const CardWrapper = tw.div`mb-10`;

export const query = graphql`
query ($slug: String) {
  markdownRemark(fileAbsolutePath: {regex: "/(data)/(posts)/"}, frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      author
      date
      description
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardColor
      id
      slug
      title
      firstRelatedTopic
      secondRelatedTopic
      thirdRelatedTopic
      postImage {
        publicURL
      }
    }
    html
  }
  allMarkdownRemark(
    sort: {fields: frontmatter___id, order: ASC}
    filter: {fileAbsolutePath: {regex: "/(data)/(posts)/"}}
  ) {
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
          cardColor
          postImage {
            publicURL
          }
        }
      }
    }
  }
}
`

const Article: React.FC = (props) => {
  console.log(props);

  let relatedArticles = [
    props.data.allMarkdownRemark.edges[parseInt(props.data.markdownRemark.frontmatter.firstRelatedTopic)],
    props.data.allMarkdownRemark.edges[parseInt(props.data.markdownRemark.frontmatter.secondRelatedTopic)],
    props.data.allMarkdownRemark.edges[parseInt(props.data.markdownRemark.frontmatter.thirdRelatedTopic)]
  ]

  let backgroundColor = props.data.markdownRemark.frontmatter.cardColor;

  let styledImg = {
    backgroundColor: backgroundColor,
  }

  console.log(relatedArticles);
  let featuredImage = props.data.markdownRemark.frontmatter.postImage.publicURL;
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
        keywords={props.data.markdownRemark.frontmatter.keywords}
        author={props.data.markdownRemark.frontmatter.author} />
      <SectionTitle title='' />
      <ContentDivider>
        <Content>
          <img src={featuredImage} className="w-full h-96 " style={styledImg} />
          <ArticleTitle>{props.data.markdownRemark.frontmatter.title}</ArticleTitle>
          <Author>By {props.data.markdownRemark.frontmatter.author} on {props.data.markdownRemark.frontmatter.date}</Author>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </Content>
        <Aside>
          {relatedArticles.map(s =>
            <CardWrapper>
              <ContentCard
                slug={"/" + s.node.frontmatter.slug}
                image={s.node.frontmatter.postImage.publicURL}
                tags={s.node.frontmatter.tags}
                title={s.node.frontmatter.title}
                desc={s.node.frontmatter.shortDesc}
                date={s.node.frontmatter.dateDate}
                color={s.node.frontmatter.cardColor}
              />
            </CardWrapper>
          )}
        </Aside>
      </ContentDivider>
    </Layout>
  )
}

export default Article;