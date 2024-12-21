import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ConstructionTemplate() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Building A",
      budget: 500000,
      description:
        "A modern high-rise building with state-of-the-art facilities.",
      image:
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Building B",
      budget: 1500000,
      description:
        "A sleek and durable bridge designed to withstand heavy traffic.",
      image:
        "https://images.pexels.com/photos/3312663/pexels-photo-3312663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Building C",
      budget: 750000,
      description: "A newly constructed road aimed to enhance connectivity.",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);

  const [heroImage, setHeroImage] = useState(
    "https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );
  const [title, setTitle] = useState("ConstructoHub");

  const [editProjectId, setEditProjectId] = useState(null);
  const [editedProject, setEditedProject] = useState({
    name: "",
    budget: "",
    image: "",
  });

  const [isHeroEditOpen, setIsHeroEditOpen] = useState(false);
  const [editedHero, setEditedHero] = useState({
    title: title,
    heroImage: heroImage,
  });

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  // Edit Project form handlers
  const handleEditClick = (project) => {
    setEditProjectId(project.id);
    setEditedProject({
      name: project.name,
      budget: project.budget,
      image: project.image,
    });
  };

  const handleCancelProjectEdit = () => {
    setEditProjectId(null);
    setEditedProject({
      name: "",
      budget: "",
      image: "",
    });
  };

  const handleSaveProjectEdit = () => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === editProjectId
          ? { ...project, ...editedProject }
          : project
      )
    );
    setEditProjectId(null);
  };

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Hero Section Edit handlers
  const handleHeroInputChange = (e) => {
    const { name, value } = e.target;
    setEditedHero((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveHeroEdit = () => {
    setHeroImage(editedHero.heroImage);
    setTitle(editedHero.title);
    setIsHeroEditOpen(false);
  };

  const handleCancelHeroEdit = () => {
    setIsHeroEditOpen(false);
  };

  return (
    <div className="container">
      <header
        style={{
          backgroundColor: "transparent",
          padding: "10px 0",
          fontFamily: "sans-serif",
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: 1000, // Ensure navbar is above the hero image
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 50px",
          }}
        >
          <h1 style={{ color: "black", margin: 0 }}>{title}</h1>

          <div style={{ display: "flex", gap: "30px" }}>
            <a href="#home" style={{ color: "black", textDecoration: "none" }}>
              Home
            </a>

            <a href="#about" style={{ color: "black", textDecoration: "none" }}>
              About
            </a>
            <a
              href="#contact"
              style={{ color: "black", textDecoration: "none" }}
            >
              Contact
            </a>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search"
              style={{
                padding: "10px",
                borderRadius: "20px",
                border: "none",
                width: "200px",
                outline: "none",
              }}
            />
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                borderRadius: "20px",
                border: "none",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="hero" style={{ position: "relative" }}>
          <img
            src={heroImage}
            alt="Hero Image"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              fontSize: "3rem",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            {title}
          </h1>
          <button
            onClick={() => setIsHeroEditOpen(true)}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Edit Hero
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                width: "30%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
                flex: "1 1 30%",
                backgroundColor: "#fff",
              }}
            >
              <h3>{project.name}</h3>
              <p>₹{project.budget}</p>
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
              />
              <p>{project.description}</p>
              <button
                onClick={() => handleEditClick(project)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        {/* Edit Hero Form */}
        {isHeroEditOpen && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              zIndex: 1000,
              width: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3>Edit Hero</h3>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={editedHero.title}
                onChange={handleHeroInputChange}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <label>
              Hero Image URL:
              <input
                type="text"
                name="heroImage"
                value={editedHero.heroImage}
                onChange={handleHeroInputChange}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleSaveHeroEdit}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
              <button
                onClick={handleCancelHeroEdit}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Edit Project Form */}
        {editProjectId && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              zIndex: 1000,
              width: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3>Edit Project</h3>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editedProject.name}
                onChange={handleProjectInputChange}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <label>
              Budget:
              <input
                type="number"
                name="budget"
                value={editedProject.budget}
                onChange={handleProjectInputChange}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={editedProject.image}
                onChange={handleProjectInputChange}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleSaveProjectEdit}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
              <button
                onClick={handleCancelProjectEdit}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </main>

      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <p>&copy; 2023 ConstructoHub</p>
      </footer>
    </div>
  );
}

export default ConstructionTemplate;
