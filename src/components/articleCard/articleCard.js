import React from "react";

// styles
import cardStyles from "./articleCard.module.scss";

// components
import Button from "../button/button";

const ArticleCard = ({ title, date, excerpt, path }) => (
  <article className={cardStyles.card}>
    <h2>{title}</h2>
    <span>{date}</span>
    <p>{excerpt}</p>
    <Button path={path} btnText="Pročitaj članak" />
  </article>
)

export default ArticleCard;
