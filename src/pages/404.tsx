import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Head from '../components/Head';

const NotFoundPage: React.FC = () =>
  <Layout>
    <Head title="404" />
    <h1>Ooops :( Something went wrong. Page not found - 404.</h1>
    <Link to="/">Home page</Link>
  </Layout>;
export default NotFoundPage;
