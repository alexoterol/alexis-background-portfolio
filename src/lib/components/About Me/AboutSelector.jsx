import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AboutSelector.css';
import presentationIcon from '../../assets/images/CardImages/aboutMe.svg';
import toolsIcon from '../../assets/images/CardImages/aboutMe.svg';
import appsIcon from '../../assets/images/CardImages/aboutMe.svg';
import inventoryIcon from '../../assets/images/CardImages/aboutMe.svg';
import workspaceIcon from '../../assets/images/CardImages/aboutMe.svg';

function AboutSelector({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('presentation');

  const tabs = [
    { id: 'presentation', icon: presentationIcon, label: 'Presentation' },
    { id: 'tools', icon: toolsIcon, label: 'Tools' },
    { id: 'apps', icon: appsIcon, label: 'Apps' },
    { id: 'inventory', icon: inventoryIcon, label: 'Inventory' },
    { id: 'workspace', icon: workspaceIcon, label: 'Workspace' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'presentation':
        return (
          <div className="tab-content presentation-content">
            <h2 className="content-title">Presentation</h2>
            <div className="content-text">
              <p>
                Heya! I am Kimu, an spanish 19 year old female software
                engineer that loves playing around with tech stuff.
              </p>
              <p>
                Messing around with everything has always been my thing,
                tearing down the family laptop, changing the leds in my
                controller, or soldering a new jack to my mp3.
              </p>
              <p>
                I'm kind of an introvert, but I do like talking to
                people, from time to time.
              </p>
            </div>
          </div>
        );
      
      case 'tools':
        return (
          <div className="tab-content">
            <h2 className="content-title">Tools</h2>
            <div className="content-text">
              <p>Lista de herramientas que uso para desarrollo...</p>
              <ul>
                <li>Visual Studio Code</li>
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        );
      
      case 'apps':
        return (
          <div className="tab-content">
            <h2 className="content-title">Apps</h2>
            <div className="content-text">
              <p>Aplicaciones favoritas y que uso diariamente...</p>
            </div>
          </div>
        );
      
      case 'inventory':
        return (
          <div className="tab-content">
            <h2 className="content-title">Inventory</h2>
            <div className="content-text">
              <p>Hardware y equipo que tengo...</p>
            </div>
          </div>
        );
      
      case 'workspace':
        return (
          <div className="tab-content">
            <h2 className="content-title">Workspace</h2>
            <div className="content-text">
              <p>Mi espacio de trabajo y setup...</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="about-selector-container">
      <div className="tabs-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
            title={tab.label}
          >
            <img src={tab.icon} alt={tab.label} className="tab-icon" />
          </button>
        ))}
      </div>

      <div className="tab-content-container">
        {renderContent()}
      </div>
    </div>
  );
}

AboutSelector.propTypes = {
  onNavigate: PropTypes.func,
};

export default AboutSelector;
