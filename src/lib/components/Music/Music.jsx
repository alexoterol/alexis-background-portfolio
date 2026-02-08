import React from 'react';
import './Music.css';
import Separator from '../Separator';
import Window from './Window';
import Playlist from './Playlist';

import lprCover from '../../assets/images/music/copland.webp';

function Music() {
    const playlists = [
        {
            name: "Yes?",
            description: "Gangsta shyt",
            cover: lprCover,
            spotifyUrl: "https://open.spotify.com/playlist/1PkvnLUzAnpR1qKm8wloeZ?si=21a40f83d1c642aa"
        },
        {
            name: "PoliRawr",
            description: "Several languages to offer",
            cover: lprCover,
            spotifyUrl: "https://open.spotify.com/playlist/3A3nRML3rGZpBKn6SBiW86?si=26bacd7709df4971"
        },
        {
            name: "Sad,_,",
            description: null,
            cover: lprCover,
            spotifyUrl: "https://open.spotify.com/playlist/0rzUnb8Hw0nNB47KIas6tr?si=b9c2109112d34a25"
        }
    ];

    return (
        <div className="app-container">
            <main className="about-me-content">
                <div className="music-container">
                    <h1 className="main-title">Music</h1>
                    <Separator margin={true} />
                    
                    <div className="playlist-info">
                        <h3>Playlists: {playlists.length}</h3>
                        <a 
                            href="https://open.spotify.com/user/7ffa70unfgny74s5yj5f6um59"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h3>Profile</h3>
                        </a>
                    </div>
                    
                    <Window title="~/iPod">
                        <div className="playlist-container">
                            {playlists.map((playlist, index) => (
                                <Playlist
                                    key={index}
                                    name={playlist.name}
                                    description={playlist.description}
                                    cover={playlist.cover}
                                    spotifyUrl={playlist.spotifyUrl}
                                />
                            ))}
                        </div>
                    </Window>
                </div>
            </main>
        </div>
    );
}

export default Music;
