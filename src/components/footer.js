import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <p>Created by Cumberbatch &copy; {date.getFullYear()}.</p>
    </footer>
  )
}

export default Footer;
