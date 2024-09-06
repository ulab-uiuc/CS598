import React from "react";
import { Jumbotron } from "./migration";
import { Table } from "react-bootstrap";

const Schedule = () => {
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
          This schedule is subject to minor changes. All assignment deadlines
          are at <b>11:59pm CT</b>.
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
        <tbody>
          {/* Week 1 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              1
            </td>
            <td>Aug 28 Wed</td>
            <td>
              Introduction [
              <a href={require("../../assets/slides/01_Introduction.pdf")}>
                slides
              </a>
              ]
            </td>
            <td>Paper reading & analysis</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Aug 30 Fri</td>
            <td>
              Graph learning basics [
              <a
                href={require("../../assets/slides/02_Graph_Learning_Basics.pdf")}
              >
                slides
              </a>
              ]
            </td>
            <td>Paper reading & analysis</td>
            <td>
              Writing task, out [
              <a href="https://docs.google.com/spreadsheets/d/1aErbzOORjhWS5jLDs22m_4XzOTnLqUU-26Fz5ZH5fPM/edit?usp=sharing%C2%A0">
                template
              </a>
              ]
            </td>
            <td></td>
          </tr>

          {/* Week 2 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              2
            </td>
            <td>Sept 04 Wed</td>
            <td>
              "Shallow learning" with graphs [
              <a
                href={require("../../assets/slides/03_Shallow_Graph_Learning.pdf")}
              >
                slides
              </a>
              ]
            </td>
            <td>Paper reading & analysis</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 06 Fri</td>
            <td>Graph neural networks: perspective [
              <a
                href={require("../../assets/slides/04_GNN_Perspective.pdf")}
              >
                slides
              </a>
              ]</td>
            <td>Paper reading & analysis</td>
            <td></td>
            <td></td>
          </tr>

          {/* Week 3 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              3
            </td>
            <td>Sept 11 Wed</td>
            <td>Graph neural networks: model I</td>
            <td>Paper reading & analysis</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 13 Fri</td>
            <td>Graph neural networks: model II</td>
            <td>Paper reading & analysis</td>
            <td></td>
            <td>Writing task due</td>
          </tr>

          {/* Week 4 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              4
            </td>
            <td>Sept 18 Wed</td>
            <td>Paper discussion & teammate finding I</td>
            <td>Ideate & discussion</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 20 Fri</td>
            <td>Paper discussion & teammate finding II</td>
            <td>Ideate & discussion</td>
            <td>Proposal task, out</td>
            <td></td>
          </tr>

          {/* Week 5 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              5
            </td>
            <td>Sept 25 Wed</td>
            <td>Graph neural networks: pipeline</td>
            <td>Ideate & discussion</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 27 Fri</td>
            <td>Graph neural networks: theory</td>
            <td>Ideate & discussion</td>
            <td></td>
            <td></td>
          </tr>

          {/* Week 6 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              6
            </td>
            <td>Oct 02 Wed</td>
            <td>Graph neural networks: add-ons</td>
            <td>Ideate & discussion</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 04 Fri</td>
            <td>GNN implementation: PyG & GraphGym</td>
            <td>Ideate & discussion</td>
            <td></td>
            <td>Proposal due</td>
          </tr>

          {/* Week 7 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              7
            </td>
            <td>Oct 09 Wed</td>
            <td>Project idea discussions</td>
            <td>Prototype implementation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 11 Fri</td>
            <td>Beyond simple graphs: heterogeneous graphs</td>
            <td>Prototype implementation</td>
            <td>Submission task, out</td>
            <td></td>
          </tr>

          {/* Week 8 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              8
            </td>
            <td>Oct 16 Wed</td>
            <td>Beyond simple graphs: knowledge graphs</td>
            <td>Prototype implementation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 18 Fri</td>
            <td>Beyond simple graphs: knowledge graph reasoning</td>
            <td>Prototype implementation</td>
            <td></td>
            <td></td>
          </tr>

          {/* Week 9 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              9
            </td>
            <td>Oct 23 Wed</td>
            <td>Beyond prediction: graph generative models</td>
            <td>Prototype implementation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 25 Fri</td>
            <td>Beyond message passing: expressive GNNs</td>
            <td>Prototype implementation</td>
            <td></td>
            <td></td>
          </tr>

          {/* Week 10 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              10
            </td>
            <td>Oct 30 Wed</td>
            <td>Beyond small graphs: scale GNNs to large graphs</td>
            <td>Paper Writing</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 01 Fri</td>
            <td>Beyond small GNNs: graph foundation models</td>
            <td>Paper Writing</td>
            <td></td>
            <td></td>
          </tr>

          {/* Week 11 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              11
            </td>
            <td>Nov 06 Wed</td>
            <td>Beyond sparse graphs: graph transformers</td>
            <td>Paper Writing</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 08 Fri</td>
            <td>GNN applications: recommender systems</td>
            <td>Paper Writing</td>
            <td></td>
            <td>Submission due</td>
          </tr>

          {/* Week 12 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              12
            </td>
            <td>Nov 13 Wed</td>
            <td>GNN applications: graph mining</td>
            <td>Review & Response</td>
            <td>Review & response task, out</td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 15 Fri</td>
            <td>GNN applications: science</td>
            <td>Review & Response</td>
            <td></td>
            <td></td>
          </tr>

          {/* Week 13 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              13
            </td>
            <td>Nov 20 Wed</td>
            <td>Conclusion</td>
            <td>Review & Response</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 22 Fri</td>
            <td>Course project presentation 1</td>
            <td>Review & Response</td>
            <td></td>
            <td></td>
          </tr>

          {/* Week 14 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">
              14
            </td>
            <td>Dec 04 Wed</td>
            <td>Course project presentation 2</td>
            <td>Presentation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Dec 06 Fri</td>
            <td>Course project presentation 3</td>
            <td>Presentation</td>
            <td></td>
            <td>Review & response due</td>
          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  );
};

export default Schedule;
