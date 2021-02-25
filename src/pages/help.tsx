import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import tw from 'twin.macro';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

export const Paragraf = tw.section`my-2`;

const Help: React.FC = () =>
  <Layout>
    <Head title="Cooperation"
      description="Code Artist help page. "
      keywords="help, email, Mateusz Szostek, contact, Code Artist"
      author="Mateusz Szostek"
    />
    <SectionTitle title='HELP' />
    <Container>
      <Paragraf>Do you have any questions? If so, I am willing to help you. See the contact page and send me a message. I will answer all your questions.</Paragraf>
      <Paragraf>Frequently asked questions will be posted here in the future.</Paragraf>
    </Container>
  </Layout>;
export default Help;
