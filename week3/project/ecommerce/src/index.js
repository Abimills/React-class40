import React from 'react';
import './style.css'
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router,  } from "react-router-dom";
import { AppProvider } from './Context';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render( 
<Router>
    <AppProvider>

<App />
    </AppProvider>
</Router>
);
