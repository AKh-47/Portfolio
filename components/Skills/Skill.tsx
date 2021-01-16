import React, { ReactElement } from "react";

interface Props {
  name: string;
}

export default function Skill({ name }: Props): ReactElement {
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
