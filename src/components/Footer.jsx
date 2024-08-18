import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {/* <i className="fas fa-code" /> by{" "}
        <a rel="noopener">
          {" "}
          <span className="badge bg-dark">Zirui Cheng</span>
        </a> */}
        <span className="badge bg-dark">CS598: Deep Learning with Graphs</span>
        <br />
        <span>University of Illinois Urbana-Champaign, 2024Fall</span>
      </Container>
    </footer>
  );
};

export default Footer;
