import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Head from '../components/Head';
import tw from 'twin.macro';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

export const Paragraf = tw.section`my-2`;

const About: React.FC = () =>
  <Layout>
    <Head title="About"
      description="I'm Mateusz Szostek. Welcome on Code-Artist - site about programming."
      keywords="about, Mateusz Szostek, Code Artist, blog, programming"
      author="Mateusz Szostek"
    />
    <SectionTitle title='ABOUT ME' />
    <Container>
      <Paragraf> Hi, I'm Mateusz Szostek, I'm a self-taught programmer. I am 30 years old and I come from Poland. </Paragraf>
      <Paragraf>
        I am the founder of Core-Artist.
        I've always dreamed of creating something like a blog where I will share my programming experience and tools for developers. During my adventure with programming, I have already managed to create several mobile games and websites. If you are interested in programming, please follow this page.
      </Paragraf>
    </Container>
  </Layout>;
export default About;
