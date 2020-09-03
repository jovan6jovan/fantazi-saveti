import React from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout/layout";

const NotFound = () => {
  return (
    <Layout>
      <h1>Stranica nije pronadjena</h1>
      <Link to="/">nazad na pocetnu</Link>
    </Layout>
  )
}

export default NotFound;
