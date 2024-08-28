import React from "react";
import { Jumbotron } from "./migration";

const Content = () => {
  return (
    <Jumbotron
      id="content"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2
        style={{
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Content
      </h2>
      <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        What is this course about?
      </h3>
      <p style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        This course delves into the exciting field of deep learning for
        graph-structured data. This course is designed to equip students with an
        understanding of fundamental principles, classic models, and
        cutting-edge algorithms, along with practical applications. The
        curriculum will commence with an exploration of the foundationals,
        encompassing graph concepts, deep learning fundamentals, node
        embeddings, and graph neural networks. Building upon this groundwork,
        the course will progress to advanced topics, including the practical
        guide for GNN implementation, theories of graph neural networks, and
        specialized areas such as heterogeneous graphs, knowledge graphs,
        reasoning mechanisms, and subgraph mining. Moreover, the course will
        delve into contemporary applications, including graph-based recommender
        systems, generative models for graphs, graph transformers, and building
        scalable graph learning systems. The instructional approach will blend
        traditional lectures, student-led presentations, interactive
        seminar-style discussions, and collaborative semester-long projects.
        Through this multifaceted approach, students will not only grasp the
        knowledge but also develop analytical skills by reading and critiquing
        research papers, discussing and presenting ideas, and contributing to
        collaborative projects.
      </p>
      <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        Prerequisites
      </h3>
      <p style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        Students are expected to have the following background:
        <ul>
          <li>Basics of deep learning</li>
          <li>Python programming skills</li>
          <li>
            Recommended: PyTorch, machine learning, probability and statistics
          </li>
        </ul>
      </p>
      <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>Materials</h3>
      <p style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        <ul>
          <li>
            <a href="https://www.cs.mcgill.ca/~wlh/grl_book/">
              Graph Representation Learning
            </a>{" "}
            by William L. Hamilton
          </li>
          <li>
            <a href="https://networksciencebook.com/">Network Science</a> by
            Albert-László Barabási
          </li>
        </ul>
      </p>
      <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>References</h3>
      <p style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        <ul>
          <li>
            Much of the course materials are adapted from{" "}
            <a href="https://web.stanford.edu/class/cs224w/">
              CS224W @ Stanford University
            </a>
            . We sincerely appreciate Prof. Leskovec and the TA team for making
            the course materials publicly available.
          </li>
          <li>
            <a href="https://graph-and-geometric-learning.github.io/cpsc483-583-website-23fall">
              CPSC483/583 @ Yale University
            </a>
          </li>
          <li>
            <a href="https://github.com/pyg-team/pytorch_geometric">
              PyG (PyTorch Geometric)
            </a>
          </li>
          <li>
            <a href="https://github.com/snap-stanford/GraphGym">GraphGym</a>
          </li>
        </ul>
      </p>
    </Jumbotron>
  );
};

export default Content;
