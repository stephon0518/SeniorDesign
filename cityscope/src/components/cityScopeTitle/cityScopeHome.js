import React from 'react';
import "./cityScopeHome.css"
import Typography from '@mui/material/Typography';


export default function CityScopeHome() {
    return (

            <div>
                <Typography className="pageTitle" variant="h2" align="center">
                    CityScope
                </Typography>

                <div className="search"> 
                    <input 
                    type="text"
                    // value={category} 
                    // onChange={handleCategoryChange}
                    />
                    <button className='button'>search</button>
                </div>

            </div>
  

      );
    }

