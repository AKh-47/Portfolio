import React, { ReactElement, Fragment } from "react";
import Contact from "../components/Contact";

import Home from "../components/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Index(): ReactElement {
  return (
    <Fragment>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </Fragment>
  );
}
