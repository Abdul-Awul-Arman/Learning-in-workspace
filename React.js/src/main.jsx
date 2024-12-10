import React from 'react';
import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'


    const rootForReact=ReactDom.createRoot(document.getElementById('root'));
    
    rootForReact.render(
        <StrictMode>
            <App/>
        </StrictMode>)


