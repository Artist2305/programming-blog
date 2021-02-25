import React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro'
import ContentCard from '../components/ContentCard';
import { graphql } from 'gatsby';
import SectionTitle from '../components/SectionTitle';
import Pager from '../components/Pager';

export const ContentContainer = tw.section`grid sm:grid-cols-1 md:grid-cols-2 
lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-2 mt-2 mb-8`;
export const PaginationWrapper = tw.div`flex flex-row justify-center mb-10`;
import Head from '../components/Head';

export const query = graphql`
query ($skip: Int!, $limit: Int!){
  allMarkdownRemark(
    sort: {fields: frontmatter___id, order: ASC}
    filter: {fileAbsolutePath: {regex: "/(data)/(posts)/"}}
    skip: $skip,
    limit: $limit
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

const Postlist: React.FC = (props) => {


  console.log(props);


  const articles = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Head title="Home Page"
        description="Do you like programming? This is the place for you. Learn everything about programming."
        keywords="programming, tutorial, blog, learn, code artist, "
        author="Mateusz Szostek"
      />
      <SectionTitle title='PROGRAMMING TUTORIALS' />
      <ContentContainer>
        {
          articles.map(s => <ContentCard
            slug={"/" + s.node.frontmatter.slug}
            image={s.node.frontmatter.postImage.publicURL}
            tags={s.node.frontmatter.tags}
            title={s.node.frontmatter.title}
            desc={s.node.frontmatter.shortDesc}
            date={s.node.frontmatter.dateDate}
            color={s.node.frontmatter.cardColor}
          />)
        }

      </ContentContainer>
      <PaginationWrapper>
        <Pager pageContext={props.pathContext} />
      </PaginationWrapper>
    </Layout>
  )
}

export default Postlist;
