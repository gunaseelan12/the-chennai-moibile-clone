// Updated Bestseller.jsx
import React from "react";
import "./Bestseller.css";
import { FaArrowRight } from "react-icons/fa";

// Import local images
import card1 from "../assets/card1.webp";
import card6 from "../assets/card6.png";
import card5 from "../assets/cards5.webp";
import card7 from "../assets/cards7.webp";
import card10 from "../assets/cards10.webp";
import card11 from "../assets/cards11.webp";
import card12 from "../assets/cards12.webp";
import card13 from "../assets/cards13.webp";
import card14 from "../assets/cards14.webp";
import card15 from "../assets/cards15.webp";

import g1_1 from "../assets/g1 (1).webp";
import g1_2 from "../assets/g1 (2).webp";
import g1_3 from "../assets/g1 (3).webp";
import g1_4 from "../assets/g1 (4).webp";
import g1_5 from "../assets/g1 (5).webp";
import g1_6 from "../assets/g1 (6).webp";
import g1_7 from "../assets/g1 (7).webp";
import g1_8 from "../assets/g1 (8).webp";

const Bestseller = () => {
  const bestsellers = [
    // ROW 1 - 6 cards
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      description: "Apple A17 Pro | 48MP Camera | Titanium Design",
      price: "₹1,49,900",
      originalPrice: "₹1,59,900",
      discount: "6%",
      discountAmount: "₹10,000",
      image: card1,
      rating: 4.8,
      reviews: 1245,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      description: "Snapdragon 8 Gen 3 | 200MP Camera ",
      price: "₹1,34,999",
      originalPrice: "₹1,44,999",
      discount: "7%",
      discountAmount: "₹10,000",
      image: card6,
      rating: 4.7,
      reviews: 987,
    },
    {
      id: 3,
      name: "OnePlus 12",
      description: "Snapdragon 8 Gen 3 | 120Hz Display",
      price: "₹69,999",
      originalPrice: "₹74,999",
      discount: "7% ",
      discountAmount: "₹5,000",
      image: card5,
      rating: 4.6,
      reviews: 856,
    },
    {
      id: 4,
      name: "Google Pixel 8 Pro",
      description: "Tensor G3 | AI Features | Best Camera Phone",
      price: "₹1,06,999",
      originalPrice: "₹1,14,999",
      discount: "7% ",
      discountAmount: "₹8,000",
      image: card7,
      rating: 4.5,
      reviews: 721,
    },
    {
      id: 5,
      name: "Vivo X100 Pro",
      description: "MediaTek 9300 | Zeiss Optics | 120W FlashCharge",
      price: "₹89,999",
      originalPrice: "₹94,999",
      discount: "5% ",
      discountAmount: "₹5,000",
      image: card10,
      rating: 4.4,
      reviews: 543,
    },
    {
      id: 6,
      name: "Xiaomi 14 Pro",
      description: "Snapdragon 8 Gen 3 | Leica Camera | HyperOS",
      price: "₹79,999",
      originalPrice: "₹84,999",
      discount: "6% ",
      discountAmount: "₹5,000",
      image: card11,
      rating: 4.3,
      reviews: 432,
    },
    // ROW 2 - Next 6 cards
    {
      id: 7,
      name: "Nothing Phone 2",
      description: "Glyph Interface | Snapdragon 8+ Gen 1",
      price: "₹44,999",
      originalPrice: "₹49,999",
      discount: "10% ",
      discountAmount: "₹5,000",
      image: card12,
      rating: 4.2,
      reviews: 389,
    },
    {
      id: 8,
      name: "Motorola Edge 40",
      description: "MediaTek Dimensity 8020 | 144Hz Display",
      price: "₹29,999",
      originalPrice: "₹34,999",
      discount: "14% ",
      discountAmount: "₹5,000",
      image: card13,
      rating: 4.1,
      reviews: 267,
    },
    {
      id: 9,
      name: "Realme GT 5",
      description: "Snapdragon 8 Gen 2 | 240W Charging",
      price: "₹39,999",
      originalPrice: "₹44,999",
      discount: "11% ",
      discountAmount: "₹5,000",
      image: card14,
      rating: 4.0,
      reviews: 198,
    },
    {
      id: 10,
      name: "Oppo Find X6 Pro",
      description: "Hasselblad Camera | 100W SuperVOOC",
      price: "₹84,999",
      originalPrice: "₹89,999",
      discount: "6% ",
      discountAmount: "₹5,000",
      image: card15,
      rating: 4.3,
      reviews: 321,
    },
    {
      id: 11,
      name: "Asus ROG Phone 7",
      description: "Gaming Phone | Snapdragon 8 Gen 2 ",
      price: "₹74,999",
      originalPrice: "₹79,999",
      discount: "6% ",
      discountAmount: "₹5,000",
      image: g1_1,
      rating: 4.4,
      reviews: 456,
    },
    {
      id: 12,
      name: "iQOO 11",
      description: "V2 Chip | 120W FlashCharge | E6 Display",
      price: "₹54,999",
      originalPrice: "₹59,999",
      discount: "8% ",
      discountAmount: "₹5,000",
      image: g1_2,
      rating: 4.2,
      reviews: 287,
    },
    // ROW 3 - Next 6 cards
    {
      id: 13,
      name: "Tecno Phantom V",
      description: "MediaTek 9200 | 120W Charging",
      price: "₹34,999",
      originalPrice: "₹39,999",
      discount: "12% ",
      discountAmount: "₹5,000",
      image: g1_3,
      rating: 4.0,
      reviews: 154,
    },
    {
      id: 14,
      name: "Infinix Zero 30",
      description: "MediaTek 8020 | 68W Charging",
      price: "₹24,999",
      originalPrice: "₹29,999",
      discount: "17% ",
      discountAmount: "₹5,000",
      image: g1_4,
      rating: 3.9,
      reviews: 132,
    },
    {
      id: 15,
      name: "Poco F5 Pro",
      description: "Snapdragon 8+ Gen 1 | 67W Turbo Charging",
      price: "₹31,999",
      originalPrice: "₹36,999",
      discount: "14% ",
      discountAmount: "₹5,000",
      image: g1_5,
      rating: 4.1,
      reviews: 189,
    },
    {
      id: 16,
      name: "Honor Magic 5",
      description: "Snapdragon 8 Gen 2 | Triple Camera",
      price: "₹59,999",
      originalPrice: "₹64,999",
      discount: "8% ",
      discountAmount: "₹5,000",
      image: g1_6,
      rating: 4.2,
      reviews: 223,
    },
    {
      id: 17,
      name: "Nokia X30",
      description: "Pure Android | 3 Years Updates",
      price: "₹39,999",
      originalPrice: "₹44,999",
      discount: "11% ",
      discountAmount: "₹5,000",
      image: g1_7,
      rating: 4.0,
      reviews: 167,
    },
    {
      id: 18,
      name: "Sony Xperia 1 V",
      description: "4K Display | Pro Camera Controls",
      price: "₹1,29,999",
      originalPrice: "₹1,39,999",
      discount: "7% ",
      discountAmount: "₹10,000",
      image: g1_8,
      rating: 4.6,
      reviews: 198,
    },
    // ROW 4 - 2 cards only
    {
      id: 19,
      name: "Apple iPhone 14",
      description: "A15 Bionic | iOS 17 | Dual Camera",
      price: "₹64,999",
      originalPrice: "₹69,999",
      discount: "7% ",
      discountAmount: "₹5,000",
      image: card1, // Reuse or add new
      rating: 4.5,
      reviews: 876,
    },
    {
      id: 20,
      name: "Samsung Galaxy S23",
      description: "Snapdragon 8 Gen 2 | Compact Flagship",
      price: "₹74,999",
      originalPrice: "₹79,999",
      discount: "6% ",
      discountAmount: "₹5,000",
      image: card6, // Reuse or add new
      rating: 4.4,
      reviews: 654,
    },
  ];

  // Split into rows
  const row1 = bestsellers.slice(0, 6);
  const row2 = bestsellers.slice(6, 12);
  const row3 = bestsellers.slice(12, 18);
  const row4 = bestsellers.slice(18, 20);

  return (
    <div className="bestseller-container">
      <div className="bestseller-header">
        <h2 className="bestseller-title">BEST SELLER</h2>
      </div>
      <div className="link-right">
        <a link rel="stylesheet" className= "link" href="#"> view all <FaArrowRight className="arrow-icon" />
        </a>
      </div>

      {/* ROW 1 - 6 cards */}
      <div className="bestseller-row">
        {row1.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* ROW 2 - 6 cards */}
      <div className="bestseller-row">
        {row2.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* ROW 3 - 6 cards */}
      <div className="bestseller-row">
        {row3.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* ROW 4 - 2 cards */}
      <div className="bestseller-row row-4">
        {row4.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Separate Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="bestseller-card">
      {/* Discount Badge - Top Right Square */}
      <div className="discount-square">
        <span className="discount-percent">{product.discount}</span>
      </div>

      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Details */}
      <div className="product-details">
        <p className="product-description">{product.description}</p>

        {/* Price Section - New Layout */}
        <div className="price-section">
          <div className="price-left">
            <div className="originalPrice"> {product.price}</div>
          </div>
          <div className="price-right">
            <div className="originalPrice"> {product.originalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
