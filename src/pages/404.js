import React from 'react';
import { Link } from "gatsby";

// components
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";

const NotFound = () => {
  return (
    <Layout>
      <Seo title="Greška 404" />
      <h1>Stranica nije pronađena</h1>
      <Link to="/">nazad na početnu</Link>
    </Layout>
  )
}

export default NotFound;
