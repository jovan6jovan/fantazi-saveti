import React from "react";
import { Link } from "gatsby";

// components
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <main>
        <h1>Najbolji fantazi saveti.</h1>
        <p>Taktike, saveti, transferi, statistike...</p>
        <Link to="/blog">Pocni sa citanjem</Link>
      </main>
    </Layout>
  )
}

export default Home;
