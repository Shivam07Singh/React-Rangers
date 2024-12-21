import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Template1 from "./Template1.jsx";
import Template2 from "./Template2.jsx";
import ConstructionTemplate from "./Template3.jsx";
import LibraryTemplate from "./Library-template.jsx";
import HotelBookingTemplate from "./Hotel-template.jsx";

const templates = [
  {
    id: 1,
    name: "Template 1",
    image: "https://i.postimg.cc/KYggQTT4/SCR-20241221-jaam.jpg",
    path: "/template1",
  },
  {
    id: 2,
    name: "Template 2",
    image: "https://i.postimg.cc/j5HnYrZb/SCR-20241221-jahh.jpg",
    path: "/template2",
  },
  {
    id: 3,
    name: "Template 3",
    image: "https://i.postimg.cc/SRm2ytvz/SCR-20241221-jals.jpg",
    path: "/template3",
  },
  {
    id: 4,
    name: "Template 4",
    image: "https://i.postimg.cc/qRTgL50Z/SCR-20241221-iyxi.jpg",
    path: "/library-template",
  },
  {
    id: 5,
    name: "Template 5",
    image: "https://i.postimg.cc/rmMFWRCB/SCR-20241221-jhbt.jpg",
    path: "/hotel-template",
  },
];

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <h1 style={styles.heading}>Website Template</h1>
      <div style={styles.templateGrid}>
        {templates.map((template) => (
          <Link key={template.id} to={template.path} style={styles.link}>
            <div style={styles.templateCard}>
              <img src={template.image} alt={template.name} style={styles.image} />
              {/* <div style={styles.templateName}>{template.name}</div> */}
            </div>
          </Link>
        ))}
      </div>

      <Routes>
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template3" element={<ConstructionTemplate />} />
        <Route path="/library-template" element={<LibraryTemplate />} />
        <Route path="/hotel-template" element={<HotelBookingTemplate />} />
      </Routes>
    </div>
  );
};

const styles = {
  dashboard: {
    height: "100vh",
    backgroundColor: "white",
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "black",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#fff",
  },
  templateGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    paddingtop:"10px"
  },
  templateCard: {
    height: "310px",
    width: "320px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
    textAlign: "center",
    transition: "transform 0.3s ease",
    backgroundColor: "green",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  templateName: {
    padding: "10px",
    backgroundColor: "#f4f4f4",
    fontSize: "1.2rem",
    color: "#333",
  },
  link: {
    textDecoration: "none",
  },
};

export default Dashboard;
