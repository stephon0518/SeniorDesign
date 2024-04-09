import React from 'react';
import {Route, Routes } from 'react-router-dom';
import CityScopeSearchResults from './components/cityScopeSearchResults/cityScopeSearchResults';
import './css/App.css'; 
import CityScopeHome from './components/cityScopeHome/cityScopeHome';
import CityScopeDetailsInfo from './components/cityScopeDetailsInfo/cityScopeDetailsinfo';




function App() {
  return (

      <Routes>
         <Route path="/" element={ <CityScopeHome />} />
        <Route path="/CityScopeSearchResults" element={ <CityScopeSearchResults />} />
        <Route path="/cityScopeDetailsinfo" element={ <CityScopeDetailsInfo />} />
      </Routes>
    

  );
}

export default App;
