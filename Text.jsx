import React from "react";
import "./Text.css";

function Text() {
  const fullLine = "Tamil Nadu's No.1 Mobile Retailer | 100% Genuine Products | Best Price Guaranteed | Fast Delivery!";
  
  return (
    <div className="marquee">
      <div className="speed-indicator"></div>
      
      <div className="marquee__inner">
        <p className="marquee__line">
          {fullLine}
        </p>
        <p className="marquee__line">
          {fullLine}
        </p>
        <p className="marquee__line">
          {fullLine}
        </p>
      </div>
    </div>
  );
}

export default Text;