import React, { FunctionComponent } from "react";
import "./style.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="http://fullstac.io">Fullstack.io</a>
      <br />
      {currentYear}
    </footer>
  );
};
