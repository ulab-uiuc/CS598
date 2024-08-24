import React from "react";
import { Jumbotron } from "./migration";

const Grading = () => {
  return (
    <Jumbotron id="grading" className="bg-white">
      <h2
        style={{
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Grading
      </h2>
      <h3>Project: 60%</h3>
      <p>
        <i>Proposal, milestone, and report.</i>
      </p>
      <p>Goal: create long-lasting resources for your technical profiles.</p>
      <h3>Homework: 20%</h3>
      <p>
        <i>Written homeworks and coding assignments.</i>
      </p>
      <h3>Presentation: 20%</h3>
      <p>
        <i>Paper presentation.</i>
      </p>
      <h3>Misc: 5% </h3>
      <p>
        <i>Course participation.</i>
      </p>
    </Jumbotron>
  );
};

export default Grading;
