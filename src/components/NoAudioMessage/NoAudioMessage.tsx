import React, { FunctionComponent } from "react";

export const NoAudioMessage: FunctionComponent = () => {
  return (
    <div>
      <p>Sorry, it is not going to work :-(</p>
      <p>
        Seems like your browser does not support <code>Audio API</code>.
      </p>
    </div>
  );
};
