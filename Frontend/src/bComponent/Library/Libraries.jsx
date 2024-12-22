import React, { useState } from "react";
import Navbar from "./Navbar";

function Libraries() {
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

  const [editingBook, setEditingBook] = useState(null);
  const [editingHeader, setEditingHeader] = useState(false);
  const [editedBookDetails, setEditedBookDetails] = useState({
    title: "",
    author: "",
    price: "",
    genre: "",
    image: "",
  });

  const [headerText, setHeaderText] = useState("Digital Library");

  const handleAddToCollection = (bookId) => {
    alert(`Book ${bookId} added to your collection!`);
  };

  const handleEditBook = (book) => {
    setEditingBook(book.id);
    setEditedBookDetails({
      title: book.title,
      author: book.author,
      price: book.price,
      genre: book.genre,
      image: book.image, // Added image URL to edit
    });
  };

  const handleSaveChanges = () => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === editingBook ? { ...book, ...editedBookDetails } : book))
    );
    setEditingBook(null);
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  const handleChange = (e) => {
    setEditedBookDetails({
      ...editedBookDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditHeader = () => {
    setEditingHeader(!editingHeader);
  };

  const handleSaveHeader = () => {
    setEditingHeader(false);
  };

  return (
    <>
      <Navbar/>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          background: "linear-gradient(135deg, #f0f4f8, #e4e9f2)", // Background gradient
          minHeight: "100vh",
          marginTop:"80px"
        }}
      >
        {/* Navbar */}
        <nav
          style={{
            backgroundColor: "#343a40",
            color: "#fff",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {editingHeader ? (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <input
                type="text"
                value={headerText}
                onChange={(e) => setHeaderText(e.target.value)}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                  width: "60%",
                }}
              />
              <button
                onClick={handleSaveHeader}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "25px",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <h1 style={{ margin: 0 }}>{headerText}</h1>
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
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
              <button
                onClick={handleEditHeader}
                style={{
                  backgroundColor: "#ffc107",
                  color: "#fff",
                  border: "none",
                  borderRadius: "25px",
                  cursor: "pointer",
                  padding: "8px 16px",
                  marginTop: "10px",
                }}
              >
                Edit Header
              </button>
            </>
          )}
        </nav>

        {/* Categories */}
        <section
          style={{
            backgroundColor: "#f8f9fa",
            padding: "40px 20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Browse by Genre</h2>
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
                  padding: "12px 24px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "25px",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                {genre}
              </button>
            ))}
          </div>
        </section>

        {/* Book List */}
        <main style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Available Books</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              alignItems: "center",
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
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  transition: "all 0.3s ease",
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
                  {editingBook === book.id ? (
                    <div>
                      <input
                        type="text"
                        name="title"
                        value={editedBookDetails.title}
                        onChange={handleChange}
                        placeholder="Edit title"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginBottom: "15px",
                          borderRadius: "8px",
                          border: "1px solid #ccc",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <input
                        type="text"
                        name="author"
                        value={editedBookDetails.author}
                        onChange={handleChange}
                        placeholder="Edit author"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginBottom: "15px",
                          borderRadius: "8px",
                          border: "1px solid #ccc",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <input
                        type="number"
                        name="price"
                        value={editedBookDetails.price}
                        onChange={handleChange}
                        placeholder="Edit price"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginBottom: "15px",
                          borderRadius: "8px",
                          border: "1px solid #ccc",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <input
                        type="text"
                        name="genre"
                        value={editedBookDetails.genre}
                        onChange={handleChange}
                        placeholder="Edit genre"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginBottom: "15px",
                          borderRadius: "8px",
                          border: "1px solid #ccc",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <input
                        type="text"
                        name="image"
                        value={editedBookDetails.image}
                        onChange={handleChange}
                        placeholder="Edit image link"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginBottom: "15px",
                          borderRadius: "8px",
                          border: "1px solid #ccc",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <div style={{ display: "flex", gap: "15px" }}>
                        <button
                          onClick={handleSaveChanges}
                          style={{
                            padding: "12px 18px",
                            backgroundColor: "#28a745",
                            color: "#fff",
                            border: "none",
                            borderRadius: "25px",
                            cursor: "pointer",
                          }}
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          style={{
                            padding: "12px 18px",
                            backgroundColor: "#dc3545",
                            color: "#fff",
                            border: "none",
                            borderRadius: "25px",
                            cursor: "pointer",
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                      <p>Price: ₹{book.price}</p>
                      <p>Genre: {book.genre}</p>
                      <p>Rating: {book.rating} / 5</p>
                      <button
                        onClick={() => handleAddToCollection(book.id)}
                        style={{
                          padding: "12px 18px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          borderRadius: "25px",
                          cursor: "pointer",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        Add to Collection
                      </button>
                      <button
                        onClick={() => handleEditBook(book)}
                        style={{
                          padding: "12px 18px",
                          backgroundColor: "#ffc107",
                          color: "#fff",
                          border: "none",
                          borderRadius: "25px",
                          cursor: "pointer",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        Edit Book
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Libraries;
