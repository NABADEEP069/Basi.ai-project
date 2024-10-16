import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component
import './styles/index.css'; // Import Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
