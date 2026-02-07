import React from 'react';
import './Games.css';
import Separator from '../Separator';
import Game from './Game';

import OneshotImg from '../../assets/images/games/oneshot_game_icon.webp';
import OuterWildsImg from '../../assets/images/games/outer_wilds.webp';
import AHatInTimeImg from '../../assets/images/games/a_hat_in_time.webp';
import Yakuza0Img from '../../assets/images/games/yakuza0.webp';
import Persona4Golden from '../../assets/images/games/p4g.webp';
import CultOfTheLamb from '../../assets/images/games/cult_of_the_lamb.webp';
import KlonoaImg from '../../assets/images/games/klonoa.webp';
import DarkSoulsImg from '../../assets/images/games/dark_souls.webp';
import Portal2Img from '../../assets/images/games/portal2.webp';
import RDR2Img from '../../assets/images/games/rdr2.webp';
import GTASAImg from '../../assets/images/games/gta_sa.webp';
import DiabloImg from '../../assets/images/games/diablo.webp';
import MetaphorImg from '../../assets/images/games/metaphor.webp';
import MinecraftImg from '../../assets/images/games/minecraft.webp';
import Persona5RoyalImg from '../../assets/images/games/persona_5_royal.webp';
import PokemonBlackImg from '../../assets/images/games/pokemon_black.jpg';
import GTAIVImg from '../../assets/images/games/gta_iv.webp';
import CSGOImg from '../../assets/images/games/csgo.webp';
import PortalImg from '../../assets/images/games/portal_logo.webp';
import GTAVImg from '../../assets/images/games/gta_v.webp';
import SkyrimImg from '../../assets/images/games/skyrim.webp';

function Games() {
    const games = [
        // Tier S
        { name: "Oneshot", img: OneshotImg, tier: "s" },
        { name: "Outer Wilds", img: OuterWildsImg, tier: "s" },
        { name: "A Hat In Time", img: AHatInTimeImg, tier: "s" },
        { name: "Yakuza 0", img: Yakuza0Img, tier: "s" },
        { name: "Persona 4 Golden", img: Persona4Golden, tier: "s" },
        { name: "Cult of the Lamb", img: CultOfTheLamb, tier: "s" },
        { name: "Klonoa", img: KlonoaImg, tier: "s" },
        { name: "Dark Souls", img: DarkSoulsImg, tier: "s" },
        { name: "Portal 2", img: Portal2Img, tier: "s" },
        { name: "RDR 2", img: RDR2Img, tier: "s" },
        { name: "GTA SA", img: GTASAImg, tier: "s" },
        { name: "Diablo", img: DiabloImg, tier: "s" },
        { name: "Metaphor: ReFantazio", img: MetaphorImg, tier: "s" },
        { name: "Minecraft", img: MinecraftImg, tier: "s" },
        
        // Tier A
        { name: "Persona 5 Royal", img: Persona5RoyalImg, tier: "a" },
        { name: "Pokemon Black", img: PokemonBlackImg, tier: "a" },
        { name: "GTA IV", img: GTAIVImg, tier: "a" },
        { name: "CSGO", img: CSGOImg, tier: "a" },
        { name: "Portal", img: PortalImg, tier: "a" },
        
        // Tier B
        { name: "GTA V", img: GTAVImg, tier: "b" },
        { name: "Skyrim", img: SkyrimImg, tier: "b" },
    ];

    return (
        <div className="app-container">
            <main className="about-me-content">
                <div className="games-container">
                    <h1 className="main-title">Games</h1>
                    <Separator margin={true} />
                    
                    <div className="game-list">
                        {games.map((game, index) => (
                            <Game
                                key={index}
                                name={game.name}
                                img={game.img}
                                tier={game.tier}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Games;
