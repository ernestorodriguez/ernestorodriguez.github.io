import React, { useState, useEffect } from 'react';
import './App.css';
import { getRandomMessage } from './messages';


const App: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState<string>('');

  useEffect(() => {
    const lang = (navigator.language || 'en').slice(0, 2);
    const randomMessage = getRandomMessage(lang);
    setCurrentMessage(randomMessage);
  }, []);

  return (
    <div className="App">
      <div className="message-container">
        <div className="icon-container">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2" fill="none"/>
            <circle cx="10" cy="10" r="5" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <p className="funny-message">"{currentMessage}"</p>
        <p className="signature">— E.R</p>
      </div>
    </div>
  );
};

export default App;
