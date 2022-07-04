import React from 'react'
import './index.css'
import App from './App'

import { createRoot} from 'react-dom/client';
const container = document.getElementById('parent');
const root = createRoot(container);
root.render(<App tab="home" />)