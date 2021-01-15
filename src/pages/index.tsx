import React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro'
import ContentCard from '../components/ContentCard';

export const ContentContainer = tw.section`grid 
sm:grid-cols-1 
md:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4 gap-x-2 gap-y-2 mt-2 mb-8`;

export const PaginationButton = tw.button`w-10 h-10 shadow-md m-1 text-gray-700 outline-none duration-200
hover:(cursor-pointer bg-gray-300)
`;
export const PaginationWrapper = tw.div`flex flex-row justify-center mb-10`;

const Home: React.FC = ({ children }) => {

  interface TestData {
    id: number,
    image: string,
    tags: string,
    title: string,
    desc: string,
    date: string,
  }

  let textData: TestData[] = [
    {
      id: 1, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 2, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 3, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 4, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 5, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 6, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 7, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 8, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 9, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 10, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 11, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
    {
      id: 12, image: "", tags: "C# C++ React", title: "Awesome Title", desc: "Lorem ipsum text text ipsum lorem teharem baram olum jaham dura duran lorem bahalaremus", date: "12/05/90"
    },
  ]

  let testCards = textData.map(s => <ContentCard
    key={s.id}
    image={s.image}
    tags={s.tags}
    title={s.title}
    desc={s.desc}
    date={s.date}
  />);


  return (
    <Layout>
      <ContentContainer>
        {testCards}
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