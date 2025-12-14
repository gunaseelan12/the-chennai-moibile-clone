import React, { useState, useEffect, useRef } from 'react';
import './socialcards.css';

// Import local assets
import iconImg from '../assets/insta/icon.png';
import cardImage1 from '../assets/insta/cards (4).png';
import cardImage2 from '../assets/insta/cards (5).png';
import cardImage3 from '../assets/insta/cards (3).png';
import cardImage4 from '../assets/insta/cards (2).png';
import cardImage5 from '../assets/insta/cards (1).png';
import heartIcon from '../assets/insta/like.png';
import messIcon from '../assets/insta/speech-bubble.png';
import shareIcon from '../assets/insta/export.png';
import saveIcon from '../assets/insta/save-instagram.png';
import instaLogo from '../assets/insta/instagram (1).png';

const SocialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  
  // Configuration for 1-by-1 scrolling with 4 visible cards
  const cardWidth = 380; // Fixed card width
  const gap = 20; // Gap between cards
  const visibleCards = 4; // Number of cards visible at once
  const totalCards = 10;
  
  // 10 Cards in single array
  const cardsData = [
    {
      id: 1,
      username: "the chennai mobile",
      likes: 123,
      caption: "iPhone 15 Pro Max",
      image: cardImage1,
      cardClass: "card-1",
      specs: ["6.7\" Super Retina", "A17 Pro Chip", "48MP Camera"]
    },
    {
      id: 2,
      username: "chennai_mobile_shop",
      likes: 256,
      caption: "Samsung S24 Ultra",
      image: cardImage2,
      cardClass: "card-2",
      specs: ["6.8\" Dynamic AMOLED", "Snapdragon 8 Gen 3", "200MP Camera"]
    },
    {
      id: 3,
      username: "tamilnadu_mobiles",
      likes: 189,
      caption: "OnePlus 12",
      image: cardImage3,
      cardClass: "card-3",
      specs: ["6.82\" LTPO AMOLED", "Snapdragon 8 Gen 3", "50MP Sony"]
    },
    {
      id: 4,
      username: "mobile_king_chennai",
      likes: 342,
      caption: "Google Pixel 8 Pro",
      image: cardImage4,
      cardClass: "card-4",
      specs: ["6.7\" Super Actua", "Tensor G3", "Triple Camera"]
    },
    {
      id: 5,
      username: "tech_gadgets_tn",
      likes: 421,
      caption: "Vivo X100 Pro",
      image: cardImage5,
      cardClass: "card-5",
      specs: ["6.78\" AMOLED", "Dimensity 9300", "ZEISS Optics"]
    },
    {
      id: 6,
      username: "smartphone_hub",
      likes: 178,
      caption: "Oppo Reno 11",
      image: cardImage2,
      cardClass: "card-6",
      specs: ["6.7\" AMOLED", "Dimensity 7050", "50MP OIS"]
    },
    {
      id: 7,
      username: "gadget_zone_chennai",
      likes: 295,
      caption: "Realme GT 5 Pro",
      image: cardImage5,
      cardClass: "card-7",
      specs: ["6.78\" AMOLED", "Snapdragon 8 Gen 3", "Sony IMX890"]
    },
    {
      id: 8,
      username: "mobile_world_tn",
      likes: 156,
      caption: "Xiaomi 14",
      image: cardImage2,
      cardClass: "card-8",
      specs: ["6.36\" LTPO", "Snapdragon 8 Gen 3", "LEICA"]
    },
    {
      id: 9,
      username: "phone_bazaar",
      likes: 378,
      caption: "Nothing Phone 2",
      image: cardImage3,
      cardClass: "card-9",
      specs: ["6.7\" LTPO AMOLED", "Snapdragon 8+ Gen 1", "Glyph Interface"]
    },
    {
      id: 10,
      username: "chennai_tech_store",
      likes: 204,
      caption: "Asus ROG Phone 7",
      image: cardImage1,
      cardClass: "card-10",
      specs: ["6.78\" AMOLED", "Snapdragon 8 Gen 2", "165Hz Refresh Rate"]
    }
  ];

  // Calculate maximum index
  const maxIndex = totalCards - visibleCards;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        moveNext();
      }, 3000); // Move every 3 seconds
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  // Update track position based on current index
  useEffect(() => {
    if (trackRef.current) {
      const translateX = -currentIndex * (cardWidth + gap);
      trackRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [currentIndex]);

  const moveNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1); // Move 1 card at a time
    } else {
      setCurrentIndex(0); // Reset to start
    }
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1); // Move 1 card back at a time
    } else {
      setCurrentIndex(maxIndex); // Go to last possible position
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Calculate progress percentage
  const progress = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  // Calculate displayed card range
  const startCard = currentIndex + 1;
  const endCard = Math.min(currentIndex + visibleCards, totalCards);

  return (
    <div className="insta-cards-container">
      {/* Carousel Container */}
      <div className="carousel-container">
        {/* Carousel Track with 10 cards */}
        <div 
          className="carousel-track" 
          ref={trackRef}
          style={{ 
            transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          {cardsData.map((card) => (
            <div key={card.id} className={`carousel-card ${card.cardClass}`}>
              {/* Header Section */}
              <div className="insta-header">
                <div className="profile-info">
                  <img 
                    src={iconImg} 
                    alt={`${card.username} Icon`} 
                    className="profile-icon"
                  />
                  <span className="profile-name">{card.username}</span>
                </div>
                
                <button className="view-profile-btn">
                  View Profile
                </button>
              </div>

              {/* Main Image */}
              <div className="post-image">
                <img 
                  src={card.image} 
                  alt={card.caption} 
                  className="main-post-img"
                />
              </div>

              {/* View More Link */}
              <div className="view-more-link">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="insta-link"
                >
                  View more on instagram
                </a>
              </div>

              {/* Action Icons Box */}
              <div className="action-box">
                <div className="left-actions">
                  <button className="action-btn">
                    <img src={heartIcon} alt="Like" className="action-icon" />
                  </button>
                  <button className="action-btn">
                    <img src={messIcon} alt="Comment" className="action-icon" />
                  </button>
                  <button className="action-btn">
                    <img src={shareIcon} alt="Share" className="action-icon" />
                  </button>
                </div>
                
                <div className="right-action">
                  <button className="save-btn">
                    <img src={saveIcon} alt="Save" className="save-icon" />
                  </button>
                </div>
              </div>

              {/* Likes Count */}
              <div className="likes-section">
                <span className="lakes-count">{card.likes} likes</span>
              </div>

              {/* Comment Input */}
              <div className="comment-section">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="comment-input"
                />
                <button className="comment-post-btn">
                  <img src={instaLogo} alt="Instagram" className="insta-post-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default SocialCard;