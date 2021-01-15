import React, { ReactElement } from "react";

interface Props {}

export default function SkillCard({}: Props): ReactElement {
  return (
    <div className="tech">
      {/* <img src="/skills/react.png" alt="" /> */}
      <span>React</span>
    </div>
  );
}
