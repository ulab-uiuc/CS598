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
            <td>Aug 28 Wed</td>
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
            <td>Aug 30 Fri</td>
            <td>Node embeddings [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1403.6652">
                    DeepWalk: Online Learning of Social Representations
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1607.00653">
                    node2vec: Scalable Feature Learning for Networks
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1710.02971">
                    Network Embedding as Matrix Factorization
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 04 Wed</td>
            <td>Graph neural networks [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://iclr.cc/virtual/2021/invited-talk/3717">
                    Geometric Deep Learning: the Erlangen Programme of ML
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1609.02907.pdf">
                    Semi-Supervised Classification with Graph Convolutional
                    Networks
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 06 Fri</td>
            <td>A general perspective on GNNs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/2011.08843.pdf">
                    Design Space of Graph Neural Networks
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1706.02216.pdf">
                    Inductive Representation Learning on Large Graphs
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1710.10903.pdf">
                    Graph Attention Networks
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 11 Wed</td>
            <td>GNN augmentation and training [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1806.08804.pdf">
                    Hierarchical Graph Representation Learning with
                    Differentiable Pooling
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 13 Fri</td>
            <td>Theories of GNNs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1810.00826.pdf">
                    How Powerful Are Graph Neural Networks?
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 18 Wed</td>
            <td>Heterogenous graphs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1703.06103.pdf">
                    Modeling Relational Data with Graph Convolutional Networks
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/2003.01332.pdf">
                    Heterogeneous Graph Transformer
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 20 Fri</td>
            <td>Knowledge graphs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://papers.nips.cc/paper/2013/file/1cecc7a77928ca8133fa24680a88d2f9-Paper.pdf">
                    Translating Embeddings for Modeling Multi-relational Data
                  </a>
                </li>
                <li>
                  <a href="https://linyankai.github.io/publications/aaai2015_transr.pdf">
                    Learning Entity and Relation Embeddings for Knowledge Graph
                    Completion
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1412.6575.pdf">
                    Embedding Entities and Relations for Learning and Inference
                    in Knowledge Bases
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1606.06357.pdf">
                    Complex Embeddings for Simple Link Prediction
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1902.10197.pdf">
                    RotatE: Knowledge Graph Embedding by Relational Rotation in
                    Complex Space
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 25 Wed</td>
            <td>Reasoning over knowledge graphs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1806.01445.pdf">
                    Embedding Logical Queries on Knowledge Graphs
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/2002.05969.pdf">
                    Query2box: Reasoning over Knowledge Graphs in Vector Space
                    Using Box Embeddings
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1506.01094.pdf">
                    Traversing Knowledge Graphs in Vector Space
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 27 Fri</td>
            <td>Fast neural subgraph matching [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://www.science.org/doi/10.1126/science.298.5594.824">
                    Network Motifs: Simple Building Blocks of Complex Networks
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/2007.03092.pdf">
                    Neural Subgraph Matching
                  </a>
                </li>
                <li>
                  <a href="http://snap.stanford.edu/frequent-subgraph-mining/">
                    SPMiner: Frequent Subgraph Mining by Walking in Order
                    Embedding Space
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 02 Wed</td>
            <td>GNNs for recommenders [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1905.08108.pdf">
                    Neural Graph Collaborative Filtering
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/2002.02126.pdf">
                    LightGCN: Simplifying and Powering Graph Convolution Network
                    for Recommendation
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1806.01973.pdf">
                    Graph Convolutional Neural Networks for Web-Scale
                    Recommender Systems
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 04 Fri</td>
            <td>PyTorch Geometric Library (Part 1) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 09 Wed</td>
            <td>PyTorch Geometric Library (Part 2) [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 11 Fri</td>
            <td>Deep generative models for graphs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1802.08773.pdf">
                    GraphRNN: Generating Realistic Graphs with Deep
                    Auto-regressive Models
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1806.02473.pdf">
                    Graph Convolutional Policy Network for Goal-Directed
                    Molecular Graph Generation
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 16 Wed</td>
            <td>Advanced topics in GNNs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1906.04817.pdf">
                    Position-aware Graph Neural Networks
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/2101.10320.pdf">
                    Identity-aware Graph Neural Networks
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1805.07984.pdf">
                    Adversarial Attacks on Neural Networks for Graph Data
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 18 Fri</td>
            <td>Graph Transformers [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/2106.05234.pdf">
                    Do Transformers Really Perform Bad for Graph Representation?
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/2202.13013.pdf">
                    Sign and Basis Invariant Networks for Spectral Graph
                    Representation Learning
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/2302.04181.pdf">
                    Attending to Graph Transformers
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 23 Wed</td>
            <td>Scaling to large graphs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1905.07953.pdf">
                    Cluster-GCN: An Efficient Algorithm for Training Deep and
                    Large Graph Convolutional Networks
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/pdf/1902.07153.pdf">
                    Simplifying Graph Convolutional Networks
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 25 Fri</td>
            <td>
              <b>Paper Presentations</b> (Part 1)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 30 Wed</td>
            <td>
              <b>Paper Presentations</b> (Part 2)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 01 Fri</td>
            <td>Self-supervised learning with GNNs [Slides]</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 06 Wed</td>
            <td>Foundation models and pre-trained GNNs</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/abs/2306.03355">
                    BatchSampler: Sampling Mini-Batches for Contrastive Learning
                    in Vision, Language, and Graphs
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/abs/2307.04052">
                    Learning to Group Auxiliary Datasets for Molecule
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 08 Fri</td>
            <td>Link Prediction and Causality [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://web.stanford.edu/class/cs224w/notes/Intro_Causality.pdf">
                    Intro to Causality for Computer Scientists
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 13 Wed</td>
            <td>Algorithmic reasoning with GNNs [Slides]</td>
            <td>
              <ul>
                <li>
                  <a href="https://arxiv.org/pdf/1905.13211.pdf">
                    What Can Neural Networks Reason About?
                  </a>
                  <a href="https://arxiv.org/pdf/2009.11848.pdf">
                    How Neural Networks Extrapolate: From Feedforward to Graph
                    Neural Networks
                  </a>
                </li>
              </ul>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 15 Fri</td>
            <td>
              Applications in graphics, robotics and scientific simulations
              [Slides]
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 20 Wed</td>
            <td>Conclusion [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 22 Fri</td>
            <td>Conclusion [Slides]</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Dec 04 Wed</td>
            <td>
              <b>Project Presentations</b> (Part 1)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Dec 06 Fri</td>
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
