import React from "react";

// components
import Head from "../components/head/head";
import Layout from "../components/layout/layout";

const Contact = () => {
  return (
    <Layout>
      <Head title="Kontakt" />
      <section>
        <h1>Kontakt</h1>
        <p>Možete me kontaktirati na <a href="mailto:jovan.jovanovic6@yahoo.com">jovan.jovanovic6@yahoo.com</a></p>
      </section>
    </Layout>
  )
}

export default Contact;
