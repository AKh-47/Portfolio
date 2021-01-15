import React, { ReactElement } from "react";

/*
HTML
CSS
SASS
JavaScript
Typescript
React
Next.js

Node.js
Express.js
MongoDB

GraphQL
Socket.io
*/

// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/

export default function Skills(): ReactElement {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <main>
        <section>
          <h2>Front End</h2>
        </section>
        <section>
          <h2>Back End</h2>
        </section>
        <section>
          <h2>Miscellaneous</h2>
        </section>
      </main>
    </div>
  );
}
