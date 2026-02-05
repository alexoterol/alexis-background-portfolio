import React from 'react';
import './Projects.css';
import Separator from '../Separator';
import ProjectCard from './ProjectCard';

import rubiusImg from '/src/lib/assets/images/projects/copland.webp';
import archanImg from '/src/lib/assets/images/projects/copland.webp';
import starmcImg from '/src/lib/assets/images/projects/copland.webp';
import dndImg from '/src/lib/assets/images/projects/copland.webp';

function Projects() {
    const projects = [
        {
            name: 'Rubiu5',
            description: 'The discord bot for Rubius Army',
            img: rubiusImg,
            tags: ['TypeScript', 'Docker', 'MongoDB']
        },
        {
            name: 'Archan',
            description: 'A fast and configurable discord bot',
            img: archanImg,
            tags: ['TypeScript', 'Docker', 'Redis']
        },
        {
            name: 'StarMC',
            description: 'Minecraft launcher built on Tauri',
            img: starmcImg,
            tags: ['Rust', 'React']
        },
        {
            name: 'DnD Abenyu',
            description: 'A DnD helper server built in Rust',
            img: dndImg,
            tags: ['Rust', 'Svelte', 'SQLite']
        }
    ];

    return (
        <div className="app-container">
            <main className="about-me-content">
                <div className="projects-container">
                    <h1 className="main-title">Projects</h1>
                    <Separator margin={false} />
                    
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                name={project.name}
                                description={project.description}
                                img={project.img}
                                tags={project.tags}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Projects;