import React from "react";
import "./CardsGrid.css";
import { FaArrowRight } from "react-icons/fa";

// Side Images
import side1 from "../assets/S1.png";
import side2 from "../assets/S2.png";
import side3 from "../assets/s3.png";
import side4 from "../assets/s4.png";
import side5 from "../assets/s5.png";
import side6 from "../assets/s6.png";

// Scrolling Images (20 different)
import img1 from "../assets/speeker.png";
import img2 from "../assets/WACH.png";
import img3 from "../assets/wash2.png";
import img4 from "../assets/wash3 (2).png";
import img5 from "../assets/wash3.png";
import img6 from "../assets/airbuds.png";
import img7 from "../assets/airph1.png";
import img8 from "../assets/airph2.png";
import img9 from "../assets/card6.png";
import img10 from "../assets/cards2.webp";
import img11 from "../assets/cards4.avif";
import img12 from "../assets/cards5.webp";
import img13 from "../assets/cards7.webp";
import img14 from "../assets/cards10.webp";
import img15 from "../assets/cards11.webp";
import img16 from "../assets/cards12.webp";
import img17 from "../assets/cards13.webp";
import img18 from "../assets/cards14.webp";
import img19 from "../assets/cards15.webp";
import img20 from "../assets/1738738331693.webp";

// Floating Bar Icons
import fbIcon from "../assets/facebook-app-symbol.png";
import twitterIcon from "../assets/twitter.png";
import ytIcon from "../assets/youtube.png";
import igIcon from "../assets/instagram.png";

// Contact Icons
import gmailIcon from "../assets/gmail.png";
import whatsappIcon from "../assets/social.png";

const productTitle = "Samsung Galaxy Z Fold7 5G AI Smartphone (Jetblack, 12GB, 256GB)";

const scrollingImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

const sideImages = [side1, side2, side3, side4, side5, side6];

const scrollProducts = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  image: scrollingImages[i % scrollingImages.length],
  price: `₹${(Math.floor(Math.random() * 50) + 90) * 1000}`,
  originalPrice: `₹${(Math.floor(Math.random() * 40) + 110) * 1000}`,
}));

function ChennaiWithSideCards() {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    rows.push(scrollProducts.slice(i * 7, (i + 1) * 7));
  }

  const categoryHeadings = [
    "Mobile & Tablet",
    "Home Appliances", 
    "Accessories",
    "Computers & Laptop",
    "Personal & Health Care",
    "Kitchen Appliances"
  ];

  return (
    <div className="main-with-side">
      {/* Left Side */}
      <div className="side-cards-container">
        {sideImages.map((img, index) => (
          <div className="side-card" key={index}>
            <img src={img} alt={`Side ${index + 1}`} className="side-img" />
          </div>
        ))}
      </div>

      {/* Right Side - Scrolling + Floating Bar */}
      <div className="scrolling-with-bar">
        {/* Main Floating Bar (Social + Offer) */}
        <div className="floating-bar">
          <div className="social-icons">
            <div className="icon fb"><img src={fbIcon} alt="FB" /></div>
            <div className="icon x"><img src={twitterIcon} alt="X" /></div>
            <div className="icon yt"><img src={ytIcon} alt="YT" /></div>
            <div className="icon ig"><img src={igIcon} alt="IG" /></div>
          </div>
          <div className="offer-badge">Get 20% Off</div>
        </div>

        {/* Contact Icons */}
        <div className="contact-icons">
          <div className="icon gmail">
            <img src={gmailIcon} alt="Gmail" className="contact-img" />
          </div>
          <div className="icon wa">
            <img src={whatsappIcon} alt="WhatsApp" className="contact-img" />
          </div>
        </div>

        {/* Scrolling Cards */}
        <div className="scrolling-container">
          {rows.map((row, idx) => (
            <div className="category-section" key={idx}>
              {/* Category Heading with View All Link */}
              <div className="category-heading-row">
                <h2 className="category-title">{categoryHeadings[idx]}</h2>
                <a href="#" className="view-all-link">
                  View All <FaArrowRight className="arrow-icon" />
                </a>
              </div>
              
              {/* Scrolling Cards Row */}
              <div className="scroll-row">
                <div className="scroll-track">
                  {[...row, ...row].map((item, i) => (
                    <div className="scroll-card" key={i}>
                      <div className="scroll-img-wrapper">
                        <img src={item.image} alt={`Product ${item.id}`} className="scroll-img" />
                      </div>
                      <div className="scroll-content">
                        <p className="scroll-title">{productTitle}</p>
                        <div className="scroll-price-row">
                          <span className="scroll-price">{item.price}</span>
                          <span className="scroll-original">{item.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChennaiWithSideCards;


