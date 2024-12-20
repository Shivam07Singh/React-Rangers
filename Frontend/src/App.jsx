import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Template2 from "./bComponent/Template2";
import ConstructionTemplate from "./bComponent/Template3";

import Login from "./sComponent/Login";
import SignUp from "./sComponent/signup";
import Dashboard from "./bComponent/Dashboard";
import Template1 from "./bComponent/Template1";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Template1" element={<Template1 />} />
          <Route path="/Template2" element={<Template2 />} />
          <Route path="/Template3" element={<ConstructionTemplate />} />
          {/* <Route path="/Template5" element={<LibraryTemplate />} />
          <Route path="/Template6" element={<HotelBookingTemplate />} /> */}

        </Routes>
      </div>
    </Router>
  );
}
