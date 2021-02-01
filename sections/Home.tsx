import React, { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div className="home">
      <div className="code">
        <i className="fas fa-code"></i>
      </div>
      <h1>Hello!</h1>
      <h1>I am Akhil Kala.</h1>
      <h1>
        I am a full stack <span>Web Developer</span>.
      </h1>
      <div className="social">
        <a href="https://github.com/akh-47">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/akhil-kala-b185131b0/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/akhilkala1">
          <i className="fab fa-twitter"></i>
        </a>
        <a
        // data-hint="Mail"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="resume">
        <a>
          <i className="fas fa-file-alt"></i>
        </a>
        View Resume
      </div>
      <a href="#projects">
        <div className="indicator"></div>
      </a>
    </div>
  );
}
