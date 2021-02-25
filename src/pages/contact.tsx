import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Head from '../components/Head';
import SectionTitle from '../components/SectionTitle';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Head title="Contact"
        description="Feel free to contact me by email address."
        keywords="address, email, Mateusz Szostek, contact, Code Artist"
        author="Mateusz Szostek"
      />
      <SectionTitle title='CONTACT' />
      <ContactForm></ContactForm>
    </Layout>
  )
}

export default Contact;