
import "./HesStalye.css"

import TypingIntro from './TypingIntro';
export default function Home(){
    
    return(
        <div className="gd" >
           
            <div className="myphoto2">
                <img src="/P8.png" alt="mohammed" className="myphoto"></img>
                
            </div>
            <div className="HedHome">
                <TypingIntro />
    
              
                <div className="buttonCont">
                    <button className="buttonContact">contact</button>
                    <div style={{margin:"10px 30px",gap:"10px",display:"flex"}}>
                    <img src="/facebook.png" alt="facebook" className="img" />
                    <img src="/insta.png" alt="insta" className="img"/>
                    <img src="/Linked in.png" alt="linkedin" className="img" />
                    <img src="/watsapp.png" alt="whatsapp" className="img" />
                    <img src="/discord.png" alt="discord" className="img" />

                    </div>
                    
                </div>
            </div>
           
            
            
        </div>
    ) 
}
//import React, { useState, useEffect } from 'react';

/*const TypingIntro = () => {
  const fullText = "Hi I am Mohammed Tariq\nWeb Designer";
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // سرعة الكتابة
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <div className="typing-container">
      <pre className="typing-text">{displayedText}<span className="cursor">|</span></pre>
    </div>
  );
};
  <div className="typing-container">
                <h1>Hi I am<span style={{color:"#2448D8"}}>Mohammed Tariq</span></h1>
                <h1> Web  Designer</h1>
                </div>
*/
