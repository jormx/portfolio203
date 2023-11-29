// Menu.js
import React, { useState, useEffect } from 'react';
import './App.css';

const Menu = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setMenuVisible(false);
    } else if (!isMouseOverMenu) {
      setMenuVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMouseOverMenu, setMouseOverMenu] = useState(false);

  return (
    <div
      className={`menu ${isMenuVisible ? 'visible' : 'hidden'}`}
      onMouseEnter={() => setMouseOverMenu(true)}
      onMouseLeave={() => setMouseOverMenu(false)}
    >
      <div className="menu-item">Accueil</div>
      <div className="menu-item">À propos</div>
      <div className="menu-item">Projets</div>
      <div className="menu-item">Contact</div>
      <button className="menu-button">Bouton</button>
      <button className="menu-button">Bouton</button>
    </div>
  );
};

export default Menu;
