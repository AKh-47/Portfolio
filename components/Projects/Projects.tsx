import React, { ReactElement, Fragment } from "react";
import Card from "./Card";

import Project from "./Project";

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
      <div className="projects-more">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="view-more">View More</div>
    </Fragment>
  );
}
