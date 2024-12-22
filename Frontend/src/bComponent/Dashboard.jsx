import { Routes, Route, Link } from "react-router-dom";

import Products from "./Product/Products";
import Constructions from "./Construction/Constructions.jsx";
import Hotels from "./Hotel/Hotels.jsx";
import Libraries from "./Library/Libraries.jsx";
import Travels from "./Travel/Travels.jsx";

const templates = [
    {
        id: 1,
        name: "Products",
        image: "https://i.postimg.cc/KYggQTT4/SCR-20241221-jaam.jpg",
        path: "/products",
    },
    {
        id: 2,
        name: "Hotels",
        image: "https://i.postimg.cc/rmMFWRCB/SCR-20241221-jhbt.jpg",
        path: "/hotels",
    },
    {
        id: 3,
        name: "Libraries",
        image: "https://i.postimg.cc/qRTgL50Z/SCR-20241221-iyxi.jpg",
        path: "/libraries",
    },
    {
        id: 4,
        name: "Constructions",
        image: "https://i.postimg.cc/SRm2ytvz/SCR-20241221-jals.jpg",
        path: "/constructions",
    },
    {
        id: 5,
        name: "Travels",
        image: "https://i.postimg.cc/j5HnYrZb/SCR-20241221-jahh.jpg",
        path: "/travels",
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
                <Route path="/products" element={<Products />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/libraries" element={<Libraries />} />
                <Route path="/constructions" element={<Constructions />} />
                <Route path="/travels" element={<Travels />} />

            </Routes>




        </div>
    );
};

const styles = {
    dashboard: {
        height: "100vh",
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
        paddingtop: "10px"
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