// import React from 'react';
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import Typography from '@mui/material/Typography';
// import "./cityScopeHome.css"


// export default function CityScopeHome() {

//     // const [category, setCategory] = useState("");
//     // let [businesses, setBusinesses] = useState([]);
//     // const navigate = useNavigate();
//     const [showOptions, setShowOptions] = useState(false);
//     const [category, setCategory] = useState("");
//     const navigate = useNavigate();
//     const yelpApiKey = "LBJnb11wvWywhMNESrto75UtjlVXD4pzRQtVo2AjLAZ0sMxdsrZcRLHnIOXId7ANvJnwbBJ4elFFdlHzPePIFKZdPRTpWiSaL5nMCksnCx7KwZBnSNenOHNH1lHVZXYx"

//     const popularCategories = ["Restaurants", "Schools", "Cafes", "Hotels", "Bars"];

//     const handleSearch = async () => {
//         try {
//             const options = {
//                 method: 'GET',
//                 url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
//                 params: {
//                     location: 'cincinnati', 
//                     term: category,
//                     limit: '50'
//                 },
//                 headers: {
//                     accept: 'application/json',
//                     Authorization: `Bearer ${yelpApiKey}`
                   
//                 }
//             }; 

//             const response = await axios.request(options);
//             setBusinesses(response.data.businesses);
//             businesses = response.data.businesses;
//             navigate('/CityScopeSearchResults', {state: {businesses}})
//             //console.log('API Response:', response);
//             //console.log(response.data.businesses);
//             //console.log(typeof response.data.businesses);
//             //console.log(typeof businesses)
            
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleInputChange = (event) => {
//         setCategory(event.target.value);
//       };




    
//     return (

//             <div>
//                 <Typography className="pageTitle" variant="h2" align="center">
//                     CityScope
//                 </Typography>

//                 <div className="search"> 
//                     <input 
//                     type="text"
//                     value={category} 
//                     onChange={handleInputChange}
//                     />
//                     <button className='button' onClick={handleSearch}>Search</button>
//                 </div>
//             </div>
  

//       );
//     }



    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import axios from 'axios';
    import Typography from '@mui/material/Typography';
    import './cityScopeHome.css';
    import cityScopeDetailsinfo from '../cityScopeDetailsInfo/cityScopeDetailsinfo';
    import { Link } from 'react-router-dom';
    // require('token.env').config();
    // const yelpApiKey = process.env.API_KEY
    
    export default function CityScopeHome() {
        const [showOptions, setShowOptions] = useState(false);
        const [category, setCategory] = useState("");
        const navigate = useNavigate();
        const yelpApiKey = "LBJnb11wvWywhMNESrto75UtjlVXD4pzRQtVo2AjLAZ0sMxdsrZcRLHnIOXId7ANvJnwbBJ4elFFdlHzPePIFKZdPRTpWiSaL5nMCksnCx7KwZBnSNenOHNH1lHVZXYx";

        const popularCategories = ["Restaurants", "Schools", "Cafes", "Hotels", "Bars"];
    
        const handleSearch = async (searchTerm = category) => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
                    params: {
                        location: 'cincinnati', 
                        term: searchTerm,
                        limit: '50'
                    },
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${yelpApiKey}`
                    }
                }; 
    
                const response = await axios.request(options);
                navigate('/CityScopeSearchResults', {state: {businesses: response.data.businesses}});
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        const handleInputChange = (event) => {
            setCategory(event.target.value);
            setShowOptions(true); // Show options on input change
        };
    
        const handleOptionClick = (option) => {
            setCategory(option);
            setShowOptions(false); // Hide options after selection
            handleSearch(option); // Perform search with selected option
        };
    
        return (
            <div>
                <Typography className="pageTitle" variant="h2" align="center">
                    {/* <img src={`${process.env.PUBLIC_URL}/result.png`} alt="CityScope Logo" className="logo" /> */}
                    CityScope
                </Typography>
    
                <div className="search"> 
                    <input 
                        type="text"
                        value={category}
                        onChange={handleInputChange}
                        onFocus={() => setShowOptions(true)} // Show options on focus
                    />
                    <button className='button' onClick={() => handleSearch()}>Search</button>
                </div>
                <div className="most-searched">
                    <h5 align="center" >Most Searched Categories</h5>
                    <div className="buttons-container-top">
                        {popularCategories.slice(0,3).map((item, index) => (
                            <button
                                key={index}
                                className="category-button"
                                onClick={() => handleOptionClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="buttons-container">
                        {popularCategories.slice(3).map((item, index) => (
                            <button
                                key={index}
                                className="category-button"
                                onClick={() => handleOptionClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <footer className="footer-bar">
                    <Link to="/cityScopeDetailsinfo" className="footer-link">
                        Site details and information here
                    </Link>
                </footer>
                
            </div>
            
            
        );
    }
    