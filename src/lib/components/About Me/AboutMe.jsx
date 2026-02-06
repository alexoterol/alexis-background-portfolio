import React from 'react';

import './AboutMe.css';
import Separator from '../Separator';
import AboutSelector from './AboutSelector'
import imgRectangular from '../../assets/images/ref_rectangle.jpg';
import { useLanguage } from '../../contexts/LanguageContext';

function AboutMe() {
    const { t } = useLanguage();

    return (
        <div className="app-container">
            <main className="main-content">
                <h1 className="main-title">{t('aboutMe.title')}</h1>
                <Separator margin={true} />
                <div className="content-grid-about-me">
                    <div className="metadata-character-about-me">
                        <img src={imgRectangular} alt="Rectangular" className="img-rect-about-me" />
                        <Separator margin={false} />
                        <div className="character-stats">
                            <div className="stat-row">
                                <p className="stat-label">{t('aboutMe.stats.nick')}</p>
                                <p className="stat-colon">:</p>
                                <p className="stat-value">アレックス</p>
                            </div>
                            
                            <div className="stat-row">
                                <p className="stat-label">{t('aboutMe.stats.level')}</p>
                                <p className="stat-colon">:</p>
                                <p className="stat-value">20</p>
                            </div>
                            
                            <div className="stat-row">
                                <p className="stat-label">HP</p>
                                <p className="stat-colon">:</p>
                                <p className="stat-value">???</p>
                            </div>
                            
                            <div className="stat-row">
                                <p className="stat-label">Mana</p>
                                <p className="stat-colon">:</p>
                                <p className="stat-value">???</p>
                            </div>
                            
                            <div className="stat-row">
                                <p className="stat-label">{t('aboutMe.stats.rank')}</p>
                                <p className="stat-colon">:</p>
                                <p className="stat-value">B2</p>
                            </div>
                        </div>
                    </div>
                    <AboutSelector /> 
                </div>
            </main>
        </div>
    );
}

export default AboutMe;
