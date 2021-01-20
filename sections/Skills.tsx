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
          <img src="/skills/react.png" alt="" className="background" />
          <Skill name={"HTML5"} />
          <Skill name={"CSS3"} />
          <Skill name={"SASS"} />
          <Skill name={"JavaScript"} />
          <Skill name={"React"} />
          <Skill name={"Next.js"} />
        </section>
        <section>
          <h2>Back End</h2>
          <img src="/skills/node.js.png" alt="" className="background" />
          <Skill name={"Node.js"} />
          <Skill name={"Express.js"} />
          <Skill name={"MongoDB"} />
          <Skill name={"Firebase"} />
        </section>
        <section>
          <h2>Miscellaneous</h2>
          <img src="/skills/python.png" alt="" className="background" />
          <Skill name={"TypeScript"} />
          <Skill name={"GraphQL"} />
          <Skill name={"Socket.io"} />
          <Skill name={"Python"} />
        </section>
      </main>
    </div>
  );
}

function Skill({ name }: { name: string }): ReactElement {
  return (
    <div className="skill">
      <img
        style={{
          background: name.toLowerCase() === "next.js" ? "white" : null,
          borderRadius: name.toLowerCase() === "next.js" ? "50%" : null,
        }}
        src={`/skills/${name.toLowerCase()}.png`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  );
}
