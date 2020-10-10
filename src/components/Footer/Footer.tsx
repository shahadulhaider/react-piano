import React, { FunctionComponent } from 'react';
import './style.css';

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="http://shahadulhaider.com">
        Built with React + Typescript by Jewel
      </a>
      <br />
      {currentYear}
    </footer>
  );
};
