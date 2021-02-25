import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import tw from 'twin.macro';
import SectionTitle from '../components/SectionTitle';

export const Paragraf = tw.section`my-2`;

const Cooperation: React.FC = () =>
  <Layout>
    <Head title="Cooperation"
      description="Code Artist waiting for cooperation. Feel free to contact me."
      keywords="cooperation, email, Mateusz Szostek, contact, Code Artist"
      author="Mateusz Szostek"
    />
    <SectionTitle title='COOPERATION' />
    <Container>
      <Paragraf>Interested in cooperation? Please see the contact section. Let's talk, I'm open to all ideas.</Paragraf>
    </Container>
  </Layout>;
export default Cooperation;
