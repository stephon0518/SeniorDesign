import React from 'react';
import {Route, Routes } from 'react-router-dom';
import CityScopeSearchResults from './components/cityScopeSearchResults/cityScopeSearchResults';
import './css/App.css'; 
import CityScopeHome from './components/cityScopeHome/cityScopeHome';




function App() {
  return (

      <Routes>
         <Route path="/" element={ <CityScopeHome />} />
        <Route path="/CityScopeSearchResults" element={ <CityScopeSearchResults />} />
      </Routes>
    

  );
}

export default App;
