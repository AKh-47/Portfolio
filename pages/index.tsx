import React, { ReactElement, Fragment } from "react";
import Contact from "../sections/Contact";

import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";

export default function Index(): ReactElement {
  return (
    <Fragment>
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
}
