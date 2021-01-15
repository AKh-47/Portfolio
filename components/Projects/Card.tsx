import React, { ReactElement } from "react";

interface Props {}

export default function Card({}: Props): ReactElement {
  return (
    <div className="card">
      <h1>Project Name</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        perferendis voluptatem, vero beatae sapiente accusamus dolores unde
        placeat laboriosam cum doloribus, saepe culpa quam, repellendus quia
      </p>
    </div>
  );
}
