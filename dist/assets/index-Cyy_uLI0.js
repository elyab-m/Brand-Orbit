(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function p(){const t=document.createElement("header");return t.className="header",t.innerHTML=`
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
  `,setTimeout(()=>{const o=document.querySelector(".mobile-menu-btn"),n=document.querySelector(".nav-menu");o.addEventListener("click",()=>{o.classList.toggle("active"),n.classList.toggle("active")});const i=document.querySelectorAll(".nav-link");i.forEach(r=>{r.addEventListener("click",()=>{o.classList.remove("active"),n.classList.remove("active")})});const e=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")});const s=document.querySelectorAll(".section");window.addEventListener("scroll",()=>{let r="";s.forEach(a=>{const c=a.offsetTop-100;pageYOffset>=c&&(r=a.getAttribute("id"))}),i.forEach(a=>{a.classList.remove("active"),a.getAttribute("href")===`#${r}`&&a.classList.add("active")})})},100),t}function u(){const t=document.createElement("section");return t.className="section hero",t.id="home",t.innerHTML=`
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
  `,t}function v(){const t=document.createElement("section");t.className="section services",t.id="services";const n=`
    <div class="container">
      <div class="section-title">
        <h2>Our Services</h2>
        <p>We offer comprehensive digital solutions tailored to your business needs</p>
      </div>
      
      <div class="services-grid grid">
        ${[{title:"Web Development",description:"Custom websites and web applications that provide exceptional user experiences, built with the latest technologies and optimized for performance.",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'},{title:"Digital Marketing",description:"Strategic marketing campaigns that drive traffic, generate leads, and increase conversions through SEO, PPC, email marketing, and more.",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-6"></path></svg>'},{title:"Brand Strategy",description:"Comprehensive brand development from naming and identity design to brand guidelines and positioning that helps you stand out in the market.",image:"https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>'},{title:"Video Creation",description:"High-quality promotional videos, explainer animations, and social media content that engage your audience and convey your message effectively.",image:"https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>'},{title:"Social Media Management",description:"End-to-end social media solutions including content creation, community management, and paid campaigns that build your online presence.",image:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>'},{title:"Analytics & Reporting",description:"Data-driven insights and comprehensive reporting that help you understand your performance and make informed business decisions.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>'}].map(i=>`
          <div class="service-card fade-in">
            <img src="${i.image}" alt="${i.title}" class="service-image">
            <div class="service-content">
              <div class="service-icon">${i.icon}</div>
              <h3 class="service-title">${i.title}</h3>
              <p class="service-description">${i.description}</p>
              <a href="#contact" class="service-link">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;return t.innerHTML=n,t}function m(){const t=document.createElement("section");t.className="section features",t.id="features";const n=`
    <div class="container">
      <div class="section-title">
        <h2>Why Choose BrandOrbit</h2>
        <p>Discover the advantages that set us apart from the competition</p>
      </div>
      
      <div class="features-container">
        ${[{tagline:"Expert Team",title:"Industry-Leading Professionals",description:"Our team consists of experienced professionals who are experts in their respective fields. We bring years of industry knowledge and creative thinking to every project.",image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",points:["Certified experts in digital marketing and web development","Continuous learning and professional development","Specialized knowledge across multiple industries"]},{tagline:"Custom Solutions",title:"Tailored to Your Business",description:"We don't believe in one-size-fits-all solutions. Every strategy we develop is customized to meet your specific business goals, target audience, and industry requirements.",image:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",points:["Personalized strategies based on your unique needs","Scalable solutions that grow with your business","Flexible approaches that adapt to market changes"]},{tagline:"Results-Driven",title:"Focused on Measurable Outcomes",description:"We're committed to delivering real results that impact your bottom line. Our strategies are data-driven and focused on achieving measurable outcomes that matter to your business.",image:"https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",points:["Comprehensive analytics and reporting","Regular performance reviews and optimizations","Focus on ROI and business impact"]}].map(i=>`
          <div class="feature-row fade-in">
            <div class="feature-image-container">
              <img src="${i.image}" alt="${i.title}" class="feature-image">
            </div>
            <div class="feature-content">
              <span class="feature-tagline">${i.tagline}</span>
              <h3 class="feature-title">${i.title}</h3>
              <p class="feature-description">${i.description}</p>
              <ul class="feature-list">
                ${i.points.map(e=>`
                  <li class="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    ${e}
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;return t.innerHTML=n,t}function f(){const t=document.createElement("section");t.className="section contact",t.id="contact";const o=`
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
  `;return t.innerHTML=o,setTimeout(()=>{const n=document.getElementById("contactForm");n&&n.addEventListener("submit",i=>{i.preventDefault();const e=document.getElementById("formSuccess");n.reset(),e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},5e3)})},100),t}function g(){const t=document.createElement("footer");t.className="footer";const o=new Date().getFullYear();return t.innerHTML=`
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
        <p class="footer-copyright">© ${o} BrandOrbit. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#" class="footer-bottom-link">Privacy Policy</a>
          <a href="#" class="footer-bottom-link">Terms of Service</a>
          <a href="#" class="footer-bottom-link">Sitemap</a>
        </div>
      </div>
    </div>
  `,t}function w(){const t={root:null,rootMargin:"0px",threshold:.1},o=new IntersectionObserver(i=>{i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("appear"),o.unobserve(e.target))})},t);setTimeout(()=>{document.querySelectorAll(".fade-in").forEach(e=>{o.observe(e)})},100),document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(e){e.preventDefault();const s=this.getAttribute("href"),r=document.querySelector(s);if(r){const c=document.querySelector(".header").offsetHeight,h=r.offsetTop-c;window.scrollTo({top:h,behavior:"smooth"})}})})}const d=document.querySelector("#app"),l=document.querySelector("main");d.insertBefore(p(),l);l.appendChild(u());l.appendChild(v());l.appendChild(m());l.appendChild(f());d.appendChild(g());document.addEventListener("DOMContentLoaded",()=>{w()});
