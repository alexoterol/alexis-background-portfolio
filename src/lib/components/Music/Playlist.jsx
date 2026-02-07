import React from 'react';
import PropTypes from 'prop-types';
import './Playlist.css';

function Playlist({ name, description, cover, spotifyUrl }) {
    const handleClick = () => {
        if (spotifyUrl) {
            window.open(spotifyUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="playlist-item" onClick={handleClick}>
            <div className="playlist-item__cover">
                <img src={cover} alt={name} />
            </div>
            <div className="playlist-item__info">
                <h3 className="playlist-item__name">{name}</h3>
                {description && (
                    <p className="playlist-item__description">{description}</p>
                )}
            </div>
        </div>
    );
}

Playlist.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    cover: PropTypes.string.isRequired,
    spotifyUrl: PropTypes.string,
};

export default Playlist;
