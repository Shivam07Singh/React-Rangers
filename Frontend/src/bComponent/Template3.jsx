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
      name: "Bridge B",
      budget: 1500000,
      description:
        "A sleek and durable bridge designed to withstand heavy traffic.",
      image:
        "https://images.pexels.com/photos/3312663/pexels-photo-3312663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Road C",
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
  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleProjectChange = (id, field, value) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  return (
    <div className="container">
      <header
        style={{
          backgroundImage:
            "linear-gradient(90deg, #333333 0%, #666666 35%, #999999 100%)",
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
              left: "50%",
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
                transition: "all 0.3s ease-in-out",
              }}
            >
              {isEditMode ? (
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) =>
                    handleProjectChange(project.id, "name", e.target.value)
                  }
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                    fontSize: "1rem",
                  }}
                />
              ) : (
                <h3>{project.name}</h3>
              )}

              {isEditMode ? (
                <input
                  type="number"
                  value={project.budget}
                  onChange={(e) =>
                    handleProjectChange(project.id, "budget", e.target.value)
                  }
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                  }}
                />
              ) : (
                <p>₹{project.budget}</p>
              )}

              {isEditMode ? (
                <input
                  type="text"
                  value={project.image}
                  onChange={(e) =>
                    handleProjectChange(project.id, "image", e.target.value)
                  }
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    padding: "5px",
                  }}
                />
              ) : (
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
              )}
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <section style={{ padding: "40px 10px", backgroundColor: "#f4f4f4" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "10px",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontSize: "1rem",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            ConstructoHub is a leading platform for modern construction
            projects, showcasing high-quality projects and innovative designs in
            the fields of buildings, roads, and bridges. We bring together
            top-tier projects that redefine the future of construction.
          </p>
        </section>

        {/* Contact Section */}
        <section style={{ padding: "40px 10px", backgroundColor: "#e9e9e9" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "10px",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontSize: "1rem",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Have any questions or inquiries? Get in touch with us at
            info@constructohub.com. We're here to assist you with all your
            construction-related needs.
          </p>
        </section>
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

export default ConstructionTemplate;
