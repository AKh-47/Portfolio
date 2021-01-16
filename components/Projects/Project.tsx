import React, { ReactElement } from "react";
import Tech from "./Tech";

interface Props {
  alt: boolean;
}

export default function Project({ alt }: Props): ReactElement {
  return (
    <div className={`project ${alt ? "alt" : ""}`}>
      <img />
      <div className="content">
        <h2>
          Project Name
          {/* <span>Ongoing</span> */}{" "}
        </h2>
        <Tech />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero
          hic minus et dolore iusto laudantium laborum eveniet voluptatum omnis
          at fugit pariatur architecto nulla adipisci reru
        </p>
      </div>
    </div>
  );
}