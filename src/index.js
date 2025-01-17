import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import App from './App.js';

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById('root'));
root.render(<App />);

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
}
