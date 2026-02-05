import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AboutSelector.css';
import Separator from '../Separator';
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
          <div className="tab-content presentation-content presentation-text">
            <h2 className="content-title">Presentation</h2>
            <div className="content-text">
              <p className='presentation-text'>
                Jelou! I am Alex, an ecuadorean 20 year old computer
                engineer that loves playing around with tech stuff.
              </p>
              <p className='presentation-text'>
                Messing around with everything has always been something I love,
                tearing down everything in front of me, installing electronic devices, 
                or soldering components to create stuff I like.
              </p>
              <p className='presentation-text'>
                I'm kind of lazy, but I do like to work on my own interests
                I love what I'm studying.
              </p>
            </div>
          </div>
        );
      
      case 'tools':
        return (
          <div className="tools-container">
            <h2 className="content-title">Tools</h2>
            
            <fieldset className="tools-section">
                <legend>Langs</legend>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/python.webp" alt="Python" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/C.webp" alt="C" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/java.webp" alt="Java" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/javascript.webp" alt="JavaScript" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/typescript.webp" alt="TypeScript" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/bash.webp" alt="Bash" />
                </div>
            </fieldset>

            <fieldset className="tools-section">
                <legend>Libs / Frameworks</legend>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/react.png" alt="React" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/tailwind.png" alt="Tailwind" />
                </div>
            </fieldset>

            <fieldset className="tools-section">
                <legend>DBs</legend>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/mysql.webp" alt="MySQL" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/mondongodb.webp" alt="MondongoDB" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/postgres.webp" alt="Postgresql" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/sqlite.png" alt="SQLite" />
                </div>
            </fieldset>

            <fieldset className="tools-section">
                <legend>Tools</legend>
                <div className="tool-entry">
                    <img src="src/lib/assets/images/tools/git.webp" alt="Git" />
                </div>
                <div className="tool-entry">
                    <img src="src/lib/assets/images/tools/docker.webp" alt="Docker" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/arduino.png" alt="ArduinoUNO" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/apache.png" alt="Apache" />
                </div>
            </fieldset>

            <fieldset className="tools-section">
                <legend>Human Languages</legend>
                <div className="tool-entry">
                    <img src="src/lib/assets/images/tools/spain_flag.png" alt="Spanish" />
                </div>
                <div className="tool-entry">
                    <img src="src/lib/assets/images/tools/england_flag.png" alt="English" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/france_flag.png" alt="French" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/italy_flag.webp" alt="Italy" />
                </div>
            </fieldset>
        </div>
        );
      
      case 'apps':
        return (
          <div className="apps-container">
            <h2 className="content-title">Apps</h2>
            
            <div className="apps-grid">
                <div className="app-entry">
                    <div className="app-icon">
                        <img src="/src/lib/assets/images/applications/vscodium.webp" alt="VSCodium" />
                    </div>
                    <span className="app-name">VSCodium</span>
                </div>

                <div className="app-entry">
                    <div className="app-icon">
                        <img src="/src/lib/assets/images/applications/neovim.webp" alt="Neovim" />
                    </div>
                    <span className="app-name">Neovim</span>
                </div>

                <div className="app-entry">
                    <div className="app-icon">
                        <img src="/src/lib/assets/images/applications/audacious.png" alt="Audacious" />
                    </div>
                    <span className="app-name">Audacious</span>
                </div>

                <div className="app-entry">
                    <div className="app-icon">
                        <img src="/src/lib/assets/images/applications/obsidian.webp" alt="Obsidian" />
                    </div>
                    <span className="app-name">Obsidian</span>
                </div>

                <div className="app-entry">
                    <div className="app-icon">
                        <img src="/src/lib/assets/images/applications/librewolf.webp" alt="LibreWolf" />
                    </div>
                    <span className="app-name">LibreWolf</span>
                </div>
            </div>
        </div>
        );
      
      case 'inventory':
        return (
          <div className="inventory-container">
            <h2 className="content-title">Inventory</h2>
            
            <div className="inventory-grid">
                <div className="inventory-item">
                    <div className="inventory-image">
                        <img src="/src/lib/assets/images/inventory/mobile.webp" alt="Nothing a3" />
                    </div>
                    <span className="inventory-name">Nothing a3</span>
                </div>

                <div className="inventory-item">
                    <div className="inventory-image">
                        <img src="/src/lib/assets/images/inventory/camera.webp" alt="Camera" />
                    </div>
                    <span className="inventory-name">Camera</span>
                </div>

                <div className="inventory-item">
                    <div className="inventory-image">
                        <img src="/src/lib/assets/images/inventory/ipod-mini.webp" alt="iPod Mini" />
                    </div>
                    <span className="inventory-name">iPod Mini</span>
                </div>

                <div className="inventory-item">
                    <div className="inventory-image">
                        <img src="/src/lib/assets/images/inventory/mp3.webp" alt="Fiio M3K" />
                    </div>
                    <span className="inventory-name">Fiio M3K</span>
                </div>
            </div>
        </div>
        );
      
      case 'workspace':
        return (
          <div className="workspace-container">
            <h2 className="content-title">Workspace</h2>
            <div className="workspace-display">
                <div className="workspace-image">
                    <img src="/src/lib/assets/images/workspace/workstation.png" alt="Mi workspace" />
                </div>
                <Separator margin={false}/>
                <div className="workspace-specs">
                    <div className="workspace-spec-item">
                        <span className="workspace-spec-label">Model :</span>
                        <span className="workspace-spec-value">MacBook Pro</span>
                    </div>
                    <div className="workspace-spec-item">
                        <span className="workspace-spec-label">Chipset :</span>
                        <span className="workspace-spec-value">M1 (2020)</span>
                    </div>
                </div>
            </div>
            <div className="workspace-display">
                <div className="workspace-image">
                    <img src="/src/lib/assets/images/workspace/workstation.png" alt="Mi workspace" />
                </div>
                <Separator margin={false}/>
                <div className="workspace-specs">
                    <div className="workspace-spec-item">
                        <span className="workspace-spec-label">Model :</span>
                        <span className="workspace-spec-value">MacBook Pro</span>
                    </div>
                    <div className="workspace-spec-item">
                        <span className="workspace-spec-label">Chipset :</span>
                        <span className="workspace-spec-value">M1 (2020)</span>
                    </div>
                </div>
            </div>
        </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="section-content">
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

      <div className="interaction-area-about-me">
        {renderContent()}
      </div>
    </div>
  );
}

AboutSelector.propTypes = {
  onNavigate: PropTypes.func,
};

export default AboutSelector;
