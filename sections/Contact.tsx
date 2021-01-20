import React, { ReactElement, useRef, useState } from "react";
import axios from "axios";

import { useToasts } from "react-toast-notifications";

interface Props {}

export default function Contact({}: Props): ReactElement {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [errors, setErrors] = useState<string[]>([]);

  const { addToast } = useToasts();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorsArr = [];

    if (!emailRef.current.value) errorsArr.push("Email is required");

    if (errorsArr.length === 0) {
      const { data: sent } = await axios.post("/api/mail", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });

      if (sent) {
        addToast("Mail Sent Successfully", { appearance: "success" });
        setErrors([]);
      } else {
        addToast("Error", { appearance: "error" });
      }
    } else {
      setErrors(errorsArr);
    }
  };

  return (
    <div id="contact" className="contact">
      <h1>Contact Me</h1>
      <main>
        <form onSubmit={handleSubmit}>
          {errors.map((err: string) => (
            <div className="error">{err}</div>
          ))}
          <div className="input">
            <label htmlFor="name">Name:</label>
            <input ref={nameRef} type="text" id="name" />
          </div>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input ref={emailRef} type="text" id="email" />
          </div>
          <div className="input">
            <label htmlFor="message">Message:</label>
            <textarea ref={messageRef} id="message" />
          </div>
          <button>Submit</button>
        </form>
        <div className="right">
          <img
            // src="https://media.giphy.com/media/3oz8xSwIOv5FGhZFjq/giphy.gif"
            src="/mail.gif"
            alt=""
            // http://www.online-image-editor.com/
            // https://giphy.com/
          />
        </div>
      </main>
    </div>
  );
}
