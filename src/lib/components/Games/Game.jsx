import React from 'react';
import PropTypes from 'prop-types';
import './Game.css';

function Game({ name, img, tier }) {
    const getTierLabel = () => {
        return `Tier ${tier.toUpperCase()}`;
    };

    return (
        <div className={`game-item tier-${tier.toLowerCase()}`}>
            <div className="game-item__content">
                <div className="game-item__icon">
                    <img src={img} alt={name} />
                </div>
                <h3 className="game-item__name">{name}</h3>
            </div>
            <span className="game-item__tier">{getTierLabel()}</span>
        </div>
    );
}

Game.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tier: PropTypes.oneOf(['s', 'a', 'b', 'c', 'd', 'f']).isRequired,
};

export default Game;
