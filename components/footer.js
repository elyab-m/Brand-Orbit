export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  
  const currentYear = new Date().getFullYear();
  
  footer.innerHTML = `
    <div class="container">
      <div class="footer-container">
        <div class="footer-col">
          <a href="#home" class="footer-logo">Brand<span>Orbit</span></a>
          <p class="footer-about">
            We're a full-service digital agency specializing in creating engaging digital experiences that drive business growth.
          </p>
          <div class="footer-social">
            <a href="#" class="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" class="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-col">
          <h3 class="footer-col-title">Services</h3>
          <ul class="footer-links">
            <li class="footer-link-item"><a href="#services" class="footer-link">Web Development</a></li>
            <li class="footer-link-item"><a href="#services" class="footer-link">Digital Marketing</a></li>
            <li class="footer-link-item"><a href="#services" class="footer-link">Brand Strategy</a></li>
            <li class="footer-link-item"><a href="#services" class="footer-link">Video Creation</a></li>
            <li class="footer-link-item"><a href="#services" class="footer-link">Social Media</a></li>
            <li class="footer-link-item"><a href="#services" class="footer-link">Analytics & Reporting</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3 class="footer-col-title">Company</h3>
          <ul class="footer-links">
            <li class="footer-link-item"><a href="#home" class="footer-link">About Us</a></li>
            <li class="footer-link-item"><a href="#features" class="footer-link">Why Choose Us</a></li>
            <li class="footer-link-item"><a href="#" class="footer-link">Our Team</a></li>
            <li class="footer-link-item"><a href="#" class="footer-link">Careers</a></li>
            <li class="footer-link-item"><a href="#" class="footer-link">FAQ</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3 class="footer-col-title">Contact</h3>
          <ul class="footer-links">
            <li class="footer-link-item">123 Digital Avenue</li>
            <li class="footer-link-item">Tech City, CA 94107</li>
            <li class="footer-link-item">+1 (555) 123-4567</li>
            <li class="footer-link-item">info@brandorbit.com</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="footer-copyright">© ${currentYear} BrandOrbit. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#" class="footer-bottom-link">Privacy Policy</a>
          <a href="#" class="footer-bottom-link">Terms of Service</a>
          <a href="#" class="footer-bottom-link">Sitemap</a>
        </div>
      </div>
    </div>
  `;
  
  return footer;
}