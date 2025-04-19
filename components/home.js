export function renderHome() {
  const homeSection = document.createElement('section');
  homeSection.className = 'section hero';
  homeSection.id = 'home';
  
  homeSection.innerHTML = `
    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" alt="BrandOrbit" class="hero-background">
    <div class="container">
      <div class="hero-content">
        <span class="hero-tagline">Digital Services Agency</span>
        <h1 class="hero-title">Transform Your Brand With Creative Digital Solutions</h1>
        <p class="hero-description">We help businesses grow through 
          <div class="sliding-text">
            <div class="sliding-text-words">
              <span>strategic brand development</span>
              <span>innovative web solutions</span>
              <span>impactful digital marketing</span>
              <span>data-driven insights</span>
            </div>
          </div>
        </p>
        <div class="hero-buttons">
          <a href="#services" class="button">Explore Services</a>
          <a href="#contact" class="button secondary">Contact Us</a>
        </div>
      </div>
    </div>
  `;
  
  return homeSection;
}