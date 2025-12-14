import React, { useEffect, useRef } from 'react';
import './AnimatedRibbon.css';

import repan1 from '../assets/repan (1).webp';
import repan2 from '../assets/repan (2).webp';
import repan3 from '../assets/repan (3).webp';
import repan4 from '../assets/repan (4).webp';
import repan5 from '../assets/repan (5).webp';
import repan6 from '../assets/repan (6).webp';
import repan7 from '../assets/repan (7).webp';

const AnimatedRibbon = () => {
  const fullText = "Big Discounts on Smartphones | Latest Launches Available | Shop Online at The Chennai Mobiles!    ";
  const repeatedCount = 10; // Pothum seamless + pause ku
  const duplicatedText = fullText.repeat(repeatedCount);

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let currentPos = 0;
    const speed = 1; // Smooth & visible speed (adjust panni paaru: 0.8 to 1.5 best)
    const pauseDuration = 2000; // 2 seconds pause
    let isPaused = false;
    let pauseTimer = null;

    // One unit width = full repeated text oda 1 cycle width
    const unitWidth = marquee.scrollWidth / repeatedCount;

    const animate = () => {
      if (!isPaused) {
        currentPos -= speed;

        // Seamless loop: oru unit full ah pona apram reset
        if (currentPos <= -unitWidth) {
          currentPos += unitWidth;
        }

        // Pause condition: current position exact ah oru cycle oda start ku vantha
        const distanceFromStart = Math.abs(currentPos % unitWidth);
        if (distanceFromStart < 2 || distanceFromStart > unitWidth - 2) {
          // Snap to exact 0 position for clean pause
          currentPos = Math.round(currentPos / unitWidth) * unitWidth;
          isPaused = true;
          pauseTimer = setTimeout(() => {
            isPaused = false;
          }, pauseDuration);
        }

        marquee.style.transform = `translateX(${currentPos}px)`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, []);

  const brands = [
    repan1, repan2, repan3, repan4, repan5, repan6, repan7
  ];
  const scrollBrands = [...brands, ...brands];

  return (
    <div className="animatedRibbon">
      {/* Top Yellow Ribbon - Text with Pause */}
      <div className="marquee1">
        <div className="marquee__inner1" ref={marqueeRef}>
          <h2 className="marquee__line1">{duplicatedText}</h2>
        </div>
      </div>

      {/* Bottom Gray Ribbon - Logos */}
      <div className="marquee2">
        <div className="brand-scroll">
          {scrollBrands.map((src, i) => (
            <img key={i} src={src} alt="Brand logo" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedRibbon;