import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Template1 from "./Components/Template1";
import Template2 from "./Components/Template2";
import ConstructionTemplate from "./Components/Template3";
import LibraryTemplate from "./Components/Template5";
import HotelBookingTemplate from "./Components/Template6";
import "./styles.css";
import Login from "./sComponent/Login";
import SignUp from "./sComponent/signup";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Template1" element={<Template1 />} />
          <Route path="/Template2" element={<Template2 />} />
          <Route path="/Template3" element={<ConstructionTemplate />} />
          {/* <Route path="/Template5" element={<LibraryTemplate />} />
          <Route path="/Template6" element={<HotelBookingTemplate />} /> */}
          <Route path="./sComponent/Login" element={<Login/>} />
          <Route path="./sComponent/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}
