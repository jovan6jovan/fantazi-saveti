import React from 'react';
import { Link } from "gatsby";

import Head from "../components/head/head";
import Layout from "../components/layout/layout";

const NotFound = () => {
  return (
    <Layout>
      <Head title="Greska 404" />
      <h1>Stranica nije pronadjena</h1>
      <Link to="/">nazad na pocetnu</Link>
    </Layout>
  )
}

export default NotFound;
