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
              1. Introduction [
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
            <td>2. Node embeddings [Slides]</td>
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
            <td>3. Graph Neural Networks Models [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>06/09 Fri</td>
            <td>4. Graph Neural Networks Designs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11/09 Wed</td>
            <td>
              5. Graph Neural Networks Implementations, Objectives and Loss
              Functions [Slides]
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13/09 Fri</td>
            <td>6. Scalable GNN Architectures [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>18/09 Wed</td>
            <td>
              7. Graph Attention Networks and Heterogeneous Graphs [Slides]
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>20/09 Fri</td>
            <td>8. GNNs and Transformers [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>25/09 Wed</td>
            <td>9. Theory of Graph Neural Networks [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>27/09 Fri</td>
            <td>10. Spectral GNNs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>02/10 Wed</td>
            <td>11. GNN Expressive Power [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>04/10 Fri</td>
            <td>12. PyTorch Geometric Library (Part 1) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>09/10 Wed</td>
            <td>13. PyTorch Geometric Library (Part 2) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11/10 Fri</td>
            <td>14. Graph Transformers [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>16/10 Wed</td>
            <td>15. Self-supervised Learning with GNNs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>18/10 Fri</td>
            <td>16. Foundation models and Pre-trained GNNs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>23/10 Wed</td>
            <td>17. Explaining GNN Predictions (Part 1) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>25/10 Fri</td>
            <td>18. Explaining GNN Predictions (Part 2) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>30/10 Wed</td>
            <td>19. Distributed Node Embeddings [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>01/11 Fri</td>
            <td>20. Knowledge Graph Reasoning [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>06/11 Wed</td>
            <td>21. Graph Generative Models [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>08/11 Fri</td>
            <td>22. Hyperbolic Embeddings and Hyperbolic GNNs [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13/11 Wed</td>
            <td>
              23. Applications of Hyperbolic Representation Learning [Slides]
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>15/11 Fri</td>
            <td>24. Knowledge Graph Logical Queries [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>20/11 Wed</td>
            <td>
              25. Applications in Graphics, Robotics and Scientific Simulations
              [Slides]
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>22/11 Fri</td>
            <td>26. Final Exam</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>04/12 Wed</td>
            <td>27. Project Presentations (Part 1)</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>06/12 Fri</td>
            <td>28. Project Presentations (Part 2)</td>
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
