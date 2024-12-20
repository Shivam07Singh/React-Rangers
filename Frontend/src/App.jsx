import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./sComponent/login.jsx";
import SignUp from "./sComponent/signup.jsx";
import Dashboard from "./bComponent/Dashboard.jsx";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
