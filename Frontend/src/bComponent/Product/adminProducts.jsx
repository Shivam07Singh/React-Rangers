import React, { useState } from "react";
import Navbarp from "./Navbar";
import { useLocation } from "react-router-dom";

function AdminProducts() {

    const location = useLocation();
    const template = location.state;
    const templateData = template.template;
    const id = templateData._id
    const [products, setProducts] = useState(templateData.products);
    const [heroImage, setHeroImage] = useState(templateData.url);
    const [title, setTitle] = useState(templateData.name);

    const [editingHero, setEditingHero] = useState(false);
    const [editingHeroState, setEditingHeroState] = useState({
        title: title,
        image: heroImage,
    });

    const handleUpdateHero = (e) => {
        e.preventDefault();
        setTitle(editingHeroState.title);
        setHeroImage(editingHeroState.image);
        setEditingHero(false);
    };

    const handleAddToCart = (productId) => {
        alert(`Added product ${productId} to cart!`);
    };

    const [editingProduct, setEditingProduct] = useState(null);

    const handleEditProduct = (product) => {
        setEditingProduct(product);
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        setProducts((prevProducts) =>
            prevProducts.map((prod) =>
                prod.id === editingProduct.id ? editingProduct : prod
            )
        );
        setEditingProduct(null);
    };


    const handleUpdate = async () => {
        console.log(editingHeroState, products);

        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem("token");

            // Ensure the token exists before making the request
            if (!token) {
                alert("Token not found. Please log in again.");
                return;
            }

            // Construct the URL for updating the product
            const response = await fetch(`http://localhost:2024/website/product/${id}`, {
                method: "PUT",  // Use PUT instead of POST
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify({ editingHeroState, products }), // Send updated data
            });

            if (response.ok) {
                alert("Data successfully sent to the database!");
            } else {
                const data = await response.json();
                alert(data.msg || "Failed to send data to the database");

            }
        } catch (error) {
            console.error("Error sending data:", error);
            alert("An error occurred while sending data.");
        }
    };


    return (
        <>
            <Navbarp />
            <div style={{ backgroundColor: "white", width: "100%", padding: "0", margin: "0", fontFamily: "sans-serif", marginTop: "80px" }}>

                <main>
                    <div className="hero" style={{ position: "relative" }}>
                        <img
                            src={heroImage}
                            alt="Hero Image"
                            style={{ width: "100%", marginTop: "5px", height: "400px" }}
                        />
                        <h1
                            style={{
                                position: "absolute",
                                top: "40%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "2.5rem",
                            }}
                        >
                            {title}
                        </h1>

                        <button
                            onClick={() => setEditingHero(!editingHero)}
                            style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                backgroundColor: "#007bff",
                                color: "white",
                                margin: "20px",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Edit Hero
                        </button>
                        <button onClick={handleUpdate}>Update Product</button>

                        {editingHero && (
                            <form
                                onSubmit={handleUpdateHero}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                                    color: "white",
                                    padding: "20px",
                                    borderRadius: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Update Title"
                                    value={editingHeroState.title}
                                    onChange={(e) =>
                                        setEditingHeroState({ ...editingHeroState, title: e.target.value })
                                    }
                                    style={{
                                        padding: "10px",
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Update Hero Image URL"
                                    value={editingHeroState.image}
                                    onChange={(e) =>
                                        setEditingHeroState({ ...editingHeroState, image: e.target.value })
                                    }
                                    style={{
                                        padding: "10px",
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: "#28a745",
                                        color: "white",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Save
                                </button>
                            </form>
                        )}
                    </div>

                    <section style={{ padding: "20px" }}>
                        <h2>Our Products</h2>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                            gap: "20px",
                            justifyItems: "center",
                        }}>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        height: "450px",
                                        width: "280px",
                                        padding: "5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        textAlign: "center",
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: "100%",
                                            height: "250px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div style={{ padding: "10px", width: "100%" }}>
                                        <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
                                        <p style={{ color: "#555", marginBottom: "10px" }}>${product.price}</p>
                                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "30px" }}>
                                            <button
                                                onClick={() => handleAddToCart(product.id)}
                                                style={{
                                                    backgroundColor: "#007bff",
                                                    color: "white",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    width: "48%",
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                            <button
                                                onClick={() => handleEditProduct(product)}
                                                style={{
                                                    backgroundColor: "#ffc107",
                                                    color: "white",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    width: "48%",
                                                }}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {editingProduct && (
                        <div
                            style={{
                                width: "300px",
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: "white",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                zIndex: "1000",
                            }}
                        >
                            <h3>Edit Product</h3>
                            <form onSubmit={handleUpdateProduct}>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        value={editingProduct.name}
                                        onChange={(e) =>
                                            setEditingProduct({ ...editingProduct, name: e.target.value })
                                        }
                                        style={{ display: "block", margin: "10px 0", padding: "5px" }}
                                    />
                                </label>
                                <label>
                                    Price:
                                    <input
                                        type="number"
                                        value={editingProduct.price}
                                        onChange={(e) =>
                                            setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })
                                        }
                                        style={{ display: "block", margin: "10px 0", padding: "5px" }}
                                    />
                                </label>
                                <label>
                                    Image URL:
                                    <input
                                        type="text"
                                        value={editingProduct.image}
                                        onChange={(e) =>
                                            setEditingProduct({ ...editingProduct, image: e.target.value })
                                        }
                                        style={{ display: "block", margin: "10px 0", padding: "5px" }}
                                    />
                                </label>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: "#28a745",
                                        color: "white",
                                        padding: "10px",
                                        margin: "5px",
                                        borderRadius: "5px",
                                        border: "none",
                                        cursor: "pointer",
                                        width: "90%",
                                    }}
                                >
                                    Save Changes
                                </button>
                                <button
                                    onClick={() => setEditingProduct(null)}
                                    style={{
                                        backgroundColor: "#dc3545",
                                        color: "white",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        border: "none",
                                        cursor: "pointer",
                                        marginLeft: "5px",
                                        width: "90%",
                                    }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}

export default AdminProducts;
