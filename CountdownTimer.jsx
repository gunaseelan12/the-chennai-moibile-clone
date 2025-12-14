import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';
import ddBg from '../assets/dd-bg.webp';

const CountdownTimer = () => {
  // Target date: New Year Sale example
  const targetDate = new Date('2025-12-31T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        // Total hours
        let hours = Math.floor(difference / (1000 * 60 * 60));
        // Remaining hours after removing full days (0-23)
        hours = hours % 24;

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      } else {
        // Timer expired
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-banner">
      <div className="countdown-overlay"></div>
      <div className="countdown-content">
        <p className="offer-text">Get up to 30% off on Gadget</p>
        <div className="timer">
  <span className="time-number">{timeLeft.hours}</span>
  <span className="colon">:</span>
  <span className="time-number">{timeLeft.minutes}</span>
  <span className="colon">:</span>
  <span className="time-number">{timeLeft.seconds}</span>
</div>
<div className="labels">
  <span>Hours</span>
  <span>Minutes</span>
  <span>Seconds</span>
</div>
        <button className="discover-btn">
          Discover Sales <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;