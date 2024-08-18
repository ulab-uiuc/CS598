import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBody from "./components/home/MainBody";
import Logistics from "./components/home/Logistics";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Schedule from "./components/home/Schedule.jsx";
import Content from "./components/home/Content.jsx";
import Grading from "./components/home/Grading.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody ref={ref} />
      <Logistics imgSize={150} />
      <Content img={150} />
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
