import React from 'react'
import Header from './Header'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <Header/>
      <section style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: '4.1rem'}}>
        <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
            <img style={{width: "100%", height: "100%"}} 
            src={"https://www.yola.com/ws/media-library/697fe700aa2842fc8d51716487ba1af3/daria-pimkina-rtg1epz2wti-unsplash-2-1.webp"} />
        </div>
        <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px"}}>
        <p style={{fontSize: "50px"}}>We enable anyone to build their own websites. Easily.</p>
            <p style={{fontSize: "20px"}}>
            With Yola, business owners and sellers create their online presence while saving time and money.
            </p>
        </div>
        
      </section>
      <section style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
      <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",  padding: "40px" }}>
            <p style={{fontSize: "50px"}}>About us</p>
            <p style={{fontSize: "20px"}}>
            We believe the website building process should be quick and stress-free. This is why we build Yola — an all-in-one platform that helps you establish a professional-looking online presence.
            Being a cost-effective solution, Yola is so easy to use that people with zero experience can create a robust website in a matter of hours. And, our platform is fully compatible with mobile devices
            </p>
            </div>
            <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
            <img style={{width: "100%", height: "100%"}} 
            src={"https://www.yola.com/ws/media-library/8a5272eb121f4592b40152368c0a9df9/jud-mackrill-of_m3hmsoaa-unsplash-2.webp"} />
        
        </div>

        </section>
      <section style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
        <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <img style={{width: "100%", height: "100%"}} 
            src={"https://www.yola.com/ws/media-library/fbaf5863d7a9488ba9932b086e3b99a9/istock-1165313662-1.webp"} />
        </div>
        <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px" }}>
            <p style={{fontSize: "50px"}}>Our Philosophy</p>
            <p style={{fontSize: "20px"}}>
            You don’t have to be tech-savvy or a design pro to create an awesome website.
             With these Web Builder features, you can make a professional-looking site in a blink of an eye:
             Free customizable templates
             Design automation
             Ready-to-use blocks
            </p>
        </div>
        
      </section>
      <section style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",  }}>
        
        <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px" }}>
            <p style={{fontSize: "50px"}}>Our Vision</p>
            <p style={{fontSize: "20px"}}>
            To help any business owner achieve everything they aspire to online.
            </p>
        </div>
        <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
            <img style={{width: "100%", height: "100%"}} 
            src={"https://www.yola.com/ws/media-library/f17171155468416785cb8d6c0aede2f4/istock-1284106261-1.webp"} />
        </div>
       </section>
       
       <section style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <img style={{width: "100%", height: "100%"}} 
            src={"https://www.yola.com/ws/media-library/bcbfdb974a19471cb3b8bd32f6b6c17d/istock-1270821597.webp"} />
        </div>
        <div style={{ width: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px" }}>
            <p style={{fontSize: "50px"}}>For Agencies and White-Label Partners</p>
            <p style={{fontSize: "20px"}}>
            Empower your SMB customers to craft their own agency-quality websites quickly and from any device — no technical knowledge necessary.
            </p>
        </div>
        
      </section>

      <Footer/>
    </>
  )
}

export default About
