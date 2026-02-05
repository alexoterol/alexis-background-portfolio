import React from 'react';

import './AboutMe.css';
import Separator from '../Separator';
import AboutSelector from './AboutSelector'
import imgRectangular from '../../assets/images/ref_rectangle.jpg';

function AboutMe() {


    return (
        <div className="app-container">
            <main className="main-content">
                <h1 className="main-title">About me</h1>
                <Separator margin={true} />
                <div className="content-grid-about-me">
                    <div className="metadata-character-about-me">
                        <img src={imgRectangular} alt="Rectangular" className="img-rect-about-me" />
                        <Separator margin={true} />
                        <div >
                            <p>Nick</p><p>:</p><p>Arekusu</p>
                        </div>
                        <div>
                            <p>Nick</p><p>:</p><p>Arekusu</p>
                        </div>
                        <div>
                            <p>Nick</p><p>:</p><p>Arekusu</p>
                        </div>
                    </div>
                    <AboutSelector /> 
                </div>
            </main>
        </div>
    );
}

export default AboutMe;
