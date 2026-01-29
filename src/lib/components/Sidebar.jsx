import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`container ${isOpen ? 'container--open' : ''}`} id="sidebar">
            <button
                aria-label="menu switch"
                className={`container__switch ${isOpen ? 'switch-open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className="container__switch__icon"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"
                    />
                </svg>
            </button>

            <article className="container__content">
                <div className="sidebar-title">
                    <h3 className="subtitle">Filesystem</h3>
                </div>

                <div className="sidebar-title__separator"></div>

                <a className="sidebar-link" href="/about">
                    <svg
                        className="sidebar-link-icon"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 15a1 1 0 0 1-2 0V8A6 6 0 1 0 2 8v7a1 1 0 0 1-2 0V8a8 8 0 1 1 16 0v7zm-4-3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm2-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                            fillRule="evenodd"
                        />
                    </svg>
                    <p>About</p>
                </a>

                <a className="sidebar-link" href="/projects">
                    <svg
                        className="sidebar-link-icon"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 10.171V0h12v6H6v7c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3a3.002 3.002 0 0 1 4-2.829zM4 12H2v2h2v-2zM6 2v2h8V2H6zm8 6.171V6h2v5c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3a3.002 3.002 0 0 1 4-2.829zM14 10h-2v2h2v-2z"
                            fillRule="evenodd"
                        />
                    </svg>
                    <p>Projects</p>
                </a>

                <a className="sidebar-link" href="/contact">
                    <svg
                        className="sidebar-link-icon"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 0,0 H 16 V 12 H 4 V 4 h 8 v 6 h 2 V 2 H 2 v 12 h 14 v 2 H 0 Z M 10,10 V 6 H 6 v 4 z"
                        />
                    </svg>
                    <p>Contact</p>
                </a>
            </article>
        </div>
    );
}

export default Sidebar;
