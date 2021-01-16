import React, { ReactElement } from "react";

interface Props {}

export default function Contact({}: Props): ReactElement {
  return (
    <div id="contact" className="contact">
      <h1>Contact Me</h1>
      <main>
        <form>
          <div className="input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" />
          </div>
          <div className="input">
            <label htmlFor="message">Message:</label>
            <textarea id="message" />
          </div>
          <button>Submit</button>
        </form>
        <div className="right">
          <img
            src="https://media.giphy.com/media/3oz8xSwIOv5FGhZFjq/giphy.gif"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
