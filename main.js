import './style.css';
import { renderHeader } from './components/header.js';
import { renderHome } from './components/home.js';
import { renderServices } from './components/services.js';
import { renderFeatures } from './components/features.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { setupAnimations } from './utils/animations.js';

// DOM elements
const app = document.querySelector('#app');
const main = document.querySelector('main');

// Render header
app.insertBefore(renderHeader(), main);

// Render sections
main.appendChild(renderHome());
main.appendChild(renderServices());
main.appendChild(renderFeatures());
main.appendChild(renderContact());

// Render footer
app.appendChild(renderFooter());

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  setupAnimations();
});