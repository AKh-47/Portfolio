import React, { ReactElement } from "react";

interface Props {}

export default function About({}: Props): ReactElement {
  return (
    <div id="about" className="about">
      <h1>About Me</h1>

      <main>
        <div className="left">
          <img src="/akhil.jpg" alt="" />
        </div>
        <div className="right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rerum
          dolorum repellendus vero, reprehenderit obcaecati et suscipit
        </div>
      </main>
    </div>
  );
}
