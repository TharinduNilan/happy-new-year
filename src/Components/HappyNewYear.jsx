import React, { useState, useEffect } from 'react';
import './HappyNewYear.css';

const Firework = ({ index }) => {
  return (
    <div className={`firework firework-${index}`}>
      <div className="explosion"></div>
    </div>
  );
};

const HappyNewYear = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); // Show text after 2 seconds (when fireworks reach the top)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fireworks-container">
      {[1, 2, 3, 4, 5].map((index) => (
        <Firework key={index} index={index} />
      ))}
      {showText && (
        <div className="new-year-text">
          <h1>Happy New Year</h1>
          <h2>2025</h2>
        </div>
      )}
    </div>
  );
};

export default HappyNewYear;