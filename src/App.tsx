import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Transport from "./pages/Transport";
import Machinery from "./pages/Machinery";
import Plant from "./pages/plant";
import Jcb from "./pages/Machinery/jcb";
import ExcavatorPage from "./pages/Machinery/excavator";
import MotorGraderPage from "./pages/Machinery/motorgrader";
import RoadRollerPage from "./pages/Machinery/roadroller";
import TipperPage from "./pages/Machinery/tipper";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/machinery/jcb" element={<Jcb />} />
          <Route path="/machinery/excavator" element={<ExcavatorPage />} />
          <Route path="/machinery/motorgrader" element={<MotorGraderPage />} />
          <Route path="/machinery/roadroller" element={<RoadRollerPage />} />
          <Route path="/machinery/tipper" element={<TipperPage />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
