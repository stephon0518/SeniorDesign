import React from 'react';
import { useLocation } from "react-router-dom"
import "./cityScopeSearchResults.css"
 

export default function CityScopeSearchResults() {
    const location = useLocation();
    console.log(location)
    //rating
    const [minRating, setMinRating] = useState(0);
    const [priceFilter, setPriceFilter] = useState(null);
    const filteredBusinesses = location.state.businesses.filter(
        business => business.rating >= minRating&& (priceFilter ? business.price === priceFilter : true));
        


    return (
        <div className="container">
            <div>
                <h2>Search Results</h2>
                <div>
                    {/* Dropdown for rates */}
                    <select value={ratingFilter} onChange={e => setRatingFilter(e.target.value || null)}>
                        <option value="">Select Rating</option>
                        {[1, 2, 3, 4, 5].map(rating => (
                            <option key={rating} value={rating}>{rating}</option>
                        ))}
                    </select>
                </div>
                <div>
                    {/* Dropdown for prices */}
                    <select value={priceFilter} onChange={e => setPriceFilter(e.target.value || null)}>
                        <option value="">Select Price</option>
                        <option value="$">Low ($)</option>
                        <option value="$$">Medium ($$)</option>
                        <option value="$$$">High ($$$)</option>
                    </select>
                </div>
            </div>
            {location.state.businesses.map((business, index) => (
                <div key={index}>
                    <p>{business.name}</p>
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
