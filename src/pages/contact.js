import React from "react";

// components
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";

const Contact = () => {
  return (
    <Layout>
      <Seo
       title="Kontakt"
       description="Fantazi saveti kontakt stranica. Možete me kontaktirati putem email-a."
       keywords="fantazi saveti kontakt, fantazi saveti email"
      />
      <section>
        <h1>Kontakt</h1>
        <p>Možete me kontaktirati na <a href="mailto:jovan.jovanovic6@yahoo.com">jovan.jovanovic6@yahoo.com</a></p>
      </section>
    </Layout>
  )
}

export default Contact;
