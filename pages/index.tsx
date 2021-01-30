import React, { ReactElement, Fragment } from "react";

import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";

import data from "../utils/data";

export default function Index({ projects, skills, about }): ReactElement {
  return (
    <Fragment>
      <Home />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <About about={about} />
      <Contact />
    </Fragment>
  );
}

export const getStaticProps = () => {
  // const data = require("../utils/data");
  const { projects, skills, about } = data;

  return {
    props: { projects, skills, about },
  };
};
