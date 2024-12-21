import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./sComponent/Login";
import SignUp from "./sComponent/SignUp";
import ForgetPassword from "./sComponent/ForgetPassword";
import ResetPassword from "./sComponent/ResetPassword";
import Dashboard from "./bComponent/Dashboard.jsx";
import Landingpage from "./components/Landingpage.jsx";
import Products from "./bComponent/Product/Products.jsx";
import Constructions from "./bComponent/Construction/Constructions.jsx";
import Hotels from "./bComponent/Hotel/Hotels.jsx";
import Libraries from "./bComponent/Library/Libraries.jsx";
import Travels from "./bComponent/Travel/Travels.jsx";


import AboutP from "./bComponent/Product/About.jsx";
import ContactP from "./bComponent/Product/Contact.jsx";
import AboutT from "./bComponent/Travel/About.jsx";
import ContactT from "./bComponent/Travel/Contact.jsx";
import AboutL from "./bComponent/Library/About.jsx";
import ContactL from "./bComponent/Library/Contact.jsx";
import AboutC from "./bComponent/Construction/About.jsx";
import ContactC from "./bComponent/Construction/Contact.jsx";
import AboutH from "./bComponent/Hotel/About.jsx";
import ContactH from "./bComponent/Hotel/Contact.jsx";
import About from "./components/About.jsx";
import BlogPage from "./components/BlogPage.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/admin/resetpassword" element={<ResetPassword />} />
          <Route path="/" element={<Landingpage />} />



          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/constructions" element={<Constructions />} />
          <Route path="/travels" element={<Travels />} />



          <Route path="/AboutP" element={<AboutP />} />
          <Route path="/ContactP" element={<ContactP />} />
          <Route path="/AboutT" element={<AboutT />} />
          <Route path="/ContactT" element={<ContactT />} />
          <Route path="/AboutL" element={<AboutL />} />
          <Route path="/ContactL" element={<ContactL />} />
          <Route path="/AboutC" element={<AboutC />} />
          <Route path="/ContactC" element={<ContactC />} />
          <Route path="/AboutH" element={<AboutH />} />
          <Route path="/ContactH" element={<ContactH />} />




        </Routes>
      </div>
    </Router>
  );
}
