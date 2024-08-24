import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBody from "./components/home/MainBody";
import Logistics from "./components/home/Logistics";
import Content from "./components/home/Content.jsx";
import Schedule from "./components/home/Schedule.jsx";
import Grading from "./components/home/Grading.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = React.forwardRef(({}, ref) => {
  return (
    <>
      <MainBody ref={ref} />
      <Logistics />
      <Content />
      <Schedule />
      <Grading />
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Navbar ref={titleRef} />
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
