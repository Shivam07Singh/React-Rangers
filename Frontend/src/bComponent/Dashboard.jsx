import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Template1 from "./Template1";
import Template2 from "./Template2";

const templates = [
  {
    id: 1,
    name: "Template 1",
    image: "https://via.placeholder.com/300x200?text=Template+1",
    path: "/Template1", 
  },
  {
    id: 2,
    name: "Template 2",
    image: "https://via.placeholder.com/300x200?text=Template+2",
    path: "/Template2", 
  },
];

const Dashboard = () => {
  return (
    <Router>
      <div style={styles.dashboard}>
        <h1 style={styles.heading}>Select a website template</h1>
        <div style={styles.templateGrid}>
          {templates.map((template) => (
            <Link
              key={template.id}
              to={template.path}
              style={styles.link} 
            >
              <div style={styles.templateCard}>
                <img
                  src={template.image}
                  alt={template.name}
                  style={styles.image}
                />
                <p style={styles.templateName}>{template.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <Routes>
          <Route path="/Template1" element={<Template1 />} />
          <Route path="/Template2" element={<Template2 />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  dashboard: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  templateGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  templateCard: {
    width: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
    textAlign: "center",
    transition: "transform 0.3s ease",
  },
  templateCardHover: {
    transform: "scale(1.05)",
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
