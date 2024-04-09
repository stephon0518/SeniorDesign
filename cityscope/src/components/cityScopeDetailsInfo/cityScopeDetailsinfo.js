import React from 'react';
import './cityScopeDetailsinfo.css'; // Assume you have a CSS file for styling

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Project Manager',
    imageUrl: 'path-to-image-of-alice',
    description: 'Alice is the project manager with over 10 years of experience...'
    // ... other member details
  },
  {
    name: 'Bob Smith',
    role: 'Lead Developer',
    imageUrl: 'path-to-image-of-bob',
    description: 'Bob is the technical lead who loves coding and solving complex problems...'
    // ... other member details
  },
  // ... more team members
];

export default function cityScopeDetailsinfo() {
    return (
        <div className="site-details-container">
            <header className="site-details-header">
                Site Details and Information
            </header>
            <section className="site-description">
                <h2>About CityScope</h2>
                <p>
                    CityScope is a platform designed to help you discover the best places around you...
                </p>
            </section>
            <section className="team-section">
                <h2>Our Team</h2>
                <div className="team-members">
                    {teamMembers.map(member => (
                        <div className="member-profile" key={member.name}>
                            <img src={member.imageUrl} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
