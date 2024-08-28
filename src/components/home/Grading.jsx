import React from "react";
import { Jumbotron } from "./migration";
import { Table } from "react-bootstrap";

const Grading = () => {
  const columnWidths = {
    item: { width: "60%", textAlign: "center" },
    weight: { width: "40%", textAlign: "center" },
  };
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
      <p>
        <i>To be finalized.</i>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={columnWidths.item}>Item</th>
            <th style={columnWidths.weight}>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={columnWidths.item}>Homework</td>
            <td style={columnWidths.weight}>20%</td>
          </tr>
          <tr>
            <td style={columnWidths.item}>Paper Presentation</td>
            <td style={columnWidths.weight}>20%</td>
          </tr>
          <tr>
            <td style={columnWidths.item}>Project Report</td>
            <td style={columnWidths.weight}>30%</td>
          </tr>
          <tr>
            <td style={columnWidths.item}>Project Presentation</td>
            <td style={columnWidths.weight}>20%</td>
          </tr>
          <tr>
            <td style={columnWidths.item}>Participation & Discussion</td>
            <td style={columnWidths.weight}>10%</td>
          </tr>
        </tbody>
      </Table>
      <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>Project</h3>
      <p style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        The final goal of the course project is to help students create
        resources for their future <b>research</b> in artificial intelligence.
        Graph machine learning is one of the hottest emerging topics in machine
        learning, with wide applicability across domains and industries. Our
        hope is that their projects will firstly serve as an opportunity for
        them to dive deep into the graph machine learning community and get
        first-hand experience researching related topics. To this end, we are
        goining to use a conference system (e.g.,{" "}
        <a href="https://openreview.net/">OpenReview</a>) to help students
        become familiar with the research process. Students are required to{" "}
        <i>submit</i> and <i>review</i> papers from each other within the class.
      </p>
      <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>Policy</h3>
      <ul style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        <li>
          <i>Academic Integrity:</i> Students are encouraged to form study
          groups for collaborative learning. While students are welcome to
          discuss and work through homework problems together, each student must
          independently submit their homework without consulting notes from the
          group session. This ensures that each student fully understands the
          material and can reproduce the solution on their own. We strictly
          adhere to the
          <a href="https://siebelschool.illinois.edu/academics/honor-code">
            {" "}
            Honor Code and Academic Integrity
          </a>{" "}
          policies from the university.
        </li>
        <li>
          <i>AI Tools:</i> Students are <b>encouraged</b> to use AI tools to
          help them with their study. Students are welcome to use large lanugage
          models to help them generate codes, gather ideas, or enhance reports.
          Students are also encouraged to share the prompts they used with
          others. However, students must be fully responsible for the whole
          content they submitted and must strictly adhere to the academic
          policy.
        </li>
      </ul>
    </Jumbotron>
  );
};

export default Grading;
