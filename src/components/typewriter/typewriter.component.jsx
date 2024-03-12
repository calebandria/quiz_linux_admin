import React, { useState, useEffect } from 'react';
import './typewriter.styles.scss'

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forward, setForward] = useState(true); // Track animation direction

  useEffect(() => {
    const timer = setTimeout(() => {
      if (forward) {
        if (currentIndex < text.length) {
          setDisplayText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          // Animation completed forward, now reverse
          setForward(false);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(prevText => prevText.slice(0, -1));
          setCurrentIndex(prevIndex => prevIndex - 1);
        } else {
          // Animation completed reverse, now forward again
          setForward(true);
        }
      }
    }, 100); // Adjust typing speed here

    return () => clearTimeout(timer);
  }, [currentIndex, forward, text]);

  return (
    <div className="typewriter">
      <span>{displayText}</span>
    </div>
    
  );
};

export default Typewriter;
