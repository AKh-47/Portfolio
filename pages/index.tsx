import React, { ReactElement } from "react";
import Project from "../components/Project";

export default function Home(): ReactElement {
  return (
    <>
      <div className="home">
        <div className="code">
          <i className="fas fa-code"></i>
        </div>
        <h1>Hello!</h1>
        <h1>I am Akhil Kala.</h1>
        <h1>
          I am a full stack <span>Web Developer</span>.
        </h1>
        <div className="indicator"></div>
      </div>
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <Project alt={false} />
        <Project alt={true} />
        <Project alt={false} />
        <Project alt={true} />
      </div>
    </>
  );
}
