import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Template1() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bluetooth Speaker",
      price: 199,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MW443?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1716251410589",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 499,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097",
    },
    {
      id: 3,
      name: "Smartwatch",
      price: 299,
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw66fe4c98/images/Titan/Catalog/90188AP06_1.jpg?sw=800&sh=800",
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: 149,
      image: "https://www.garmin.com.sg/m/sg/g/products/intosports/vivosmart-5.jpg",
    },
    {
      id: 5,
      name: "Portable Charger",
      price: 49,
      image: "https://m.media-amazon.com/images/I/614OfiBkyZL.jpg",
    },
    {
      id: 6,
      name: "Power Bank",
      price: 39,
      image: "https://images.philips.com/is/image/philipsconsumer/506144bc684c46e3a62fb0ce00a6d411?$pnglarge$&wid=960",
    },
    {
      id: 7,
      name: "Noise Cancelling Headphones",
      price: 249,
      image: "https://m.media-amazon.com/images/I/51EXj4BRQaL.jpg",
    },
    {
      id: 8,
      name: "4K Smart TV",
      price: 599,
      image: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/43ut80406la_atr_eail_c/gallery/uhd-43ut80-gallery-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg",
    },
    {
      id: 9,
      name: "Digital Camera",
      price: 399,
      image: "https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU=",
    },
    {
      id: 10,
      name: "Drone",
      price: 799,
      image: "https://m.media-amazon.com/images/I/61OgU7rf79L.jpg",
    },
  ]);

  const [heroImage, setHeroImage] = useState(
    "https://zebronics.com/cdn/shop/collections/zeb-Wireless-Headphone-banner.jpg?v=1688118018&width=2600"
  );
  const [title, setTitle] = useState("BuyZone");
  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    alert(`Added product ${productId} to cart!`);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "white", width: "100%", padding: "0", margin: "0", fontFamily: "sans-serif" }}>
      <header style={{ position: "absolute", top: "0", left: "0", width: "100%", zIndex: "1000" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px 20px",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ color: "white", margin: 0 }}>{title}</h1>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
                marginLeft: "20px",
              }}
            >
              <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
              </li>
              <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
                <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
              </li>
              <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
                <a href="/products" style={{ color: "white", textDecoration: "none" }}>Products</a>
              </li>
              <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
                <a href="/cart" style={{ color: "white", textDecoration: "none" }}>Cart</a>
              </li>
            </ul>
          </div>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: "150px",
              padding: "5px",
              borderRadius: "5px",
              border: "0",
            }}
          />
        </nav>
      </header>

      <main>
        <div className="hero" style={{ position: "relative" }}>
          {isEditMode ? (
            <input
              type="text"
              value={heroImage}
              onChange={(e) => setHeroImage(e.target.value)}
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "5px",
                fontSize: "1rem",
              }}
            />
          ) : (
            <img src={heroImage} alt="Hero Image" style={{ width: "100%", marginTop: "5px", height: "400px" }} />
          )}
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
            contentEditable={isEditMode}
            onInput={(e) => setTitle(e.target.innerText)}
          >
            {title}
          </h1>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
          padding: "10px"
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}>
              {isEditMode ? (
                <>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => {
                      const updatedProducts = products.map((p) =>
                        p.id === product.id ? { ...p, name: e.target.value } : p
                      );
                      setProducts(updatedProducts);
                    }}
                    style={{
                      marginBottom: "10px",
                      padding: "5px",
                      width: "100%"
                    }}
                  />
                  <input
                    type="text"
                    value={product.price}
                    onChange={(e) => {
                      const updatedProducts = products.map((p) =>
                        p.id === product.id ? { ...p, price: e.target.value } : p
                      );
                      setProducts(updatedProducts);
                    }}
                    style={{
                      marginBottom: "10px",
                      padding: "5px",
                      width: "100%"
                    }}
                  />
                  <input
                    type="text"
                    value={product.image}
                    onChange={(e) => {
                      const updatedProducts = products.map((p) =>
                        p.id === product.id ? { ...p, image: e.target.value } : p
                      );
                      setProducts(updatedProducts);
                    }}
                    style={{
                      marginBottom: "10px",
                      padding: "5px",
                      width: "100%"
                    }}
                  />
                </>
              ) : (
                <>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "contain",
                      borderRadius: "5px"
                    }}
                  />
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%"
                  }}>
                    <button onClick={() => handleAddToCart(product.id)} style={{
                      backgroundColor: "#007bff",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer"
                    }}>
                      Add to Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div style={{
          textAlign: "center",
          marginTop: "20px"
        }}>
          
        </div>
      </main>

      <footer style={{
        backgroundColor: "rgba(248, 249, 250, 0.7)",
        padding: "10px 20px",
        textAlign: "center",
        marginTop: "20px"
      }}>
        <p style={{ color: "#555" }}>&copy; 2024 BuyZone. All rights reserved.</p>
      </footer>

      <div style={{
        textAlign: "center",
        marginTop: "20px"
      }}>
        <button onClick={handleBackClick} style={{
          backgroundColor: "#f0f0f0",
          color: "#007bff",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}>
          Back to Dashboard
        </button>
        <button onClick={() => setIsEditMode(!isEditMode)} style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            margin:"10px"
          }}>
            {isEditMode ? "Save Changes" : "Edit"}
          </button>
      </div>
    </div>
  );
}

export default Template1;
