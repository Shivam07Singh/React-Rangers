import { Routes, Route, Link } from "react-router-dom";

import Products from "./Product/Products";
import Constructions from "./Construction/Constructions.jsx";
import Hotels from "./Hotel/Hotels.jsx";
import Libraries from "./Library/Libraries.jsx";
import Travels from "./Travel/Travels.jsx";
import { useEffect, useState } from "react";
import axios from "axios"
import AdminProducts from "./Product/adminProducts";
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

    const [templates1, setTemplates1] = useState([]);

    useEffect(() => {
        // Fetch templates from the backend with token
        const token = localStorage.getItem("token");

        axios.get('http://localhost:2024/website/product', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {
                setTemplates1(response.data.websites);
                console.log(response.data.websites)
            })
            .catch(error => {
                console.error("Error fetching templates:", error);
            });
    }, []);

    return (

        <div style={styles.dashboard}>
            <div>
                <h1 style={styles.heading}>Created my websites</h1>
                <div style={styles.templateGrid}>
                    {templates1.map((template) => (
                        <Link
                            key={template.name}
                            to={`/adminProduct`} // Ensure the path matches exactly as in the Routes definition
                            state={{ template }} // Passing data using state
                        >
                            <div style={styles.templateCard}>
                                <h1>{template.name}</h1>
                                <img src={template.url} alt={template.name} style={styles.image1} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>





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
                <Route path="/adminProduct" element={<AdminProducts />} />

            </Routes>




        </div>
    );
};

const styles = {
    dashboard: {
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
        backgroundColor: "gray",
    },
    image: {
        width: "100%",
        height: "auto",
    },
    image1: {
        width: "100%",
        height: "200px",
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