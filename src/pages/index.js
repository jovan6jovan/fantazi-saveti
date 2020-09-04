import React from "react";
import { Link } from "gatsby";

// components
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";

const Home = () => {
  return (
    <Layout>
      <Seo title="Početna" />
      <main>
        <h1>Najbolji saveti za Fantasy Premier League</h1>
        <p>Statistike, transferi, taktike...</p>
        <Link to="/blog">Počni sa čitanjem</Link>
      </main>
    </Layout>
  )
}

export default Home;
