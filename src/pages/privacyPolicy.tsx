import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Wrapper from '../components/Container';
import tw from 'twin.macro';
import SectionTitle from '../components/SectionTitle';

export const Paragraf = tw.section`my-2`;

const PrivacyPolicy: React.FC = () =>
  <Layout>
    <Head title="Home Page"
      description="Privacy policy of programming blog Code Artist"
      keywords="programming, tutorial, blog, privacy policy, code artist, "
      author="Mateusz Szostek"
    />
    <SectionTitle title='PRIVACY POLICY' />
    <Wrapper>
      <h4>Privacy Policy</h4>
      <Paragraf>Your privacy is important to us. It is CodeArtist's policy to respect your privacy regarding any information we may collect from you across our website, http://code-artist.com, and other sites we own and operate.</Paragraf>
      <Paragraf>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</Paragraf>
      <Paragraf>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</Paragraf>
      <Paragraf>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</Paragraf>
      <Paragraf>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</Paragraf>
      <Paragraf>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</Paragraf>
      <Paragraf>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</Paragraf>
      <Paragraf>This policy is effective as of 5 February 2021.</Paragraf>
    </Wrapper>
  </Layout>;
export default PrivacyPolicy;
