import React, { useState } from "react";

function LibraryTemplateNewLayout() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 499,
      image: "https://c8.alamy.com/comp/C91227/to-kill-a-mockingbird-by-harper-lee-C91227.jpg",
      genre: "Fiction",
      rating: 4.8,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: 399,
      image: "https://m.media-amazon.com/images/I/71kXYs4tCvL._AC_UF1000,1000_QL80_.jpg",
      genre: "Dystopian",
      rating: 4.6,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 299,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s",
      genre: "Classic",
      rating: 4.4,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 350,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kkec4280/book/d/h/d/pride-prejudice-original-imafzra6pfewjjwb.jpeg?q=20&crop=false",
      genre: "Romance",
      rating: 4.7,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 450,
      image: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
      genre: "Fiction",
      rating: 4.5,
    },
    {
      id: 6,
      title: "Moby-Dick",
      author: "Herman Melville",
      price: 299,
      image: "https://images.penguinrandomhouse.com/cover/9780143124672",
      genre: "Adventure",
      rating: 4.3,
    },
  ]);

  const handleAddToCollection = (bookId) => {
    alert(`Book ${bookId} added to your collection!`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#343a40",
          color: "#fff",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Digital Library</h1>
        <input
          type="text"
          placeholder="Search books..."
          style={{
            marginTop: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            width: "60%",
          }}
        />
      </nav>

      {/* Categories */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Browse by Genre</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {["Fiction", "Dystopian", "Classic", "Romance", "Adventure"].map((genre) => (
            <button
              key={genre}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Book List */}
      <main style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Available Books</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                display: "flex",
                gap: "20px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "150px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>Price: ₹{book.price}</p>
                <p style={{ color: "#ff9800" }}>Rating: {book.rating} ★</p>
                <button
                  onClick={() => handleAddToCollection(book.id)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Add to Collection
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
        <p>&copy; 2024 Digital Library. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LibraryTemplateNewLayout;
