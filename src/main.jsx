import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './frontend/FrontendApp.jsx'
import './index.css'
import FrontendApp from './frontend/FrontendApp.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FrontendApp />
    </BrowserRouter>
  </React.StrictMode>
)
