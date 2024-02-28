import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './components/Home/cityScopeTitle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HomePage></HomePage>
  </React.StrictMode>
);


