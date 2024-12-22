import React from 'react';
import Navbar from './Navbar';

const AboutP = () => {
  return (
    <>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#2e003e', padding: '0', marginTop: '80px' }}>
        
        <header
          style={{
            color: 'white',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: '0', fontSize: '36px' }}>Welcome to Our Construction Company</h1>
          <p>Your trusted partner for all your construction and building needs.</p>
        </header>

        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
          }}
        >
          <div style={{ flex: '1 1 40%', padding: '20px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'white' }}>Who We Are</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#ccc',
                marginBottom: '20px',
                lineHeight: '1.8',
                maxWidth: '600px',
              }}
            >
              At our construction company, we are committed to delivering high-quality, sustainable, and innovative building solutions. 
              With years of experience, we specialize in residential, commercial, and industrial construction projects. Our team of experts ensures that every project is completed on time and within budget, while adhering to the highest standards of quality and safety.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 40%',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://auramodernhome.com/cdn/shop/articles/img-1707349210324.jpg?v=1707349267"
              alt="Modern Construction"
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
          }}
        >
          <div style={{ flex: '1 1 40%', padding: '20px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'white' }}>Our Mission</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#ccc',
                marginBottom: '20px',
                lineHeight: '1.8',
                maxWidth: '600px',
              }}
            >
              Our mission is to build strong, lasting structures that improve the communities we serve. We focus on providing high-quality construction services, from project inception to completion. Our goal is to deliver projects that exceed expectations through effective collaboration, safety, and the use of advanced technology.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 40%',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1348336518/photo/family-in-front-of-their-house.jpg?s=612x612&w=0&k=20&c=nRUk4wISYgkFJ-k8l1XtcMMCLtPfhk7Mm1bobNlMxb4="
              alt="Luxury Construction"
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            backgroundColor: '#2e003e',
          }}
        >
          <div style={{ flex: '1 1 40%', padding: '20px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'white' }}>Our Values</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#ccc',
                marginBottom: '20px',
                lineHeight: '1.8',
                maxWidth: '600px',
              }}
            >
              We value quality craftsmanship, reliability, and customer satisfaction. Our dedication to excellence ensures that each project we undertake is built to last. We prioritize safety and sustainability in every aspect of our work, aiming to leave a positive impact on both our clients and the environment.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 40%',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1279995963/photo/happy-family-under-fake-roof-in-living-room.jpg?s=612x612&w=0&k=20&c=PGn5zDBLLImSAkUnIw-uAsV0Ev4E6ndfU57LA_CuoxI="
              alt="Family in New Home"
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </section>

        <footer
          style={{
            backgroundColor: '#333',
            color: '#fff',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <p>&copy; 2024 Our Construction Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default AboutP;
