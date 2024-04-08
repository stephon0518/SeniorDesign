import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import "./cityScopeSearchResults.css";

export default function CityScopeSearchResults() {
    const location = useLocation();
    const [filter, setFilter] = useState('default');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const getFilteredBusinesses = () => {
        // Example filter function
        switch (filter) {
            case 'highest-rated':
                return [...location.state.businesses].sort((a, b) => b.rating - a.rating);
            case 'most-reviewed':
                return [...location.state.businesses].sort((a, b) => b.review_count - a.review_count);
            case 'lowest-rated':
                return [...location.state.businesses].sort((a, b) => a.rating - b.rating);
            case 'least-reviewed':
                return [...location.state.businesses].sort((a, b) => a.review_count - b.review_count);
            case 'highest Price':
                return [...location.state.businesses].sort((a, b) => b.price - a.price);
            case 'lowest Price':
                return [...location.state.businesses].sort((a, b) => a.price - b.price);    
            default:
                return location.state.businesses;
        }
    };

    const filteredBusinesses = getFilteredBusinesses();

    return (
        <div className="container">
            <header className="search-header">
                <img src={`${process.env.PUBLIC_URL}/CityScopeLogo.jpg`} alt="CityScope Logo" className="logo" />
                <h1>CityScope</h1>
            </header>
            <div>Search Results</div>
            <select value={filter} onChange={handleFilterChange}>
                <option value="default">Select Filter</option>
                <option value="highest-rated">Highest Rated</option>
                <option value="lowest-rated">Lowest Rated</option>
                <option value="most-reviewed">Most Reviewed</option>
                <option value="least-reviewed">Least Reviewed</option>
                <option value="highest-price">Highest Price</option>
                <option value="Lowest Price">Lowest Price</option>
                {/* Add more options for other filters */}
            </select>
            {filteredBusinesses.map((business, index) => (
                <div className="business-entry" key={index}>
                    <div key={index}>
                        <p>{business.name}</p>
                        <img src={business.image_url} alt={business.name} />
                        <p>Address: 
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.location.address1)}%2C+${encodeURIComponent(business.location.city)}%2C+${encodeURIComponent(business.location.zip_code)}`}
                                target="_blank" 
                                rel="noopener noreferrer">
                            {business.location.address1}, {business.location.city}, {business.location.zip_code}
                            </a>
                        </p>
                        <p>Phone: {business.display_phone}</p>
                        <p>Rating: {business.rating} Stars</p>
                        <p>Price: {business.price}</p>
                        <p>Review Count: {business.review_count}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
