import Navbar from './Navbar';

const AboutH = () => {
  return (
    <>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', padding: '0', marginTop: "80px" }}>

        <header
          style={{
            color: 'grey',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: '0', fontSize: '36px' }}>Welcome to BuyZone</h1>
          <p>Your trusted partner for all your tech needs.</p>
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
              At BuyZone, we are passionate about providing our customers with the latest and greatest tech products.
              From the newest gadgets to essential accessories, BuyZone offers a vast selection of high-quality products
              to cater to your needs. Our team is dedicated to bringing you the best shopping experience by offering
              competitive prices, excellent customer service, and fast shipping.
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
              src="https://media.istockphoto.com/id/824351914/photo/distribution-warehouse-with-trucks-of-different-capacity.jpg?s=612x612&w=0&k=20&c=-aeDD6vTkJZ9c_Sg_xFPZKpn10HNPczG8AKYPRcWvFs="
              alt="Our Warehouse"
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
              Our mission is simple: to offer top-notch, cutting-edge products at competitive prices, while providing
              exceptional customer service and fast, reliable shipping. We aim to be your go-to destination for all your
              tech needs.
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
              src="https://lgresources.com/hs-fs/hubfs/warehouse-workers-1.webp?width=1772&height=1183&name=warehouse-workers-1.webp"
              alt="Tech Products"
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
            backgroundColor: '#f9f9f9',
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
              We ensure that all our products meet the highest quality standards, providing you with reliable and
              long-lasting tech. Our commitment to excellent customer service means that our team is always available to
              assist you with any questions or concerns, ensuring fast and friendly support. We are also dedicated to
              staying on the cutting edge of technology, offering the newest and most innovative products available.
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
              src="https://st2.depositphotos.com/1071909/8604/i/450/depositphotos_86049366-stock-photo-increase-rating-evaluation-and-classification.jpg"
              alt="Innovation"
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
          <p>&copy; 2024 BuyZone. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default AboutH;
