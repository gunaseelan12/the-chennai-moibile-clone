import React from 'react';
import './BestPicks.css';

// Main images for left card (big image only)
import card1 from '../assets/bp/bp2 (4).png';     // 1st product main
import card2 from '../assets/bp/bp2 (1).png';     // 2nd
import card3 from '../assets/bestpicks (3).png';   // 3rd
import card4 from '../assets/bestpicks (4).png';   // 4th
import card5 from '../assets/bestpicks (5).png';   // 5th
import card6 from '../assets/bestpicks (6).png';   // 6th
import card7 from '../assets/bestpicks (7).png';   // 7th
import card8 from '../assets/bestpicks (8).png';   // 8th
import card9 from '../assets/bestpicks (9).png';   // 9th
import card10 from '../assets/bp/bp10 (1).png';    // 10th main (example, adjust if needed)

// Extra slideshow images (right card slideshow-ku)
import slide1_1 from '../assets/bp/bp2 (4).png';
import slide1_2 from '../assets/bp/bp2 (5).png';

import slide2_1 from '../assets/bp/bp2 (1).png';
import slide2_2 from '../assets/bp/bp2 (2).png';
import slide2_3 from '../assets/bp/bp2 (3).png';

import slide3_1 from '../assets/bestpicks (3).png';

import slide4_1 from '../assets/bp/bp4 (1).png';
import slide4_2 from '../assets/bp/bp4 (2).png';
import slide4_3 from '../assets/bestpicks (4).png';

import slide5_1 from '../assets/bestpicks (5).png';
import slide5_2 from '../assets/bp/bp5 - Copy.png';
import slide5_3 from '../assets/bp/bp5 (1).png';
import slide5_4 from '../assets/bp/bp5 (2).png';
import slide5_5 from '../assets/bp/bp5 (3).png';

import slide6_1 from '../assets/bestpicks (6).png';
import slide6_2 from '../assets/bp/bp6 (1).png';
import slide6_3 from '../assets/bp/bp6 (2).png';
import slide6_4 from '../assets/bp/bp6 (3).png';

import slide7_1 from '../assets/bp/bp7 (1).png';
import slide7_2 from '../assets/bp/bp7 (2).png';
import slide7_3 from '../assets/bestpicks (7).png';

import slide8_1 from '../assets/bestpicks (8).png';
import slide8_2 from '../assets/bp/bp8.png';

import slide9_1 from '../assets/bestpicks (9).png';
import slide9_2 from '../assets/bp/bp10 (7).png';
import slide9_3 from '../assets/bp/bp10 (6).png';
import slide9_4 from '../assets/bp/bp10 (4).png';

import slide10_1 from '../assets/bp/bp10 (1).png';
import slide10_2 from '../assets/bp/bp10 (2).png';
import slide10_3 from '../assets/bp/bp10 (3).png';

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="detail-image-slideshow">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`View ${index + 1}`}
          className="slideshow-image"
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

const BestPicks = () => {
  const products = [
    {
      id: 1,
      mainImage: card1,
      slideshowImages: [slide1_1, slide1_2], // bp2 (4), bp2 (5)
      title: 'laptop qwiqby ihbwidb8oqf ihbquhwf',
      price: '₹7,390',
      oldPrice: '₹8,885',
      discount: '17%'
    },
    {
      id: 2,
      mainImage: card2,
      slideshowImages: [slide2_1, slide2_2, slide2_3], // bp2 (1),(2),(3)
      title: 'mixer dwupry32 bfoq2 vq7f32foqf',
      price: '₹34,900',
      oldPrice: '₹44,900',
      discount: '22%'
    },
    {
      id: 3,
      mainImage: card3,
      slideshowImages: [slide3_1], // only one image
      title: 'bajaj caldia br32gbod3trb7t2  3r vef',
      price: '₹3,490',
      oldPrice: '₹4,990',
      discount: '30%'
    },
    {
      id: 4,
      mainImage: card4,
      slideshowImages: [slide4_1, slide4_2, slide4_3],
      title: 'ipad i32f ufbv0732 ouvwevf7t',
      price: '₹45,990',
      oldPrice: '₹72,990',
      discount: '37%'
    },
    {
      id: 5,
      mainImage: card5,
      slideshowImages: [slide5_1, slide5_2, slide5_3, slide5_4, slide5_5],
      title: 'Apple iphone ojbyr uvrv2rt7 dgqf',
      price: '₹58,990',
      oldPrice: '₹78,990',
      discount: '25%'
    },
    {
      id: 6,
      mainImage: card6,
      slideshowImages: [slide6_1, slide6_2, slide6_3, slide6_4],
      title: 'Apple iphone idb2o2 byyyww ouoqu rou3qe', // nee correct title kuduthuko
      price: '₹60000',
      oldPrice: '₹70000',
      discount: '6%'
    },
    {
      id: 7,
      mainImage: card7,
      slideshowImages: [slide7_1, slide7_2, slide7_3],
      title: 'Another Product Title 7 hbefo0e ouqvo7ffg',
      price: '₹20000',
      oldPrice: '₹18000',
      discount: '%'
    },
    {
      id: 8,
      mainImage: card8,
      slideshowImages: [slide8_1, slide8_2],
      title: 'Another Product Title 8 qowbq uqwvgqohthut',
      price: '₹50000',
      oldPrice: '₹7000',
      discount: '%'
    },
    {
      id: 9,
      mainImage: card9,
      slideshowImages: [slide9_1, slide9_2, slide9_3, slide9_4],
      title: 'ASUS Vivobook 15 Intel Core i5 12th Ge',
      price: '₹70000',
      oldPrice: '₹70000',
      discount: '%'
    },
    {
      id: 10,
      mainImage: card10,
      slideshowImages: [slide10_1, slide10_2, slide10_3],
      title: 'ASUS Vivobook 15 Intel Core i5 12th Gen',
      price: '₹10000',
      oldPrice: '₹200000',
      discount: '%'
    }
  ];

  const duplicatedProducts = [...products, ...products]; // infinite scroll effect

  return (
    <section className="best-picks-section">
      <h2 className="best-picks-title">BEST PICKS</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {duplicatedProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="dual-card-group">
              {/* Left: Big Image Only */}
              <div className="image-only-card">
                <img src={product.mainImage} alt={product.title} className="big-image" loading="lazy" />
              </div>

              {/* Right: Slideshow + Details */}
              <div className="detail-card">
                <div className="detail-image-wrapper">
                  <ImageSlideshow images={product.slideshowImages} />
                </div>
                <div className="detail-content">
                  <h3 className="detail-title">{product.title}</h3>
                  <div className="price-info">
  {/* First row: Current price only (full width) */}
  <div className="current-price-row">
    <span className="current-price">{product.price}</span>
  </div>
  
  {/* Second row: Percentage (LEFT) and Old price (RIGHT) */}
  <div className="old-percentage-row">
    <span className="percentage-left">{product.discount}</span>
    <span className="old-price-right">{product.oldPrice}</span>
  </div>
  
</div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPicks;