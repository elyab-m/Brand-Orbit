export function renderHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  
  header.innerHTML = `
    <div class="container">
      <a href="#home" class="logo">
        <img src="/logo.png" alt="BrandOrbit" class="logo-image">
      </a>
      <nav>
        <ul class="nav-menu">
          <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
          <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
          <li class="nav-item"><a href="#features" class="nav-link">Why Choose Us</a></li>
          <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  `;
  
  // Add event listeners after inserting into DOM
  setTimeout(() => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Change header background on scroll
    const headerElement = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        headerElement.classList.add('scrolled');
      } else {
        headerElement.classList.remove('scrolled');
      }
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }, 100);
  
  return header;
}