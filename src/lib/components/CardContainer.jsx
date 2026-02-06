import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css';
import { useLanguage } from '../contexts/LanguageContext';
import aboutMeIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import projectsIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import contactIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import donateIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import discordIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';
import youtubeIcon from '/src/lib/assets/images/CardImages/aboutMe.svg';

function CardContainer({ onNavigate }) {
    const { t } = useLanguage();
    
    const cards = [
        { id: 'about', icon: aboutMeIcon, labelKey: 'cards.aboutMe', view: 'about' },
        { id: 'projects', icon: projectsIcon, labelKey: 'cards.projects', view: 'projects' },
        { id: 'contact', icon: contactIcon, labelKey: 'cards.contact', view: 'contact' },
        { id: 'donate', icon: donateIcon, labelKey: 'cards.donate', view: 'donate' },
        { id: 'discord', icon: discordIcon, labelKey: 'cards.discord', view: 'discord' },
        { id: 'youtube', icon: youtubeIcon, labelKey: 'cards.youtube', view: 'youtube' },
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
                        <img src={card.icon} alt={t(card.labelKey)} />
                    </div>
                    <p className="card-label">{t(card.labelKey)}</p>
                </div>
            ))}
        </div>
    );
}

CardContainer.propTypes = {
    onNavigate: PropTypes.func.isRequired,
};

export default CardContainer;
