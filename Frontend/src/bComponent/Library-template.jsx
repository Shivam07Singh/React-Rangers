import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LibraryTemplate() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 499,
      image: "https://example.com/tokillamockingbird.jpg",
      genre: "Fiction",
      rating: 4.8,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: 399,
      image: "https://example.com/1984.jpg",
      genre: "Dystopian",
      rating: 4.6,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 299,
      image: "https://example.com/thegreatgatsby.jpg",
      genre: "Classic",
      rating: 4.4,
    },
  ]);

  const [heroImage, setHeroImage] = useState("https://example.com/libraryhero.jpg");
  const [title, setTitle] = useState("Library");
  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate();

  const handleAddToCollection = (bookId) => {
    alert(`Added book ${bookId} to collection!`);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleBookChange = (id, field, value) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === id ? { ...book, [field]: value } : book))
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
          {books.map((book) => (
            <div
              key={book.id}
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
                  value={book.title}
                  onChange={(e) => handleBookChange(book.id, "title", e.target.value)}
                  style={{ width: "100%", marginBottom: "5px" }}
                />
              ) : (
                <h3>{book.title}</h3>
              )}

              {isEditMode ? (
                <input
                  type="text"
                  value={book.author}
                  onChange={(e) => handleBookChange(book.id, "author", e.target.value)}
                  style={{ width: "100%", marginBottom: "5px" }}
                />
              ) : (
                <p>{book.author}</p>
              )}

              {isEditMode ? (
                <input
                  type="number"
                  value={book.price}
                  onChange={(e) => handleBookChange(book.id, "price", e.target.value)}
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                  }}
                />
              ) : (
                <p>₹{book.price}</p>
              )}

              {isEditMode ? (
                <input
                  type="text"
                  value={book.image}
                  onChange={(e) => handleBookChange(book.id, "image", e.target.value)}
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                  }}
                />
              ) : (
                <img
                  src={book.image}
                  alt={book.title}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              )}

              <p>{book.genre}</p>
              <p>{book.rating} stars</p>

              <button
                onClick={() => handleAddToCollection(book.id)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                Add to Collection
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
        <p>&copy; 2024 Library</p>
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

export default LibraryTemplate;

