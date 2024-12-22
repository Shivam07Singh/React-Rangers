import React from 'react';
import Navbar from './Navbar';

const AboutP = () => {
  return (
    <>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8f5', padding: '0', marginTop: '80px' }}>
        
        <header
          style={{
            color: 'grey',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: '0', fontSize: '36px' }}>Welcome to Hotels</h1>
          <p>Your trusted partner for all your hotel booking needs.</p>
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
              At Hotels, we are passionate about providing our customers with the best hotel booking experience. 
              From luxury resorts to budget-friendly stays, Hotels offers a wide selection of accommodations to suit your needs. 
              Our team is dedicated to bringing you the best travel experience by offering competitive prices, excellent customer service, and seamless booking.
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
              src="https://thumbs.dreamstime.com/b/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-photo-wallpaper-backgrounds-325040660.jpg"
              alt="Luxury Hotel Room"
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
              Our mission is simple: to offer top-notch hotel booking services at competitive prices, while providing exceptional customer service and fast, reliable booking. 
              We aim to be your go-to destination for all your accommodation needs.
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
              src="https://media.istockphoto.com/id/1068158558/photo/people-at-a-hotel-enjoying-their-vacation-checking-in-filling-a-form.jpg?s=612x612&w=0&k=20&c=I7dESXpN5Y7Hmg6HBw-4cNUc34GDgqy7v885zBCC0yM="
              alt="Hotel Check-In"
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
            backgroundColor: '#f0f8f5',
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
              We ensure that all our accommodations meet the highest quality standards, providing you with reliable and comfortable stays. 
              Our commitment to excellent customer service means that our team is always available to assist you with any questions or concerns, ensuring fast and friendly support. 
              We are also dedicated to staying on the cutting edge of hospitality, offering the newest and most innovative services available.
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
              src="https://img.freepik.com/premium-photo/two-business-people-check-hotel-reception_58466-8679.jpg"
              alt="Hotel Reception"
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
          <p>&copy; 2024 Hotels. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default AboutP;
