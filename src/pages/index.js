import React from "react";

// components
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
import Button from "../components/button/button";

// styles
import homePageStyles from "./index.module.scss";

// images
import footballer from "../assets/soccer.png";
import success from "../assets/success.png";
import mail from "../assets/mail.png";
import article from "../assets/article.png";

const Home = () => {
  return (
    <Layout>
      <Seo title="Fantasy Premier League saveti" />
      <main>
        <h1>Mesto gde se nalaze najbolji saveti za Fantasy Premier League</h1>
        <div className={homePageStyles.gridContainer}>
          <div className={homePageStyles.first}>
            <div className={homePageStyles.firstContent}>
              <h3>Tačka gledišta sa koje se osvajaju poeni</h3>
              <p>
                Mnoštvo korisnih stvari koje će vam pomoći da ostvarite što bolji plasman, kako na svetskom
                nivou, tako i u vašim mini ligama.
              </p>
              <Button path="/blog" btnText="Saznajte više &rarr;" />
            </div>
            <div className={homePageStyles.firstImg}>
              <img src={success} alt="Success illustration" />
            </div>
          </div>
          <div className={homePageStyles.second}>
            <img src={mail} alt="envelope icon" style={{marginBottom: "1rem"}} />
            <h4>Personalizovani saveti</h4>
            <p>Budite slobodni da pitate za savet koji se tiče isključivo vašeg tima.</p>
            <Button path="/contact" btnText="Kontaktirajte me &rarr;" />
          </div>
          <div className={homePageStyles.third}>
            <img src={article} alt="article icon" style={{marginBottom: "1rem"}} />
            <h4>Informacije u okviru članaka</h4>
            <p>
              Novi članci će izlaziti nekoliko puta sedmično, što će biti sjajna prilika da dobijate sveže informacije o igračima i timovima redovno.
            </p>
            <Button path="/blog" btnText="Počnite sa čitanjem &rarr;" />
          </div>
          <div className={homePageStyles.fourth}>
            <div className={homePageStyles.fourthContent}>
              <h3>Statistike, transferi, taktike, differentiali...</h3>
              <p>
                Sve u cilju napretka u igranju FPL-a. Neki ljudi kažu da je u fantasy-u sve sreća, ali zato sam tu da ih zajedno sa vama ubedimo u suprotno, i da im dokažemo da planiranje i brojke ipak znače.
              </p>
              <Button path="/blog" btnText="Krenimo u napad &rarr;" />
            </div>
            <div className={homePageStyles.fourthImg}>
              <img src={footballer} alt="Footballer illustration" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home;
