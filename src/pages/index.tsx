import React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro'
import ContentCard from '../components/ContentCard';
import { graphql, useStaticQuery } from 'gatsby';

export const ContentContainer = tw.section`grid sm:grid-cols-1 md:grid-cols-2 
lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-2 mt-2 mb-8`;
export const PaginationButton = tw.button`w-10 h-10 shadow-md m-1 outline-none duration-200
hover:(cursor-pointer bg-gray-300)`;
export const PaginationWrapper = tw.div`flex flex-row justify-center mb-10`;

import Head from '../components/Head';


const Home: React.FC = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
  allContentfulBlogPost(
    filter: {node_locale: {eq: "en-US"}}
    sort: {
      fields: publishedDate,
      order:DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishedDate(formatString: "MMMM Do, YYYY")
      }
    }
  }
}
  `)

  interface TestData {
    id: number,
    image: string,
    tags: string,
    title: string,
    desc: string,
    date: string,
  }

  return (
    <Layout>
      <Head title="Home Page" />
      <ContentContainer>
        {
          data.allContentfulBlogPost.edges.map(s => <ContentCard
            slug={"/blog/" + s.node.slug}
            image={""}
            tags={""}
            title={s.node.title}
            description={""}
            date={s.node.publishedDate}
          />)
        }
        {children}
      </ContentContainer>
      <PaginationWrapper>
        <PaginationButton>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton>5</PaginationButton>
      </PaginationWrapper>
    </Layout>
  )
}

export default Home;