import React, { ReactElement } from "react";

interface Props {
  about: string;
}

export default function About({ about }: Props): ReactElement {
  return (
    <div id="about" className="about">
      <h1>About Me</h1>

      <main>
        <div className="left">
          <img src="/akhil.jpg" alt="" />
        </div>
        <div className="right">{about}</div>
      </main>
    </div>
  );
}
