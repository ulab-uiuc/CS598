import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand
        className={`${!isTop ? "brand" : "brand-white"}`}
        href={"/CS598/#home"}
      >
        CS598
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`navbar-nav mr-auto`}>
          <NavLink
            href={"/CS598/#logistics"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            Logistics
          </NavLink>
          <NavLink
            href={"/CS598/#content"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            Content
          </NavLink>
          <NavLink
            href={"/CS598/#schedule"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            Schedule
          </NavLink>
          <NavLink
            href={"/CS598/#grading"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            Grading
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
