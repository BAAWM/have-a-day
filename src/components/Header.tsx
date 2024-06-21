import React, { useState, useEffect } from 'react';
import '../App.css';  



interface HeaderProps {
  title: string[];
  subtitle: string;
  link: string;
  dynamicText: string[];
}

const goodTiming = 2000;
const badTiming = 200;

const Header: React.FC<HeaderProps> = ({ title, subtitle, link, dynamicText,}) => {
  const [currentText, setCurrentText] = useState(dynamicText[0]);

  useEffect(() => {
    let index = 0;
    const switchText = () => {
      index = (index + 1) % dynamicText.length;
      setCurrentText(dynamicText[index]);
    };

    const interval = setInterval(switchText, currentText === 'good' ? goodTiming : badTiming);

    return () => clearInterval(interval);
  }, [currentText, dynamicText, goodTiming, badTiming]);

  return (
    <header className="header">
      <div className="header-box">
        <a href={link}>
          <h1>
            {title[0]} <span className={currentText}>{currentText}</span> {title[1]}
          </h1>
        </a>
        <h2>{subtitle}</h2>
      </div>
    </header>
  );
};

export default Header;