import React, { useState } from 'react';
import './CardContainer.css';
import AboutMe from './About Me/AboutMe';

import aboutMeIcon from '../assets/images/CardImages/aboutMe.svg';


function CardContainer() {
  const [activeView, setActiveView] = useState(null);

  const cards = [
    { id: 'about', icon: aboutMeIcon, text: 'About Me' },
    { id: 'projects', icon: aboutMeIcon, text: 'Projects' },
    { id: 'contact', icon: aboutMeIcon, text: 'Contact' },
    { id: 'discord', icon: aboutMeIcon, text: 'Discord' },
    { id: 'youtube', icon: aboutMeIcon, text: 'Youtube' },
  ];

  const handleCardClick = (cardId) => {
    setActiveView(cardId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCards = () => {
    setActiveView(null);
    // Scroll a las cards
    setTimeout(() => {
      document.querySelector('.card-container')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  // Renderizar el contenido según la card seleccionada
  const renderContent = () => {
    switch (activeView) {
      case 'about':
        return <AboutMe onBack={handleBackToCards} />;
      case 'projects':
        return (
          <div className="content-placeholder">
            <h2>Projects</h2>
            <p>Projects content coming soon...</p>
          </div>
        );
      case 'contact':
        return (
          <div className="content-placeholder">
            <h2>Contact</h2>
            <p>Contact content coming soon...</p>
          </div>
        );
      case 'discord':
        return (
          <div className="content-placeholder">
            <h2>Discord</h2>
            <p>Discord content coming soon...</p>
          </div>
        );
      case 'youtube':
        return (
          <div className="content-placeholder">
            <h2>Youtube</h2>
            <p>Youtube content coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  // Si hay una vista activa, mostrar solo ese contenido (reemplaza todo MainContent)
  if (activeView) {
    return (
      <div className="full-content-view">
        <button className="back-button" onClick={handleBackToCards}>
          <span className="back-arrow">←</span> Back to Menu
        </button>
        <div className="content-wrapper">
          {renderContent()}
        </div>
      </div>
    );
  }



  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleCardClick(card.id)}
        >
          <div className="card-icon">
            <img src={card.icon} alt={card.text} className="card-icon-img" />
          </div>
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
