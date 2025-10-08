// ================================================
// main.jsx
// Purpose: Entry point for the Reunion Program app
// Handles viewport fix and renders <App /> inside StrictMode
// ================================================

// Global styles
import './App.css';
import './styles/navButtons.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

// Main App
import App from './App.jsx';

// 📱 Fix mobile 100vh viewport behavior
const setVh = () => {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`
  );
};

// Debounce resize listener for performance
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setVh, 150);
});

setVh();

// Mount App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
