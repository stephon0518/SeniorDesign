import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import "./cityScopeHome.css"


export default function CityScopeHome() {

    const [category, setCategory] = useState("");
    let [businesses, setBusinesses] = useState([]);
    const navigate = useNavigate();
    const yelpApiKey = "LBJnb11wvWywhMNESrto75UtjlVXD4pzRQtVo2AjLAZ0sMxdsrZcRLHnIOXId7ANvJnwbBJ4elFFdlHzPePIFKZdPRTpWiSaL5nMCksnCx7KwZBnSNenOHNH1lHVZXYx"


    const handleSearch = async () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
                params: {
                    location: 'cincinnati', 
                    term: category,
                    limit: '50'
                },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${yelpApiKey}`
                   
                }
            }; 

            const response = await axios.request(options);
            setBusinesses(response.data.businesses);
            businesses = response.data.businesses;
            navigate('/CityScopeSearchResults', {state: {businesses}})
            //console.log('API Response:', response);
            //console.log(response.data.businesses);
            //console.log(typeof response.data.businesses);
            //console.log(typeof businesses)
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event) => {
        setCategory(event.target.value);
      };




    
    return (

            <div>
                <Typography className="pageTitle" variant="h2" align="center">
                    CityScope
                </Typography>

                <div className="search"> 
                    <input 
                    type="text"
                    value={category} 
                    onChange={handleInputChange}
                    />
                    <button className='button' onClick={handleSearch}>Search</button>
                </div>
            </div>
  

      );
    }

