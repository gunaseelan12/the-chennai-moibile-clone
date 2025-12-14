// HeroSlider.jsx
import { useState, useEffect } from "react";
import "./HeroSlider.css";

// Desktop Images
import desktop1 from "../assets/1756361122542.webp";
import desktop2 from "../assets/1759733430861.webp";
import desktop3 from "../assets/1759733831952.webp";
import desktop4 from "../assets/1762516238795.webp";
import desktop5 from "../assets/1764137281489.webp";
import desktop6 from "../assets/1764327055926.webp";

const desktopSlides = [desktop1, desktop2, desktop3, desktop4, desktop5, desktop6];

// Mobile Only Images 
import mobile1 from "../assets/1757583965975.jpg";
import mobile2 from "../assets/1756361126292.jpg";
import mobile3 from "../assets/1754978661253.jpg";     
import mobile4 from "../assets/1753856324538.jpg";
import mobile5 from "../assets/1740985968178.jpg";
import mobile6 from "../assets/1737611361682.jpg";

const mobileSlides = [mobile1, mobile2, mobile3, mobile4, mobile5, mobile6];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth <= 991; // 992px mobile
  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [slides]);

  // Re-check on resize (important!)
  useEffect(() => {
    const handleResize = () => {
      window.location.reload(); // simple & effective for this case
      
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-slider">
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
          >
            <div className="image-container">
              <img src={slide} alt={`Offer ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;