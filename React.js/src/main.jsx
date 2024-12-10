import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const root=document.getElementById('root');

// eslint-disable-next-line   
const rootFromReact=createRoot(root);

<StrictMode>
rootFromReact.render(<App/>)
</StrictMode>
