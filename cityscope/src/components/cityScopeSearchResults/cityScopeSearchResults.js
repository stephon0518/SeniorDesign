import React from 'react';
import { useLocation } from "react-router-dom"
import "./cityScopeSearchResults.css"
 

export default function CityScopeSearchResults() {
    const location = useLocation();
    console.log(location)
    

    return (
        <div className="container">
            <div>Search Results</div>
            {location.state.businesses.map((business, index) => (
                <div key={index}>
                    <p>Name: {business.name}</p>
                    <img src={business.image_url} alt={business.name} />
                    <p>Address: {business.location.address1}, {business.location.city}, {business.location.zip_code}</p>
                    <p>Phone: {business.display_phone}</p>
                    <p>Rating: {business.rating}</p>
                    <p>Price: {business.price}</p>
                    <p>Review Count: {business.review_count}</p>
                </div>
            ))}
        </div>
      );
    }
