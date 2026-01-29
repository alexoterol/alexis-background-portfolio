import React from 'react';
import '../MainContent.css';
import SpaceAesthetic from '../SpaceAesthetic';
import Separator from '../Separator';
import CharacterContainer from '../CharacterContainer';
import CardContainer from '../CardContainer';

import imgCuadrada from '../../assets/images/ref_square.jpg';
import imgRectangular from '../../assets/images/ref_rectangle.jpg';

function Home() {
    const imageNames = [
        'GOW_logo.png',
        'Akira_logo.png',
        'Bloodborne_logo.png',
        'VinlandSaga_logo.png',
        'Berserk_logo.png',
    ];

    return (
            <div className="app-container">
                <main className="main-content">
                    <h1 className="main-title">Alexis' Background</h1>
                    <Separator margin={true} />
                    <div className="content-grid">
                        <div className="images-showcase">
                            <img src={imgCuadrada} alt="Square" className="img-square" />
                            <img src={imgRectangular} alt="Rectangular" className="img-rect" />
                        </div>

                        <div className="bottom-section">
                            <SpaceAesthetic imageNames={imageNames} />
                            <div className="interaction-area">
                                <CharacterContainer />
                            </div>
                        </div>
                    </div>
                    <div className='slow-separator'>
                        <p className='slow-text'>IT IS A SL_________OW TYPE OF ART</p>
                    </div>
                    <CardContainer/>
                </main>
            </div>
    );
}

export default Home;