import React, { ReactElement, Fragment } from "react";

export default function Projects(): ReactElement {
  return (
    <Fragment>
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <Project alt={false} />
        <Project alt={true} />
        <Project alt={false} />
        <Project alt={true} />
      </div>
      <div className="projects-more"></div>
    </Fragment>
  );
}

function Project({ alt }: { alt: boolean }): ReactElement {
  return (
    <div className={`project ${alt ? "alt" : ""}`}>
      <img className="image" src="/projects/typeracer.png" />
      <div className="content">
        <h2>
          Project Name
          {/* <span>Ongoing</span> */}{" "}
        </h2>
        <div className="stack">
          <img src="/skills/react.png" alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero
          hic minus et dolore iusto laudantium laborum eveniet voluptatum omnis
          at fugit pariatur architecto nulla adipisci reru
        </p>
      </div>
      <div className="links">
        <a>
          <i className="fas fa-code"></i>
        </a>
        <a>
          <i className="fas fa-eye"></i>
        </a>
      </div>
    </div>
  );
}
