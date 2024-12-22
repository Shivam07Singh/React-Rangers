import Navbar from './Navbar';

const AboutT = () => {
  return (
    <>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', padding: '0', marginTop: '80px' }}>

        <header
          style={{
            color: '#333',
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#2c3e50',
          }}
        >
          <h1 style={{ margin: '0', fontSize: '36px',color:"white" }}>Welcome to Travel Stories</h1>
          <p>Your gateway to unforgettable travel experiences.</p>
        </header>

        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              flex: '1',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://img.freepik.com/free-photo/couple-family-traveling-together_1150-7772.jpg"
              alt="Our Team"
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div style={{ flex: '1', padding: '20px', maxWidth: '800px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Who We Are</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#555',
                marginBottom: '20px',
                lineHeight: '1.8',
                columnCount: 2,
                columnGap: '40px',
              }}
            >
              At Travel Stories, we are passionate about providing our customers with the most memorable travel experiences.
              From exotic destinations to thrilling adventures, Travel Stories offers a wide range of travel packages to
              cater to your wanderlust. Our team is dedicated to bringing you the best travel experience by offering
              competitive prices, excellent customer service, and tailored travel plans.
            </p>
          </div>
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              flex: '1',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://thumbs.dreamstime.com/b/paris-france-postcard-collage-collage-includes-major-landmarks-like-eiffel-tower-notre-dame-trocadero-champs-elysees-34048124.jpg"
              alt="Travel Mission"
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div style={{ flex: '1', padding: '20px', maxWidth: '800px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#555',
                marginBottom: '20px',
                lineHeight: '1.8',
                columnCount: 2,
                columnGap: '40px',
              }}
            >
              Our mission is simple: to inspire and enable our customers to explore the world, one journey at a time.
              We aim to be your go-to destination for all your travel needs, providing exceptional service and
              unforgettable experiences.
            </p>
          </div>
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              flex: '1',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://media.istockphoto.com/id/841490790/photo/friends-having-reached-the-top-of-a-mountain.jpg?s=170667a&w=0&k=20&c=J8BD9ecHhh3BFcPAuF9HjTJ02nwFVriKZ1QsfkMBNj0="
              alt="Travel Values"
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div style={{ flex: '1', padding: '20px', maxWidth: '800px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Values</h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#555',
                marginBottom: '20px',
                lineHeight: '1.8',
                columnCount: 2,
                columnGap: '40px',
              }}
            >
              We ensure that all our travel packages meet the highest standards, providing you with reliable and
              enriching travel experiences. Our commitment to excellent customer service means that our team is always
              available to assist you with any questions or concerns, ensuring a seamless and enjoyable journey. We are
              also dedicated to sustainability and responsible travel, promoting eco-friendly practices and supporting
              local communities.
            </p>
          </div>
        </section>

        <footer
          style={{
            backgroundColor: '#2c3e50',
            color: '#fff',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <p>&copy; 2024 Travel Stories. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default AboutT;
