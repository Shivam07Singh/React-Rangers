import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HotelBookingTemplate() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Sunrise Hotel",
      price: 2999,
      image: "https://example.com/sunrise-hotel.jpg",
      location: "Beachside",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Mountain Retreat",
      price: 3999,
      image: "https://example.com/mountain-retreat.jpg",
      location: "Mountain",
      rating: 4.7,
    },
    {
      id: 3,
      name: "City Inn",
      price: 1999,
      image: "https://example.com/city-inn.jpg",
      location: "Downtown",
      rating: 4.2,
    },
  ]);

  const [heroImage, setHeroImage] = useState("https://example.com/hero-image.jpg");
  const [title, setTitle] = useState("Hotel Booking");
  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate();

  const handleBookNow = (hotelId) => {
    alert(`Booked hotel ${hotelId}!`);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleHotelChange = (id, field, value) => {
    setHotels((prevHotels) =>
      prevHotels.map((hotel) => (hotel.id === id ? { ...hotel, [field]: value } : hotel))
    );
  };

  return (
    <div className="container">
      <header
        style={{
          backgroundImage: "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)",
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
            <img src={heroImage} alt="Hero Image" style={{ width: "100%", marginTop: "5px" }} />
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
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
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
                  value={hotel.name}
                  onChange={(e) => handleHotelChange(hotel.id, "name", e.target.value)}
                  style={{ width: "100%", marginBottom: "5px" }}
                />
              ) : (
                <h3>{hotel.name}</h3>
              )}

              {isEditMode ? (
                <input
                  type="number"
                  value={hotel.price}
                  onChange={(e) => handleHotelChange(hotel.id, "price", e.target.value)}
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                  }}
                />
              ) : (
                <p>₹{hotel.price}</p>
              )}

              {isEditMode ? (
                <input
                  type="text"
                  value={hotel.image}
                  onChange={(e) => handleHotelChange(hotel.id, "image", e.target.value)}
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                  }}
                />
              ) : (
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              )}

              <p>{hotel.location}</p>
              <p>{hotel.rating} stars</p>

              <button
                onClick={() => handleBookNow(hotel.id)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                Book Now
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
        <p>&copy; 2024 Hotel Booking</p>
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

export default HotelBookingTemplate;
