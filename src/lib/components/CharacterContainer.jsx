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
    <div className="character-dialog-container" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="character-image-wrapper">
        <img src={charImg} alt="Character" className="char-img" />
      </div>
      <div className="dialog-box">
        <p className='characterName'>{characterName}</p>
        <p className="dialog-text">
          {dialogues[currentDialogIndex]}
        </p>
      </div>
    </div>
  );
};

export default CharacterContainer;