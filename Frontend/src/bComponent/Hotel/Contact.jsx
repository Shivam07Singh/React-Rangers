import React from 'react';
import Navbar from './Navbar';

const ContactP = () => {
  return (
    <>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#eafaf1', margin: '0', padding: '0', marginTop: "80px" }}>

        <header
          style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '20px 0',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: '0', fontSize: '36px', letterSpacing: '1px' }}>Contact Us</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto', color: "#d7ffd9" }}>
            We're here to help and answer any question you might have. We look forward to hearing from you!
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#4caf50', letterSpacing: '1px' }}>Get in Touch</h2>
          <p
            style={{
              maxWidth: '800px',
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#555',
              marginBottom: '40px',
              lineHeight: '1.6',
            }}
          >
            If you have any questions, feel free to reach out to us. You can contact us via email, phone, or by filling out
            the form below. Our customer service team is available 24/7 to assist you with your needs.
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#4caf50', letterSpacing: '0.5px' }}>Email Us</h3>
                <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.5' }}>support@hotels.com</p>
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#4caf50', letterSpacing: '0.5px' }}>Call Us</h3>
                <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.5' }}>+1 (800) 123-4567</p>
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
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center', color: '#4caf50', letterSpacing: '0.5px' }}>Contact Form</h3>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#4caf50', fontSize: '1rem', fontWeight: 'bold' }}>Name</label>
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
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#4caf50', fontSize: '1rem', fontWeight: 'bold' }}>Email</label>
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
                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: '#4caf50', fontSize: '1rem', fontWeight: 'bold' }}>Message</label>
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
                  backgroundColor: '#66bb6a',
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
            backgroundColor: '#4caf50',
            color: '#fff',
            textAlign: 'center',
            padding: '20px',
            marginTop: '40px',
          }}
        >
          <p>&copy; 2024 Hotels. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default ContactP;
