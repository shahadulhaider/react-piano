import React, { FunctionComponent } from "react";
import "./style.css";

export const Logo: FunctionComponent = () => {
  return (
    <h1 className="logo">
      <span role="image" aria-label="metal hand emoji">
        🤘
      </span>
      <span role="image" aria-label="metal hand emoji">
        🎹
      </span>
      <span role="image" aria-label="metal hand emoji">
        🎶
      </span>
    </h1>
  );
};