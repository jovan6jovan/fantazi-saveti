import React from "react";
import { Link } from "gatsby";

// components
import Layout from "../components/layout/layout";

const Home = () => {
  return (
    <Layout>
      <main style={{paddingTop: '3rem'}}>
        <h1>Najbolji saveti za Fantasy Premier League</h1>
        <p>Statistike, transferi, taktike...</p>
        <Link to="/blog">Pocni sa citanjem</Link>
      </main>
    </Layout>
  )
}

export default Home;
