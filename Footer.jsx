import React from 'react';
import './footer.css';

// Import assets
import logo from '../assets/tcm-logo.webp';
import twitterIcon from '../assets/twitter.png';
import youtubeIcon from '../assets/youtube.png';
import facebookIcon from '../assets/facebook-app-symbol.png';
import instagramIcon from '../assets/insta/instagram (1).png';
import applePlay from '../assets/appleplay.png';
import emiPartners from '../assets/Screenshot 2025-12-13 220449.png';
import paymentOptions from '../assets/Screenshot 2025-12-13 220804.png';

// Import mobile navigation images
import homeIcon from '../assets/mobile/home.png';
import menuIcon from '../assets/mobile/menu.png';
import openIcon from '../assets/mobile/open.png';
import userIcon from '../assets/mobile/user (1).png';
import dealIcon from '../assets/mobile/deal.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav">
        <div className="mobile-nav-content">
          <div className="nav-item">
            <div className="nav-icon">
              <img src={homeIcon} alt="Home" className="nav-icon-img" />
            </div>
            <div className="nav-text">Home</div>
          </div>
          <div className="nav-item">
            <div className="nav-icon">
              <img src={menuIcon} alt="Categories" className="nav-icon-img" />
            </div>
            <div className="nav-text">Categories</div>
          </div>
          <div className="nav-item">
            <div className="nav-icon">
              <img src={openIcon} alt="Best Seller" className="nav-icon-img" />
            </div>
            <div className="nav-text">Best Seller</div>
          </div>
          <div className="nav-item">
            <div className="nav-icon">
              {/* For Daily deals, using the same open icon or you can add another one */}
              <img src={dealIcon} alt="Daily Deals" className="nav-icon-img" />
            </div>
            <div className="nav-text">Daily deals</div>
          </div>
          <div className="nav-item">
            <div className="nav-icon">
              <img src={userIcon} alt="Profile" className="nav-icon-img" />
            </div>
            <div className="nav-text">Profile</div>
          </div>
        </div>
      </div>

      {/* Top Section - About Us */}
      <div className="footer-top-section">
        <div className="footer-about">
          <h3 className="section-title">About Us</h3>
          <p className="about-text">
            The Chennai Mobiles, founded in 2003 by the dynamic and visionary 
            Managing Director, Mr. A.M. Samsu Ali, has been a formidable player 
            in the mobile retail industry for two decades. Based in Coimbatore, 
            Tamil Nadu, our journey has been marked by innovation, expansion, 
            and a relentless commitment to customer satisfaction. Here, we present 
            the story of The Chennai Mobiles in a thousand words, highlighting 
            our vision, mission, year-wise achievements, and a reflection on 
            our journey.
          </p>
        </div>
      </div>

      {/* Middle Section - Main Content */}
      <div className="footer-middle-section">
        <div className="footer-column">
          <div className="logo-section">
            <img src={logo} alt="The Chennai Mobiles" className="footer-logo" />
          </div>
        </div>

        <div className="footer-column">
          <h4 className="column-title">Collection</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Mobile & Tablet</a></li>
            <li><a href="#" className="footer-link">Home Appliances</a></li>
            <li><a href="#" className="footer-link">Computer & Laptops</a></li>
            <li><a href="#" className="footer-link">Personal & Health Care</a></li>
            <li><a href="#" className="footer-link">Kitchen Appliances</a></li>
            <li><a href="#" className="footer-link">Accessories</a></li>
            <li><a href="#" className="footer-link">HOME THEATERS</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="column-title">Opportunities</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Careers</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="column-title">Contact</h4>
          <div className="contact-info">
            <p className="contact-item">9944412345</p>
            <p className="contact-item">info@thechennaimobiles.com</p>
            <p className="contact-address">
              No.666, Sakthi Road, GP Bus Stop Gandhipuram,<br />
              Coimbatore, Tamil Nadu - 641 044
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="social-icons1">
            <a href="#" className="social-icon-link">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="#" className="social-icon-link">
              <img src={youtubeIcon} alt="YouTube" className="social-icon" />
            </a>
            <a href="#" className="social-icon-link">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="#" className="social-icon-link">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - App, EMI Partners, Payment Options */}
      <div className="footer-bottom-section">
        {/* App Store */}
        <div className="app-store-section">
          <img src={applePlay} alt="Get on App Store" className="app-store-image" />
        </div>

        {/* EMI Partners */}
        <div className="emi-partners-section">
          <h4 className="section-subtitle">Our EMI Partners</h4>
          <img src={emiPartners} alt="EMI Partners" className="emi-partners-image" />
        </div>

        {/* Payment Options */}
        <div className="payment-options-section">
          <h4 className="section-subtitle">Payment Options</h4>
          <img src={paymentOptions} alt="Payment Options" className="payment-options-image" />
        </div>
      </div>

      {/* Footer Bottom - Policies & Copyright */}
      <div className="footer-bottom-row">
        <div className="footer-policies">
          <a href="#" className="policy-link">Finance Policy</a>
          <span className="separator">|</span>
          <a href="#" className="policy-link">Return Policy</a>
          <span className="separator">|</span>
          <a href="#" className="policy-link">Delivery Policy</a>
          <span className="separator">|</span>
          <a href="#" className="policy-link">Terms and Conditions</a>
          <span className="separator">|</span>
          <a href="#" className="policy-link">About Us</a>
          <span className="separator">|</span>
          <a href="#" className="policy-link">Blogs</a>
        </div>
        
        <div className="copyright-section">
          <p className="copyright-text">
            © 2025 The Chennai Mobiles. All Rights Reserved.<br />
            Designed by Alphaprito Technologies Private Limited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;