import React from 'react';

// import './AboutMe.css';
import Separator from '../Separator';

import imgRectangular from '../../assets/images/ref_rectangle.jpg';

function AboutMe() {


    return (
        <main className="about-me-content">
            <h1 className="main-title">About me</h1>
            <Separator margin={true} />
            <div className="content-grid">
                <div className="metadata-character">
                    <img src={imgRectangular} alt="Rectangular" className="img-rect" />
                    <Separator margin={true} />
                    <div>
                        <p>Nick</p><p>:</p><p>Arekusu</p>
                    </div>
                    <div>
                        <p>Nick</p><p>:</p><p>Arekusu</p>
                    </div>
                    <div>
                        <p>Nick</p><p>:</p><p>Arekusu</p>
                    </div>
                </div>

                <div className="section-content">
                    <div className="interaction-area">
                        
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutMe;