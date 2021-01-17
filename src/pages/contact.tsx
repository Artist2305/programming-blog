import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Head from '../components/Head';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <ContactForm></ContactForm>
    </Layout>
  )
}

export default Contact;