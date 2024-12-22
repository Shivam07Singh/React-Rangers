import React from 'react';
import Navbar from './Navbar';

const ContactP = () => {
  return (
    <>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: '0', padding: '0', marginTop: "80px" }}>

        <header
          style={{
            backgroundColor: '#616161',
            color: '#fff',
            padding: '20px 0',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: '0', fontSize: '36px', letterSpacing: '1px' }}>Contact Our Library</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto', color: "#e0e0e0" }}>
            We're here to assist with all your library-related queries. We look forward to hearing from you!
          </p>
        </header>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 20px',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#616161', letterSpacing: '1px' }}>Get in Touch</h2>
          <p
            style={{
              maxWidth: '800px',
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#333',
              marginBottom: '40px',
              lineHeight: '1.6',
            }}
          >
            If you have any questions regarding library services, book availability, or membership, feel free to reach out. Our team is here to assist you with all your reading needs.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1000px',
              gap: '40px',
            }}
          >
            <div
              style={{
                flex: '1 1 300px',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#616161', letterSpacing: '0.5px' }}>Email Us</h3>
                <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.5' }}>librarysupport@library.com</p>
              </div>

              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#616161', letterSpacing: '0.5px' }}>Call Us</h3>
                <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.5' }}>+1 (800) 555-1234</p>
              </div>
            </div>

            <form
              style={{
                flex: '2 1 600px',
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center', color: '#616161', letterSpacing: '0.5px' }}>Contact Form</h3>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#616161', fontSize: '1rem', fontWeight: 'bold' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    fontSize: '1rem',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#616161', fontSize: '1rem', fontWeight: 'bold' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    fontSize: '1rem',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: '#616161', fontSize: '1rem', fontWeight: 'bold' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    fontSize: '1rem',
                  }}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#9e9e9e',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer
          style={{
            backgroundColor: '#616161',
            color: '#fff',
            textAlign: 'center',
            padding: '20px',
            marginTop: '40px',
          }}
        >
          <p>&copy; 2024 Library. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default ContactP;
