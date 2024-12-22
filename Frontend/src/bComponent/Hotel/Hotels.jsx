import React, { useState } from "react";
import Navbar from "./Navbar";

function Hotels() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Ocean Breeze Resort",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&auto=format&fit=crop&q=60",
      location: "Beachfront",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Mountain Serenity",
      price: 3499,
      image:
        "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=600&h=400&auto=format&fit=crop&q=60",
      location: "Mountain",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Urban Comfort Suites",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&h=400&auto=format&fit=crop&q=60",
      location: "City Center",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Lakeside Paradise",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
      location: "Lakeside",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Desert Mirage Retreat",
      price: 2799,
      image:
        "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Desert",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Riverside Escape",
      price: 3199,
      image:
        "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Riverside",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Royal Palace Hotel",
      price: 4999,
      image:
        "https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww",
      location: "City Center",
      rating: 4.9,
    },
    {
      id: 8,
      name: "Forest View Lodge",
      price: 2599,
      image:
        "https://images.unsplash.com/photo-1725345653429-8b3926cc229c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8fDB8fHww",
      location: "Forest",
      rating: 4.2,
    },
  ]);

  const [header, setHeader] = useState({
    title: "Explore Your Next Stay",
    subtitle: "Discover luxury, comfort, and style at unbeatable prices.",
    backgroundImage:
      "url('https://media.istockphoto.com/id/2108539552/photo/half-opened-door-of-hotel-room-with-blurred-luxury-bedroom-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=LQqbvqJDqgNO9xWyOmkSoE4jMgmdVEbVz6_zo2cIjqs=')",
  });

  const [editingHotel, setEditingHotel] = useState(null);
  const [editingHeader, setEditingHeader] = useState(false);

  const handleEditHeader = () => {
    setEditingHeader(true);
  };

  const handleUpdateHeader = (e) => {
    e.preventDefault();
    setHeader({
      title: e.target.title.value,
      subtitle: e.target.subtitle.value,
      backgroundImage: e.target.backgroundImage.value,
    });
    setEditingHeader(false);
  };

  const handleEditHotel = (hotel) => {
    setEditingHotel(hotel);
  };

  const handleUpdateHotel = (e) => {
    e.preventDefault();
    setHotels((prevHotels) =>
      prevHotels.map((hotel) => (hotel.id === editingHotel.id ? editingHotel : hotel))
    );
    setEditingHotel(null);
  };

  const handleBookNow = (hotelId) => {
    alert(`Hotel ${hotelId} booked successfully!`);
  };

  return (
    <>
      <Navbar></Navbar>
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", marginTop: "80px" }}>
        {/* Hero Section */}
        <header
          style={{
            backgroundImage: header.backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "50px 20px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {editingHeader ? (
            <form onSubmit={handleUpdateHeader} style={{ maxWidth: "600px", margin: "0 auto" }}>
              <label style={{ color: "#fff" }}>
                Title:
                <input
                  type="text"
                  name="title"
                  defaultValue={header.title}
                  style={{
                    display: "block",
                    margin: "10px 0",
                    padding: "10px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>
              <label style={{ color: "#fff" }}>
                Subtitle:
                <input
                  type="text"
                  name="subtitle"
                  defaultValue={header.subtitle}
                  style={{
                    display: "block",
                    margin: "10px 0",
                    padding: "10px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>
              <label style={{ color: "#fff" }}>
                Background Image URL:
                <input
                  type="text"
                  name="backgroundImage"
                  defaultValue={header.backgroundImage}
                  style={{
                    display: "block",
                    margin: "10px 0",
                    padding: "10px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>
              <button
                type="submit"
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  width: "auto",
                  marginTop: "10px",
                }}
              >
                Update Header
              </button>
            </form>
          ) : (
            <>
              <h1 style={{ fontSize: "3rem", margin: 0 }}>{header.title}</h1>
              <p style={{ fontSize: "1.2rem", margin: "10px 0 20px", color: "#fff" }}>
                {header.subtitle}
              </p>

              <button
                onClick={handleEditHeader}
                style={{
                  backgroundColor: "#ffc107",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                Edit Header
              </button>
            </>
          )}
        </header>

        {/* Hotels Grid */}
        <main style={{ padding: "20px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Available Hotels</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "10px" }}>
                  <h3>{hotel.name}</h3>
                  <p style={{ color: "#555" }}>{hotel.location}</p>
                  <p style={{ color: "#888" }}>${hotel.price}</p>
                  <p style={{ color: "#f39c12" }}>Rating: {hotel.rating}</p>
                  <button
                    onClick={() => handleBookNow(hotel.id)}
                    style={{
                      backgroundColor: "#007bff",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      marginTop: "10px",
                      width: "auto",
                    }}
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => handleEditHotel(hotel)}
                    style={{
                      backgroundColor: "#ffc107",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      marginTop: "10px",
                      width: "auto",
                    }}
                  >
                    Edit Hotel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Edit Hotel Form */}
        {editingHotel && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              width: "300px",
            }}
          >
            <h3>Edit Hotel</h3>
            <form onSubmit={handleUpdateHotel}>
              <label>
                Name:
                <input
                  type="text"
                  value={editingHotel.name}
                  onChange={(e) => setEditingHotel({ ...editingHotel, name: e.target.value })}
                  style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  value={editingHotel.price}
                  onChange={(e) =>
                    setEditingHotel({ ...editingHotel, price: parseFloat(e.target.value) })
                  }
                  style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  value={editingHotel.image}
                  onChange={(e) => setEditingHotel({ ...editingHotel, image: e.target.value })}
                  style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  value={editingHotel.location}
                  onChange={(e) => setEditingHotel({ ...editingHotel, location: e.target.value })}
                  style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
                />
              </label>
              <label>
                Rating:
                <input
                  type="number"
                  step="0.1"
                  value={editingHotel.rating}
                  onChange={(e) =>
                    setEditingHotel({ ...editingHotel, rating: parseFloat(e.target.value) })
                  }
                  style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
                />
              </label>
              <button
                type="submit"
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  width: "auto",
                }}
              >
                Update Hotel
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Hotels;
