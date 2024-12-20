import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Template2() {
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState("Travel the World");
  const [heroImage, setHeroImage] = useState(
    "https://mapmygenome.in/cdn/shop/articles/How_to_Stay_Healthy_While_Traveling_-_Tips_and_Insights_for_a_Safe_Journey.webp?v=1718688910&width=3000"
  );
  const [items, setItems] = useState([
    { id: "1", content: "Home" },
    { id: "2", content: "Destinations" },
    { id: "3", content: "Travel Tips" },
    { id: "4", content: "About Us" },
    { id: "5", content: "Contact" },
  ]);

  const [stories, setStories] = useState([
    {
      id: "1",
      title: "Exploring the Alps",
      image:
        "https://www.ultimatekilimanjaro.com/wp-content/uploads/2023/12/alpsmountains01.jpg",
      description:
        "The Alps offer a haven for outdoor enthusiasts. Hike through lush meadows, conquer challenging mountain peaks, or simply relax and enjoy the fresh mountain air. In winter, world-class ski resorts provide thrilling slopes for all levels.",
    },
    {
      id: "2",
      title: "Discovering Bali",
      image:
        "https://www.travelandleisure.com/thmb/KE0vV7K8Ngvc_7j-_FGx_jCUdCM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg",
      description:
        "Bali, the 'Island of the Gods,' is renowned for its stunning beaches, vibrant culture, and spiritual retreats. Explore ancient temples, rice paddies, and lush rainforests. Indulge in delicious Indonesian cuisine and experience the island's warm hospitality.",
    },
    {
      id: "3",
      title: "Exploring Tokyo",
      image:
        "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
      description:
        "Tokyo, a dynamic metropolis, offers a unique blend of ancient traditions and modern marvels. Explore bustling markets, visit iconic landmarks like the Tokyo Tower and the Imperial Palace, and immerse yourself in the vibrant nightlife and culinary scene.",
    },
  ]);

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    const updatedItems = Array.from(items);
    const [removed] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, removed);
    setItems(updatedItems);
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate back to the dashboard
  };

  const handleStoryChange = (index, field, value) => {
    const updatedStories = [...stories];
    updatedStories[index][field] = value;
    setStories(updatedStories);
  };

  return (
    <div className="container">
      <header
        style={{
          background: "linear-gradient(to right, black, blue)",
          padding: "10px 0",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            fontFamily: "sans-serif",
            flexWrap: "wrap",
          }}
        >
          <h1 style={{ color: "white", margin: 0 }}>Travel Stories</h1>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: 0,
              padding: 0,
              flexWrap: "wrap",
            }}
          >
            {items.map((item, index) => (
              <li style={{ marginRight: "20px" }} key={item.id}>
                {isEditMode ? (
                  <input
                    type="text"
                    value={item.content}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].content = e.target.value;
                      setItems(newItems);
                    }}
                    style={{
                      color: "#fff",
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "1rem",
                      padding: "5px",
                    }}
                  />
                ) : (
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    {item.content}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <div
          className="hero"
          style={{
            position: "relative",
            marginTop: "5px",
          }}
        >
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
              style={{ width: "100%", objectFit: "cover" }}
            />
          )}

          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              zIndex: 1,
              fontFamily: "sans-serif",
              fontSize: "3rem",
            }}
            contentEditable={isEditMode}
            onInput={(e) => setTitle(e.target.innerText)}
          >
            {title}
          </h1>
        </div>

        <div
          className="story-container"
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {stories.map((story, index) => (
            <div
              className="story"
              key={story.id}
              style={{
                flex: "1 1 30%",
                margin: "10px",
                boxSizing: "border-box",
              }}
            >
              {isEditMode ? (
                <>
                  <input
                    type="text"
                    value={story.title}
                    onChange={(e) =>
                      handleStoryChange(index, "title", e.target.value)
                    }
                    style={{
                      width: "100%",
                      marginBottom: "10px",
                      fontSize: "1rem",
                      padding: "5px",
                    }}
                  />
                  <input
                    type="text"
                    value={story.image}
                    onChange={(e) =>
                      handleStoryChange(index, "image", e.target.value)
                    }
                    style={{
                      width: "100%",
                      marginBottom: "10px",
                      fontSize: "1rem",
                      padding: "5px",
                    }}
                  />
                  <textarea
                    value={story.description}
                    onChange={(e) =>
                      handleStoryChange(index, "description", e.target.value)
                    }
                    style={{
                      width: "100%",
                      fontSize: "1rem",
                      padding: "5px",
                      height: "80px",
                    }}
                  />
                </>
              ) : (
                <>
                  <img
                    src={story.image}
                    alt={story.title}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      marginBottom: "10px",
                      borderRadius: "8px",
                    }}
                  />
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </>
              )}
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
          fontFamily: "sans-serif",
        }}
      >
        <p>&copy; 2023 Travel Website</p>
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
        onClick={() => setIsEditMode(!isEditMode)}
        style={{
          backgroundColor: isEditMode ? "#28a745" : "#ffc107",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        {isEditMode ? "Save Changes" : "Edit Template"}
      </button>
    </div>
  );
}

export default Template2;
