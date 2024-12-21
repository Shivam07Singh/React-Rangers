import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./sComponent/login.jsx";
import SignUp from "./sComponent/signup.jsx";
import Dashboard from "./bComponent/Dashboard.jsx";
import Template1 from "./bComponent/Template1.jsx";
import Template2 from "./bComponent/Template2.jsx";
import ConstructionTemplate from "./bComponent/Template3.jsx";  {/* Fixed typo in file extension */}
import LibraryTemplate from "./bComponent/Library-template.jsx";
import HotelBookingTemplate from "./bComponent/Hotel-template.jsx";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/template1" element={<Template1 />} />
          <Route path="/template2" element={<Template2 />} />
          <Route path="/template3" element={<ConstructionTemplate />} />
          <Route path="/library-template" element={<LibraryTemplate />} />
          <Route path="/hotel-template" element={<HotelBookingTemplate />} />
        </Routes>
      </div>
    </Router>
  );
}
