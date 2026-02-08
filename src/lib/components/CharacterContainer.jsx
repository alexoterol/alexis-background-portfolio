import React, { useState } from 'react';
import './CharacterContainer.css';
import charImg from '../assets/images/ref_wegcara.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const CharacterContainer = () => {
  const { t } = useLanguage();
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  
  const dialogues = t('character.dialogues');
  const characterName = t('character.name');

  const handleClick = () => {
    setCurrentDialogIndex((prevIndex) => (prevIndex + 1) % dialogues.length);
  };

  return (
    <div className="character-dialog-container">
      <div className="character-image-wrapper">
        <img src={charImg} alt="Character" className="char-img" />
      </div>
      
      <div className="dialog-box" onClick={handleClick}>
        <svg 
          className="dialog-connector" 
          viewBox="0 0 32 32" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.697 24L9.303 16.003 20.697 8z" />
        </svg>

        <div className="dialog-header">
          <h3 className="dialog-name">{characterName}</h3>
          
          <svg
            className="dialog-next-arrow"
            fill="currentColor"
            width="1rem"
            height="1rem"
            viewBox="0 0 12 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m 12.000001,8 v 4 H 8 v 4 H 4 v 4 H 0 V 0 h 4 v 4 h 4 v 4 z" />
          </svg>
        </div>

        <p className="dialog-text">
          {dialogues[currentDialogIndex]}
        </p>
      </div>
    </div>
  );
};

export default CharacterContainer;