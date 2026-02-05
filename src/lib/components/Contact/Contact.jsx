import React from 'react';
import './Contact.css';
import Separator from '../Separator';
import ContactCard from './ContactCard';

function Contact() {
    const contacts = [
        {
            socialApp: 'Mail',
            name: 'Email',
            linkText: 'AlexMail',
            link: 'mailto:example@example.com'
        },

        {
            socialApp: 'Discord',
            name: 'Discord',
            linkText: 'Discock',
            link: 'https://discord.gg/...'
        },
        {
            socialApp: 'Twitter',
            name: 'Twitter',
            linkText: 'Alex 🌱',
            link: 'https://twitter.com/'
        }
    ];

    return (
        <div className="app-container">
            <main className="about-me-content">
                <div className="contact-container">
                    <h1 className="main-title">Contact</h1>
                    <Separator margin={true} />
                    
                    <div className="contact-methods-grid">
                        {contacts.map((contact, index) => (
                            <ContactCard
                                key={index}
                                socialApp={contact.socialApp}
                                name={contact.name}
                                linkText={contact.linkText}
                                link={contact.link}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contact;