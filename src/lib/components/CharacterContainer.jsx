import React from 'react';
import './CharacterContainer.css';
import charImg from '../assets/images/ref_wegcara.jpg';

const CharacterContainer = () => {
  return (
    <div className="character-dialog-container">
      <div className="character-image-wrapper">
        <img src={charImg} alt="Character" className="char-img" />
      </div>
      <div className="dialog-box">
        <p className='characterName'>Alex</p>
        <p className="dialog-text">
          Bienvenido a mi espacio... espero que disfrutes el recorrido.
        </p>
      </div>
    </div>
  );
};

export default CharacterContainer;