import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";

import Siebel from "../../assets/img/siebel.jpg";

const MainBody = React.forwardRef(({}, ref) => {
  return (
    <div
      fluid
      id="home"
      style={{
        backgroundImage: `url(${Siebel})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "20em",
      }}
      className="title d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div id="stars"></div>
      <Container className="text-center">
        <b
          ref={ref}
          className="display-3"
          style={{ marginTop: "1em", marginBottom: "1em", fontWeight: 700 }}
        >
          CS598: Deep Learning with Graphs
        </b>
        <Typist>
          <div
            className="lead typist"
            style={{ marginTop: "1em", marginBottom: "1em" }}
          >
            University of Illinois Urbana-Champaign, 2024 Fall
          </div>
        </Typist>
      </Container>
    </div>
  );
});

export default MainBody;
