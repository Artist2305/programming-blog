import React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro'
import ContentCard from '../components/ContentCard';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import SectionTitle from '../components/SectionTitle';


export const ContentContainer = tw.section`grid sm:grid-cols-1 md:grid-cols-2 
lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-2 mt-2 mb-8`;
export const PaginationButton = tw(Link)`w-24 h-10 text-center pt-2 shadow-md m-1 outline-none duration-200
hover:(cursor-pointer bg-gray-300)`;
export const PaginationWrapper = tw.div`flex flex-row justify-center mb-10`;

import Head from '../components/Head';

export const query = graphql`
query {
  allMarkdownRemark(
    sort: {fields: frontmatter___id, order: ASC}
    filter: {fileAbsolutePath: {regex: "/(data)/(posts)/"}}
    skip: 0,
    limit: 12
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

const Home: React.FC = (props) => {

  interface TestData {
    id: number,
    image: string,
    tags: string,
    title: string,
    desc: string,
    date: string,
  }

  console.log(props);

  const articles = props.data.allMarkdownRemark.edges

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
        {articles.length > 12 ? <PaginationButton to="/2">Next Page</PaginationButton> : <div></div>}
      </PaginationWrapper>
    </Layout>
  )
}

export default Home;