import React from 'react';
import './cityScopeDetailsinfo.css'; 

const teamMembers = [
  {
    name: 'Stephon Mensah',
    role: 'Developer',
    imageUrl: `${process.env.PUBLIC_URL}/stephon2.jpg`,
  },
  {
    name: 'Tamera Meadows',
    role: 'Developer',
    imageUrl: `${process.env.PUBLIC_URL}/tamera.jpg`,
  },
    {
    name: 'Al Ayoola',
    role: 'Developer',
    imageUrl: `${process.env.PUBLIC_URL}/al1.jpg`,
  },
    {
    name: 'Pacific Mugisha',
    role: 'Developer',
    imageUrl: `${process.env.PUBLIC_URL}/pacific.jpg`,
  },
];

export default function CityScopeDetailsInfo() {
    return (
        <div className="site-details-container">
            <header className="site-details-header">
                Site Details and Information
            </header>
            <section className="site-description">
                <h2>About CityScope</h2>
                <p>
                    CityScope is a platform designed to help you discover the best places around you!
                    Are you looking for the best Coffee in Cincinnati? Enter "Coffee" into the search box
                    and a list of coffee shops to pick from will be displayed to you. 
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