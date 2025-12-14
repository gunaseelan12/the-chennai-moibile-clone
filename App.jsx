import { useEffect } from "react";
import "./app.css"
import Navbar from "./components/navbar";
import HeroSlider from "./components/HeroSlider";
import CardsGrid from "./components/CardsGrid";
import Text from "./components/Text";
import Bestseller from './components/Bestseller'
import AnimatedRibbon from './components/AnimatedRibbon'
import CountdownTimer from './components/CountdownTimer'
import BestPicks from './components/BestPicks'
import SocialCards from './components/SocialCards'
import Footer from './components/Footer'  // Add this import

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflowX = "hidden";
    }, 100);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <HeroSlider />
        
        {/* உன் original section */}
        <div className="content-wrapper">
          <CardsGrid />
        </div>
        <div>
          <Text />
        </div>
        <div>
          <Bestseller />
        </div>
        <div>
          <AnimatedRibbon/>
        </div>
        <div>
          <CountdownTimer />
        </div>
        <div>
          <BestPicks/>
        </div>
        <div>
          <SocialCards />
        </div>
      </main>
      
      {/* ADD FOOTER HERE */}
      <Footer />
    </div>
  );
}

export default App;