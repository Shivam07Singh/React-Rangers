import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Template1() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bluetooth Speaker",
      price: 199,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MW443?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1716251410589",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 499,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097",
    },
    {
      id: 3,
      name: "Smartwatch",
      price: 299,
      image:
        "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw66fe4c98/images/Titan/Catalog/90188AP06_1.jpg?sw=800&sh=800",
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: 149,
      image:
        "https://www.garmin.com.sg/m/sg/g/products/intosports/vivosmart-5.jpg",
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
      image:
        "https://images.philips.com/is/image/philipsconsumer/506144bc684c46e3a62fb0ce00a6d411?$pnglarge$&wid=960",
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
      image:
        "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/43ut80406la_atr_eail_c/gallery/uhd-43ut80-gallery-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg",
    },
    {
      id: 9,
      name: "Digital Camera",
      price: 399,
      image:
        "https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU=",
    },
    {
      id: 10,
      name: "Drone",
      price: 799,
      image: "https://m.media-amazon.com/images/I/61OgU7rf79L.jpg",
    },
  ]);

  const [heroImage, setHeroImage] = useState(
    "https://cdn.prod.website-files.com/66f937b4438ff4d8d9069565/67052b0318b46b32b67a0b71_Play_with_the_lighting_and_create_a_reflection_effect_to_add_depth_to_the_electronic_product_images_de3fd26df0.jpeg"
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

  const handleProductChange = (id, field, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  return (
    <div className="container">
      <header
        style={{
          backgroundImage:
            "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)",
          padding: "10px 0",
          fontFamily: "sans-serif",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
          }}
        >
          {isEditMode ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          ) : (
            <h1 style={{ color: "white", margin: 0 }}>{title}</h1>
          )}

          <div>
            <input
              type="text"
              placeholder="Search"
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                marginLeft: "5px",
                fontFamily: "sans-serif",
              }}
            >
              Search
            </button>
          </div>
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
            <img
              src={heroImage}
              alt="Hero Image"
              style={{ width: "100%", marginTop: "5px" }}
            />
          )}
          <h1
            style={{
              position: "absolute",
              top: "40%",
              left: "70%",
              transform: "translateX(-50%)",
              color: "white",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "2.5rem",
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                width: "30%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
                flex: "1 1 30%",
              }}
            >
              {isEditMode ? (
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    handleProductChange(product.id, "name", e.target.value)
                  }
                  style={{ width: "100%", marginBottom: "5px" }}
                />
              ) : (
                <h3>{product.name}</h3>
              )}

              {isEditMode ? (
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    handleProductChange(product.id, "price", e.target.value)
                  }
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                  }}
                />
              ) : (
                <p>₹{product.price}</p>
              )}

              {isEditMode ? (
                <input
                  type="text"
                  value={product.image}
                  onChange={(e) =>
                    handleProductChange(product.id, "image", e.target.value)
                  }
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                  }}
                />
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              )}

              <button
                onClick={() => handleAddToCart(product.id)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <p>&copy; 2023 BuyZone</p>
      </footer>

      <button
        onClick={handleBackClick}
        style={{
          backgroundColor: "#f0f0f0",
          color: "#007bff",
          padding: "5px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          margin: "20px",
        }}
      >
        Back to Dashboard
      </button>

      <button
        onClick={() => setIsEditMode((prevMode) => !prevMode)}
        style={{
          backgroundColor: "#f0f0f0",
          color: "#007bff",
          padding: "5px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          margin: "20px",
        }}
      >
        {isEditMode ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default Template1;
