import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AboutSelector.css';
import Separator from '../Separator';
import { useLanguage } from '../../contexts/LanguageContext';
import presentationIcon from '../../assets/images/CardImages/aboutMe.svg';
import toolsIcon from '../../assets/images/CardImages/aboutMe.svg';
import appsIcon from '../../assets/images/CardImages/aboutMe.svg';
import inventoryIcon from '../../assets/images/CardImages/aboutMe.svg';
import workspaceIcon from '../../assets/images/CardImages/aboutMe.svg';

function AboutSelector({ onNavigate }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('presentation');

  const tabs = [
    { id: 'presentation', icon: presentationIcon, labelKey: 'aboutMe.tabs.presentation' },
    { id: 'tools', icon: toolsIcon, labelKey: 'aboutMe.tabs.tools' },
    { id: 'apps', icon: appsIcon, labelKey: 'aboutMe.tabs.apps' },
    { id: 'inventory', icon: inventoryIcon, labelKey: 'aboutMe.tabs.inventory' },
    { id: 'workspace', icon: workspaceIcon, labelKey: 'aboutMe.tabs.workspace' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'presentation':
        return (
          <div className="tab-content presentation-content presentation-text">
            <h2 className="content-title">{t('aboutMe.presentation.title')}</h2>
            <div className="content-text">
              <p className='presentation-text'>
                {t('aboutMe.presentation.text1')}
              </p>
              <p className='presentation-text'>
                {t('aboutMe.presentation.text2')}
              </p>
              <p className='presentation-text'>
                {t('aboutMe.presentation.text3')}
              </p>
            </div>
          </div>
        );
      
      case 'tools':
        return (
          <div className="tools-container">
            <h2 className="content-title">{t('aboutMe.toolsSection.title')}</h2>
            
            <fieldset className="tools-section">
                <legend>{t('aboutMe.toolsSection.langs')}</legend>
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
                <legend>{t('aboutMe.toolsSection.frameworks')}</legend>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/react.png" alt="React" />
                </div>
                <div className="tool-entry">
                    <img src="/src/lib/assets/images/tools/tailwind.png" alt="Tailwind" />
                </div>
            </fieldset>

            <fieldset className="tools-section">
                <legend>{t('aboutMe.toolsSection.dbs')}</legend>
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
                <legend>{t('aboutMe.toolsSection.tools')}</legend>
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
                <legend>{t('aboutMe.toolsSection.humanLanguages')}</legend>
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
            <h2 className="content-title">{t('aboutMe.appsSection.title')}</h2>
            
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
            <h2 className="content-title">{t('aboutMe.inventorySection.title')}</h2>
            
            <div className="inventory-grid">
                <div className="inventory-item">
                    <div className="inventory-image">
                        <img src="/src/lib/assets/images/inventory/nothing_a3.webp" alt="Nothing a3" />
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
                        <img src="/src/lib/assets/images/inventory/microphone_mv7+.png" alt="MV7+" />
                    </div>
                    <span className="inventory-name">Shure MV7+</span>
                </div>
            </div>
        </div>
        );
      
      case 'workspace':
        return (
          <div className="workspace-container">
            <h2 className="content-title">{t('aboutMe.workspaceSection.title')}</h2>
            
            <div className="workspace-display">
                <div className="workspace-image">
                    <img className="crop-img" src="/src/lib/assets/images/workspace/rog_strix_g16.webp" alt="Workspace" />
                </div>
                <Separator margin={false}/>
                <div className="workspace-specs">
                    <div className="workspace-spec-item">
                        <span className="workspace-spec-label">{t('aboutMe.workspaceSection.model')} :</span>
                        <span className="workspace-spec-value">Rog Strix G16</span>
                    </div>
                    <div className="workspace-spec-item">
                        <span className="workspace-spec-label">{t('aboutMe.workspaceSection.chipset')} :</span>
                        <span className="workspace-spec-value">Intel Core i7</span>
                    </div>
                </div>
            </div>
            <div className="workspace-display">
                <div className="workspace-image">
                    <img src="/src/lib/assets/images/workspace/laptop_hp.png" alt="Alt. Workspace" />
                </div>
                <Separator margin={false}/>
                <div className="workspace-specs">
                    <div className="workspace-spec-item">
                        <span className="workspace-spec-label">{t('aboutMe.workspaceSection.model')} :</span>
                        <span className="workspace-spec-value">HP 14-BS026la</span>
                    </div>
                    <div className="workspace-spec-item">
                        <span className="workspace-spec-label">{t('aboutMe.workspaceSection.chipset')} :</span>
                        <span className="workspace-spec-value">Intel Core i5</span>
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
          title={t(tab.labelKey)}
          >
            <img src={tab.icon} alt={t(tab.labelKey)} className="tab-icon" />
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
