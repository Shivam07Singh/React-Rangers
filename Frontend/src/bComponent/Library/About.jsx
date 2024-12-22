import React from 'react';
import Navbar from './Navbar';

const AboutP = () => {
  return (
    <>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', padding: '0', marginTop: '80px' }}>
        
        <header
          style={{
            color: 'grey',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: '0', fontSize: '36px' }}>Welcome to Our Library</h1>
          <p>Your trusted partner for all your reading and educational needs.</p>
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
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Who We Are</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#555',
                marginBottom: '20px',
                lineHeight: '1.8',
                maxWidth: '600px',
              }}
            >
              At our library, we are committed to fostering a love for learning and reading. With a diverse range of books and resources, we offer something for everyone—from students and researchers to casual readers. Our mission is to support lifelong learning and intellectual growth in a welcoming environment.
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
              src="https://img.freepik.com/premium-photo/library-with-many-books-shelves-knowledge-education-learning-concept-generative-ai_159242-23146.jpg?semt=ais_hybrid"
              alt="Library with many books"
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
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#555',
                marginBottom: '20px',
                lineHeight: '1.8',
                maxWidth: '600px',
              }}
            >
              Our mission is to provide a welcoming space for reading, research, and discovery. We aim to offer easy access to a wide range of knowledge, from the latest bestsellers to academic resources. We are dedicated to helping our community grow intellectually through our extensive library services.
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
              src="https://media.istockphoto.com/id/474967306/photo/cute-boy-reading-book-in-library.jpg?s=612x612&w=0&k=20&c=8uN2XTa1rGfOwBDVWOKy8SDZo1GDobRFbVtJkk03ncA="
              alt="Boy reading a book in the library"
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
            backgroundColor: '#f5f5f5',
          }}
        >
          <div style={{ flex: '1 1 40%', padding: '20px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Values</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#555',
                marginBottom: '20px',
                lineHeight: '1.8',
                maxWidth: '600px',
              }}
            >
              We are committed to promoting access to knowledge for everyone, regardless of age or background. We believe in the power of books to inspire and educate. Our values include inclusivity, quality, and a passion for learning. We strive to make our library an accessible and helpful resource for all who seek it.
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
              src="https://img.freepik.com/premium-photo/male-indian-student-library-with-book_255667-50298.jpg"
              alt="Indian student with a book in the library"
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
          <p>&copy; 2024 Our Library. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default AboutP;
