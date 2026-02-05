import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css';
import aboutMeIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import projectsIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import contactIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import donateIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import discordIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import youtubeIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';

function CardContainer({ onNavigate }) {
    const cards = [
        { id: 'about', icon: aboutMeIcon, label: 'About Me', view: 'about' },
        { id: 'projects', icon: projectsIcon, label: 'Projects', view: 'projects' },
        { id: 'contact', icon: contactIcon, label: 'Contact', view: 'contact' },
        { id: 'donate', icon: donateIcon, label: 'Donate :3', view: 'donate' },
        { id: 'discord', icon: discordIcon, label: 'Discord', view: 'discord' },
        { id: 'youtube', icon: youtubeIcon, label: 'Youtube', view: 'youtube' },
    ];

    const handleCardClick = (view) => {
        onNavigate(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="card-container">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="card"
                    onClick={() => handleCardClick(card.view)}
                >
                    <div className="card-icon">
                        <img src={card.icon} alt={card.label} />
                    </div>
                    <p className="card-label">{card.label}</p>
                </div>
            ))}
        </div>
    );
}

CardContainer.propTypes = {
    onNavigate: PropTypes.func.isRequired,
};

export default CardContainer;
