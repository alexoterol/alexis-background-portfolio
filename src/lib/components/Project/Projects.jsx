import React from 'react';
import './Projects.css';
import Separator from '../Separator';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../../contexts/LanguageContext';

import rubiusImg from '/src/lib/assets/images/projects/copland.webp';
import archanImg from '/src/lib/assets/images/projects/copland.webp';
import starmcImg from '/src/lib/assets/images/projects/copland.webp';
import dndImg from '/src/lib/assets/images/projects/copland.webp';

function Projects() {
    const { t } = useLanguage();
    
    const projectsList = t('projects.list');
    
    const projectsData = [
        {
            ...projectsList[0],
            img: rubiusImg,
            tags: ['TypeScript', 'Docker', 'MongoDB']
        },
        {
            ...projectsList[1],
            img: archanImg,
            tags: ['TypeScript', 'Docker', 'Redis']
        },
        {
            ...projectsList[2],
            img: starmcImg,
            tags: ['Rust', 'React']
        },
        {
            ...projectsList[3],
            img: dndImg,
            tags: ['Rust', 'Svelte', 'SQLite']
        }
    ];

    return (
        <div className="app-container">
            <main className="about-me-content">
                <div className="projects-container">
                    <h1 className="main-title">{t('projects.title')}</h1>
                    <Separator margin={false} />
                    
                    <div className="projects-list">
                        {projectsData.map((project, index) => (
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