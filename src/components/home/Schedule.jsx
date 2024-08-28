import React from "react";
import { Jumbotron } from "./migration";
import { Table } from "react-bootstrap";

const Schedule = () => {
  const schedule = [
    {
      week: 1,
      date: "Aug 28 Wed",
      knowledge: "Introduction",
      research: "Paper reading & analysis",
      events: "",
      deadlines: "",
    },
    {
      week: 1,
      date: "Aug 30 Fri",
      knowledge: "Graph learning tasks",
      research: "Paper reading & analysis",
      events: "Writing task, out",
      deadlines: "",
    },
    {
      week: 2,
      date: "Sept 04 Wed",
      knowledge: '"Shallow" graph learning',
      research: "Paper reading & analysis",
      events: "",
      deadlines: "",
    },
    {
      week: 2,
      date: "Sept 06 Fri",
      knowledge: "Graph neural networks: perspective",
      research: "Paper reading & analysis",
      events: "",
      deadlines: "",
    },
    {
      week: 3,
      date: "Sept 11 Wed",
      knowledge: "Graph neural networks: model I",
      research: "Paper reading & analysis",
      events: "",
      deadlines: "",
    },
    {
      week: 3,
      date: "Sept 13 Fri",
      knowledge: "Graph neural networks: model II",
      research: "Paper reading & analysis",
      events: "",
      deadlines: "Writing task due",
    },
    {
      week: 4,
      date: "Sept 18 Wed",
      knowledge: "Paper reading discussions",
      research: "Ideate & discussion",
      events: "",
      deadlines: "",
    },
    {
      week: 4,
      date: "Sept 20 Fri",
      knowledge: "Graph neural networks: objective",
      research: "Ideate & discussion",
      events: "Proposal task, out",
      deadlines: "",
    },
    {
      week: 5,
      date: "Sept 25 Wed",
      knowledge: "Graph neural networks: pipeline",
      research: "Ideate & discussion",
      events: "",
      deadlines: "",
    },
    {
      week: 5,
      date: "Sept 27 Fri",
      knowledge: "Graph neural networks: theory",
      research: "Ideate & discussion",
      events: "",
      deadlines: "",
    },
    {
      week: 6,
      date: "Oct 02 Wed",
      knowledge: "Graph neural networks: add-ons",
      research: "Ideate & discussion",
      events: "",
      deadlines: "",
    },
    {
      week: 6,
      date: "Oct 04 Fri",
      knowledge: "GNN implementation: PyG & GraphGym",
      research: "Ideate & discussion",
      events: "",
      deadlines: "Proposal due",
    },
    {
      week: 7,
      date: "Oct 09 Wed",
      knowledge: "Project idea discussions",
      research: "Prototype implementation",
      events: "",
      deadlines: "",
    },
    {
      week: 7,
      date: "Oct 11 Fri",
      knowledge: "Beyond simple graphs: heterogeneous graphs",
      research: "Prototype implementation",
      events: "Submission task, out",
      deadlines: "",
    },
    {
      week: 8,
      date: "Oct 16 Wed",
      knowledge: "Beyond simple graphs: knowledge graphs",
      research: "Prototype implementation",
      events: "",
      deadlines: "",
    },
    {
      week: 8,
      date: "Oct 18 Fri",
      knowledge: "Beyond simple graphs: knowledge graph reasoning",
      research: "Prototype implementation",
      events: "",
      deadlines: "",
    },
    {
      week: 9,
      date: "Oct 23 Wed",
      knowledge: "Beyond prediction: graph generative models",
      research: "Prototype implementation",
      events: "",
      deadlines: "",
    },
    {
      week: 9,
      date: "Oct 25 Fri",
      knowledge: "Beyond message passing: expressive GNNs",
      research: "Prototype implementation",
      events: "",
      deadlines: "",
    },
    {
      week: 10,
      date: "Oct 30 Wed",
      knowledge: "Beyond small graphs: scale GNNs to large graphs",
      research: "Paper Writing",
      events: "",
      deadlines: "",
    },
    {
      week: 10,
      date: "Nov 01 Fri",
      knowledge: "Beyond small GNNs: graph foundation models",
      research: "Paper Writing",
      events: "",
      deadlines: "",
    },
    {
      week: 11,
      date: "Nov 06 Wed",
      knowledge: "Beyond sparse graphs: graph transformers",
      research: "Paper Writing",
      events: "",
      deadlines: "",
    },
    {
      week: 11,
      date: "Nov 08 Fri",
      knowledge: "GNN applications: recommender systems",
      research: "Paper Writing",
      events: "",
      deadlines: "Submission due",
    },
    {
      week: 12,
      date: "Nov 13 Wed",
      knowledge: "GNN applications: graph mining",
      research: "Review & Response",
      events: "Review & response task, out",
      deadlines: "",
    },
    {
      week: 12,
      date: "Nov 15 Fri",
      knowledge: "GNN applications: science",
      research: "Review & Response",
      events: "",
      deadlines: "",
    },
    {
      week: 13,
      date: "Nov 20 Wed",
      knowledge: "Conclusion",
      research: "Review & Response",
      events: "",
      deadlines: "",
    },
    {
      week: 13,
      date: "Nov 22 Fri",
      knowledge: "Course project presentation 1",
      research: "Review & Response",
      events: "",
      deadlines: "",
    },
    {
      week: 14,
      date: "Dec 04 Wed",
      knowledge: "Course project presentation 2",
      research: "Presentation",
      events: "",
      deadlines: "",
    },
    {
      week: 14,
      date: "Dec 06 Fri",
      knowledge: "Course project presentation 3",
      research: "Presentation",
      events: "",
      deadlines: "Review & response due",
    },
  ];
  const rows = [];
  let currentWeek = null;

  schedule.forEach((item, index) => {
    if (item.week !== currentWeek) {
      currentWeek = item.week;
      rows.push(
        <tr key={`week-${item.week}`}>
          <td rowSpan={2} className="text-center align-middle">
            {item.week}
          </td>
          <td>{item.date}</td>
          <td>{item.knowledge}</td>
          <td>{item.research}</td>
          <td>{item.events}</td>
          <td>{item.deadlines}</td>
        </tr>
      );
    } else {
      rows.push(
        <tr key={`week-${item.week}-${index}`}>
          <td>{item.date}</td>
          <td>{item.knowledge}</td>
          <td>{item.research}</td>
          <td>{item.events}</td>
          <td>{item.deadlines}</td>
        </tr>
      );
    }
  });

  return (
    <Jumbotron id="schedule" className="m-0">
      <h2
        style={{
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Schedule
      </h2>
      <p>
        <i>
          This schedule is subject to change. All assignment deadlines are at{" "}
          <b>11:59pm CT</b>.
        </i>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Week</th>
            <th>Date</th>
            <th>Knowledge learning</th>
            <th>Research training</th>
            <th>Events</th>
            <th>Deadlines</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Jumbotron>
  );
};

export default Schedule;
