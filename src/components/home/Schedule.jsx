import React from "react";
import { Jumbotron } from "./migration";
import { Table } from "react-bootstrap";

const Schedule = () => {
  const columnWidths = {
    date: { width: "15%" },
    description: { width: "25%" },
    optionalReadings: { width: "40%" },
    events: { width: "10%" },
    deadlines: { width: "10%" },
  };

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
            <th style={columnWidths.date}>Date</th>
            <th style={columnWidths.description}>Description</th>
            <th style={columnWidths.optionalReadings}>Optional Readings</th>
            <th style={columnWidths.events}>Events</th>
            <th style={columnWidths.deadlines}>Deadlines</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>28/08 Wed</td>
            <td>
              Introduction [
              <a href={require("../../assets/slides/1_Introduction.pdf")}>
                Slides
              </a>
              ]
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>30/08 Fri</td>
            <td>Node embeddings [Slides]</td>
            <td>
              <a href="https://arxiv.org/pdf/1403.6652">
                DeepWalk: Online Learning of Social Representations
              </a>{" "}
              <br />
              <a href="https://arxiv.org/pdf/1607.00653">
                node2vec: Scalable Feature Learning for Networks
              </a>{" "}
              <br />
              <a href="https://arxiv.org/pdf/1710.02971">
                Network Embedding as Matrix Factorization
              </a>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>04/09 Wed</td>
            <td>Graph Neural Networks Models [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>06/09 Fri</td>
            <td>Graph Neural Networks Designs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11/09 Wed</td>
            <td>
              Graph Neural Networks Implementations, Objectives and Loss
              Functions [Slides]
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13/09 Fri</td>
            <td>Scalable GNN Architectures [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>18/09 Wed</td>
            <td>Graph Attention Networks and Heterogeneous Graphs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>20/09 Fri</td>
            <td>GNNs and Transformers [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>25/09 Wed</td>
            <td>Theory of Graph Neural Networks [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>27/09 Fri</td>
            <td>Spectral GNNs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>02/10 Wed</td>
            <td>GNN Expressive Power [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>04/10 Fri</td>
            <td>PyTorch Geometric Library (Part 1) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>09/10 Wed</td>
            <td>PyTorch Geometric Library (Part 2) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11/10 Fri</td>
            <td>Graph Transformers [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>16/10 Wed</td>
            <td>Self-supervised Learning with GNNs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>18/10 Fri</td>
            <td>Foundation models and Pre-trained GNNs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>23/10 Wed</td>
            <td>Explaining GNN Predictions (Part 1) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>25/10 Fri</td>
            <td>Explaining GNN Predictions (Part 2) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>30/10 Wed</td>
            <td>
              <b>Paper Presentations</b> (Part 1)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>01/11 Fri</td>
            <td>
              <b>Paper Presentations</b> (Part 2)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>06/11 Wed</td>
            <td>Knowledge Graph Reasoning [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>08/11 Fri</td>
            <td>Graph Generative Models [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13/11 Wed</td>
            <td>Hyperbolic Embeddings and Hyperbolic GNNs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>15/11 Fri</td>
            <td>Applications of Hyperbolic Representation Learning [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>20/11 Wed</td>
            <td>Knowledge Graph Logical Queries [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>22/11 Fri</td>
            <td>
              Applications in Graphics, Robotics and Scientific Simulations
              [Slides]
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>04/12 Wed</td>
            <td>
              <b>Project Presentations</b> (Part 1)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>06/12 Fri</td>
            <td>
              <b>Project Presentations</b> (Part 2)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  );
};

export default Schedule;
