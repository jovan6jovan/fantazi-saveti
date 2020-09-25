import React from "react";
import { Link } from "gatsby";

// styles
import btnStyles from "./button.module.scss";

const Button = ({ path, btnText }) => (
  <Link to={path} className={btnStyles.btn}>
    {btnText}
  </Link>
)

export default Button;
