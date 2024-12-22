import React, { useState } from "react";

function FreshHotelBooking() {
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
  ]);

  const handleBookNow = (hotelId) => {
    alert(`Hotel ${hotelId} booked successfully!`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa" }}>
      {/* Hero Section */}
      <header
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2108539552/photo/half-opened-door-of-hotel-room-with-blurred-luxury-bedroom-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=LQqbvqJDqgNO9xWyOmkSoE4jMgmdVEbVz6_zo2cIjqs=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 20px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>Explore Your Next Stay</h1>
        <p style={{ fontSize: "1.2rem", margin: "10px 0 20px", color:'#fff'}}>
          Discover luxury, comfort, and style at unbeatable prices.
        </p>
        <input
          type="text"
          placeholder="Search hotels..."
          style={{
            padding: "10px",
            width: "60%",
            maxWidth: "400px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
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
              <div style={{ padding: "15px" }}>
                <h3 style={{ margin: "0 0 10px" }}>{hotel.name}</h3>
                <p style={{ margin: "0 0 5px", color: "#666" }}>{hotel.location}</p>
                <p style={{ margin: "0 0 10px", fontWeight: "bold" }}>₹{hotel.price}/night</p>
                <p style={{ margin: "0 0 10px", color: "#ff9800" }}>{hotel.rating} ★</p>
                <button
                  onClick={() => handleBookNow(hotel.id)}
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#343a40",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <p>&copy; 2024 Fresh Hotel Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FreshHotelBooking;
