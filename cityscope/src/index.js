import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CityScopeHome from './components/cityScopeTitle/cityScopeHome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CityScopeHome/>
  </React.StrictMode>
);


