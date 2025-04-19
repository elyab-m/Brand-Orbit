export function renderContact() {
  const contactSection = document.createElement('section');
  contactSection.className = 'section contact';
  contactSection.id = 'contact';
  
  const contactHtml = `
    <div class="container">
      <div class="section-title">
        <h2>Contact Us</h2>
        <p>Get in touch with our team to discuss your project</p>
      </div>
      
      <div class="contact-container">
        <div class="contact-form-container fade-in">
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" class="form-input" placeholder="Your name" required>
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-input" placeholder="Your email address" required>
            </div>
            
            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" id="subject" class="form-input" placeholder="Subject">
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" class="form-textarea" placeholder="Your message" required></textarea>
            </div>
            
            <button type="submit" class="button accent">Send Message</button>
            
            <div class="form-success" id="formSuccess">
              Your message has been sent successfully. We'll get back to you soon!
            </div>
          </form>
        </div>
        
        <div class="contact-info fade-in">
          <div class="contact-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div class="contact-info-content">
              <h4 class="contact-info-title">Phone</h4>
              <p class="contact-info-detail">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div class="contact-info-content">
              <h4 class="contact-info-title">Email</h4>
              <p class="contact-info-detail">info@brandorbit.com</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div class="contact-info-content">
              <h4 class="contact-info-title">Office</h4>
              <p class="contact-info-detail">123 Digital Avenue, Tech City, CA 94107</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div class="contact-info-content">
              <h4 class="contact-info-title">Working Hours</h4>
              <p class="contact-info-detail">Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div class="contact-social">
            <h4 class="contact-social-title">Follow Us</h4>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  contactSection.innerHTML = contactHtml;
  
  // Add form submission handler after the element is added to the DOM
  setTimeout(() => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formSuccess = document.getElementById('formSuccess');
        
        // In a real application, you would handle form submission to a server here
        // This is just a simulation for demo purposes
        
        // Reset form fields
        contactForm.reset();
        
        // Show success message
        formSuccess.classList.add('show');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.classList.remove('show');
        }, 5000);
      });
    }
  }, 100);
  
  return contactSection;
}