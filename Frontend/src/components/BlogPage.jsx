import React from "react";
import Header from './Header'
import Footer from './Footer'

const BlogPage = () => {
    const cardStyle = {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
        overflow: "hidden",
        margin: "10px",
    };

    const imageStyle = {
        width: "100%",
        height: "180px",
        objectFit: "cover",
    };

    const contentStyle = {
        padding: "15px",
    };

    const headingStyle = {
        fontSize: "18px",
        margin: "0 0 10px",
        color: "#333",
    };

    const metaStyle = {
        fontSize: "14px",
        color: "#ff0066",
        marginBottom: "10px",
    };

    const paragraphStyle = {
        fontSize: "14px",
        lineHeight: "1.5",
        color: "#555",
        marginBottom: "15px",
    };

    const buttonStyle = {
        display: "inline-block",
        padding: "8px 15px",
        background: "#007BFF",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px",
        fontSize: "14px",
        transition: "background 0.3s",
    };

    const containerStyle = {
        width: "90%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
    };

    const posts = [
        {
            title: "The secret to converting website visitors customers",
            date: "2024-12-21",
            author: "John Doe",
            description: "With millions of businesses competing online, converting website visitors into loyal customers is more important than ever. Small business owners invest significant time and effort driving traffic to their websites, but traffic alone doesn’t pay the bills – it’s conversions that count. So, how do you turn browsers into buyers",
            image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXclYKaYoBBeYKwHIaif0omHbh7z1R6C2BoUMFqJQiYCoQOeuG7Xgq2TMy29UMSwu76wI7F0B1LZJR_5PKi1pMaLVdNN924_JQGNvRZX5ipMeMiBxGp4xiNXgRBU5fAVdTcVbZg9?key=XihTpjF9mDaIRW_dUapj-jcV",
        },
        {
            title: "Make 2025 your year online success with Web Builder",
            date: "2024-12-20",
            author: "Jane Smith",
            description: "As 2025 approaches, many small and medium-sized businesses (SMBs) are setting resolutions for growth and success in the coming year. One resolution that should top your list is building a professional, user-friendly website that enhances your online presence and attracts customers. With over 1 billion websites on the internet.",
            image: "https://blogcontent.yola.com/uploads/2024/12/image-for-blog-post-2.jpg",
        },
        {
            title: "Updates in Sitebuilder to elevate your website creation",
            date: "2024-12-19",
            author: "Alice Brown",
            description: "At Web Builder, we’re committed to empowering you with tools that make website creation efficient, intuitive, and impactful. Our latest updates not only add value to premium users but also enhance functionality for everyone, helping you create standout websites effortlessly. Let’s dive into the details of what’s new!",
            image: "https://blogcontent.yola.com/uploads/2024/12/image-6.png",
        },
        {
            title: "5 Ways AI is revolutionizing website design development",
            date: "2024-12-18",
            author: "Bob Green",
            description: "Creating a professional website has long been a daunting task for small and medium-sized businesses (SMBs), often involving steep learning curves, high costs, and endless back-and-forth between designers and developers. But the game has changed. Artificial Intelligence (AI) is transforming website design and development.",
            image: "https://blogcontent.yola.com/uploads/2024/12/image-for-blog-post.jpg",
        },
        {
            title: "Key updates in Yola’s online store features",
            date: "2024-12-17",
            author: "Charlie White",
            description: "As e-commerce continues to evolve, Yola’s Online Store is introducing new tools and features to empower small and medium-sized businesses. These updates are designed to enhance flexibility, transparency, and usability, making it easier for merchants to optimize their stores and meet customer needs. Here’s a detailed look.",
            image: "https://blogcontent.yola.com/uploads/2024/11/nick-morrison-FHnnjk1Yj7Y-unsplash-1.jpg",
        },
        {
            title: "Upcoming changes to your Online Store subscription",
            date: "2024-12-16",
            author: "Diana Black",
            description: "Thank you for subscribing to Yola’s premium Online Store service. We’re updating the price of our Online Store add-on plans to continue investing in our products and features, ensuring you receive the best experience possible.Which Products Are Affected?The price increase will be limited to our Online Store plans.",
            image: "https://blogcontent.yola.com/uploads/2024/12/image-1.jpg",
        },
    ];
    
    return (
        
        <div>
            <Header/>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>My Blog</h1>
            <div style={containerStyle}>
                {posts.map((post, index) => (
                    <div key={index} style={cardStyle}>
                        <img src={post.image} alt={post.title} style={imageStyle} />
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>{post.title}</h2>
                            <div style={metaStyle}>Date: {post.date} | Author: {post.author}</div>
                            <p style={paragraphStyle}>{post.description}</p>
                            <a href="#" style={buttonStyle}>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
        
    );
};

export default BlogPage;
