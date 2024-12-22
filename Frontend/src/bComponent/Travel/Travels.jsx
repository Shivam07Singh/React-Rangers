import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Travels() {
  const navigate = useNavigate();

  // States for the page
  const [title, setTitle] = useState("Travel the World");
  const [heroImage, setHeroImage] = useState(
    "https://wallpapershome.com/images/pages/pic_h/12772.jpg"
  );
  const [items, setItems] = useState([
    { id: "1", content: "Home" },
    { id: "4", content: "About" },
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
      editing: false,
    },
    {
      id: "2",
      title: "Discovering Bali",
      image:
        "https://www.travelandleisure.com/thmb/KE0vV7K8Ngvc_7j-_FGx_jCUdCM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg",
      description:
        "Bali, the 'Island of the Gods,' is renowned for its stunning beaches, vibrant culture, and spiritual retreats. Explore ancient temples, rice paddies, and lush rainforests. Indulge in delicious Indonesian cuisine and experience the island's warm hospitality.",
      editing: false,
    },
    {
      id: "3",
      title: "Exploring Tokyo",
      image:
        "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
      description:
        "Tokyo, a dynamic metropolis, offers a unique blend of ancient traditions and modern marvels. Explore bustling markets, visit iconic landmarks like the Tokyo Tower and the Imperial Palace, and immerse yourself in the vibrant nightlife and culinary scene.",
      editing: false,
    },
  ]);

  // States for editing hero and title
  const [editingHero, setEditingHero] = useState(false);
  const [editingHeroState, setEditingHeroState] = useState({
    title: title,
    image: heroImage,
  });

  // State for editing a story
  const [editingStory, setEditingStory] = useState(null);
  const [editingStoryState, setEditingStoryState] = useState({
    title: "",
    description: "",
    image: "",
  });


  const handleEditHero = () => {
    setEditingHero(true);
  };

  const handleUpdateHero = (e) => {
    e.preventDefault();
    setTitle(editingHeroState.title);
    setHeroImage(editingHeroState.image);
    setEditingHero(false);
  };

  const handleEditStory = (id) => {
    const storyToEdit = stories.find((story) => story.id === id);
    setEditingStory(storyToEdit.id);
    setEditingStoryState({
      title: storyToEdit.title,
      description: storyToEdit.description,
      image: storyToEdit.image,
    });
  };

  const handleUpdateStory = (e) => {
    e.preventDefault();
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === editingStory
          ? {
            ...story,
            title: editingStoryState.title,
            description: editingStoryState.description,
            image: editingStoryState.image,
          }
          : story
      )
    );
    setEditingStory(null);
  };

  return (
    <div className="container">
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0)",
          padding: "10px 0",
          zIndex: 10,
        }}
      >
        <Navbar />

      </header>

      <main>
        <div
          className="hero"
          style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <img
            src={heroImage}
            alt="Hero Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              left: "20%"
            }}
          />

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
          >
            {title}
          </h1>

          {/* Edit Hero Button positioned at the bottom left */}
          <button
            onClick={handleEditHero}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              backgroundColor: "#ffc107",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Edit Hero & Title
          </button>
        </div>

        {/* Edit Hero Form Modal */}
        {editingHero && (
          <form
            onSubmit={handleUpdateHero}
            style={{
              position: "absolute",
              top: "50%",
              left: "20%",
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
                setEditingHeroState({
                  ...editingHeroState,
                  title: e.target.value,
                })
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
                setEditingHeroState({
                  ...editingHeroState,
                  image: e.target.value,
                })
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

        {/* Stories Section */}
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
          {stories.map((story) => (
            <div
              className="story"
              key={story.id}
              style={{
                flex: "1 1 30%",
                margin: "10px",
                boxSizing: "border-box",
              }}
            >
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
              {editingStory === story.id ? (
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
                  <h3>Edit Story</h3>
                  <form onSubmit={handleUpdateStory}>
                    <label>
                      Title:
                      <input
                        type="text"
                        value={editingStoryState.title}
                        onChange={(e) =>
                          setEditingStoryState({
                            ...editingStoryState,
                            title: e.target.value,
                          })
                        }
                        style={{ display: "block", margin: "10px 0", padding: "5px" }}
                      />
                    </label>
                    <label>
                      Description:
                      <textarea
                        value={editingStoryState.description}
                        onChange={(e) =>
                          setEditingStoryState({
                            ...editingStoryState,
                            description: e.target.value,
                          })
                        }
                        style={{
                          display: "block",
                          margin: "10px 0",
                          padding: "5px",
                          width: "100%",
                          height: "100px",
                        }}
                      />
                    </label>
                    <label>
                      Image URL:
                      <input
                        type="text"
                        value={editingStoryState.image}
                        onChange={(e) =>
                          setEditingStoryState({
                            ...editingStoryState,
                            image: e.target.value,
                          })
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
                      onClick={() => setEditingStory(null)}
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
              ) : (
                <>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <button
                    onClick={() => handleEditStory(story.id)}
                    style={{
                      backgroundColor: "#ffc107",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "5px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
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
    </div>
  );
}

export default Travels;
