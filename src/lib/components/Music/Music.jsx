import React from 'react';
import './Music.css';
import Separator from '../Separator';
import Window from './Window';
import Playlist from './Playlist';

import lprCover from '../../assets/images/music/copland.webp';

function Music() {
    const playlists = [
        {
            name: "Alex",
            description: "Alex's playlist",
            cover: lprCover,
            spotifyUrl: "https://open.spotify.com/playlist/your-playlist-id-1"
        },
        {
            name: "Lfdsag",
            description: null,
            cover: lprCover,
            spotifyUrl: "https://open.spotify.com/playlist/your-playlist-id-2"
        },
        {
            name: "MCHN",
            description: "RPlrs playlist",
            cover: lprCover,
            spotifyUrl: "https://open.spotify.com/playlist/your-playlist-id-3"
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
