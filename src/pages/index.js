import React from "react";

// components
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
import Button from "../components/button/button";

const Home = () => {
  return (
    <Layout>
      <Seo title="Početna" />
      <main>
        <h1>Najbolji saveti za Fantasy Premier League</h1>
        <p>Statistike, transferi, taktike...</p>
        <Button path="/blog" btnText="Počni sa čitanjem &rarr;" />
      </main>
    </Layout>
  )
}

export default Home;
