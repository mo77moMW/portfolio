import React, { useState, useEffect } from 'react';
import HesStalye from './HesStalye.css'

function Home() {
  const fullText = "Hi I am Mohammed Tariq\nWeb Designer";
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <div className='typing-container'>
      <pre className='texttype'>{displayedText}<span className="cursor">|</span></pre>
    </div>
  );
}

export default Home;