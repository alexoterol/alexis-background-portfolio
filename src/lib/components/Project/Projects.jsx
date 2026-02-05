import React from 'react';
import './Projects.css';
import Separator from '../Separator';

function Projects() {
    return (
        <div className="app-container">
            <main className="about-me-content">
                <div className="projects-container">
                    <h2 className="content-title">Projects</h2>
                    
                    <Separator margin={false}/>
                    
                    {/* Lista de proyectos */}
                    <div className="projects-list">
                        {/* Proyecto 1 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/path/to/rubius-avatar.png" alt="Rubiu5" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">Rubiu5</h3>
                                <p className="project-description">
                                    The discord bot for Rubius Army
                                </p>
                                <div className="project-tags">
                                    <span className="project-tag typescript">TypeScript</span>
                                    <span className="project-tag docker">Docker</span>
                                    <span className="project-tag mongodb">MongoDB</span>
                                </div>
                            </div>
                        </div>

                        {/* Proyecto 2 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/path/to/archan-avatar.png" alt="Archan" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">Archan</h3>
                                <p className="project-description">
                                    A fast and configurable discord bot
                                </p>
                                <div className="project-tags">
                                    <span className="project-tag typescript">TypeScript</span>
                                    <span className="project-tag docker">Docker</span>
                                    <span className="project-tag redis">Redis</span>
                                </div>
                            </div>
                        </div>

                        {/* Proyecto 3 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/path/to/starmc-logo.png" alt="StarMC" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">StarMC</h3>
                                <p className="project-description">
                                    Minecraft launcher built on Tauri
                                </p>
                                <div className="project-tags">
                                    <span className="project-tag rust">Rust</span>
                                    <span className="project-tag react">React</span>
                                </div>
                            </div>
                        </div>

                        {/* Proyecto 4 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/path/to/dnd-abenyu-logo.png" alt="DnD Abenyu" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">DnD Abenyu</h3>
                                <p className="project-description">
                                    A DnD helper server built in Rust
                                </p>
                                <div className="project-tags">
                                    <span className="project-tag rust">Rust</span>
                                    <span className="project-tag svelte">Svelte</span>
                                    <span className="project-tag sqlite">SQLite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Projects;
