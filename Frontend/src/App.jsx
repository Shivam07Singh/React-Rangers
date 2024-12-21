import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./sComponent/Login";
import SignUp from "./sComponent/SignUp";
import ForgetPassword from "./sComponent/ForgetPassword";
import ResetPassword from "./sComponent/ResetPassword";
import Dashboard from "./bComponent/Dashboard.jsx";
import Template1 from "./bComponent/Template1.jsx";
import Template2 from "./bComponent/Template2.jsx";
import ConstructionTemplate from "./bComponent/Template3.jsx";
{
  /* Fixed typo in file extension */
}
import LibraryTemplate from "./bComponent/Library-template.jsx";
import HotelBookingTemplate from "./bComponent/Hotel-template.jsx";
import Landingpage from "./components/Landingpage.jsx";
import "./App.css";
import Navbar from "./bComponent/Navbar.jsx";
import ContactPage from "./bComponent/Contact.jsx";
import AboutPage from "./bComponent/About.jsx";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/admin/resetpassword" element={<ResetPassword />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/template1" element={<Template1 />} />
          <Route path="/template2" element={<Template2 />} />
          <Route path="/template3" element={<ConstructionTemplate />} />
          <Route path="/library-template" element={<LibraryTemplate />} />
          <Route path="/hotel-template" element={<HotelBookingTemplate />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
