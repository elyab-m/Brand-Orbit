export function renderServices() {
  const servicesSection = document.createElement('section');
  servicesSection.className = 'section services';
  servicesSection.id = 'services';
  
  // Services data
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications that provide exceptional user experiences, built with the latest technologies and optimized for performance.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that drive traffic, generate leads, and increase conversions through SEO, PPC, email marketing, and more.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-6"></path></svg>'
    },
    {
      title: 'Brand Strategy',
      description: 'Comprehensive brand development from naming and identity design to brand guidelines and positioning that helps you stand out in the market.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>'
    },
    {
      title: 'Video Creation',
      description: 'High-quality promotional videos, explainer animations, and social media content that engage your audience and convey your message effectively.',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>'
    },
    {
      title: 'Social Media Management',
      description: 'End-to-end social media solutions including content creation, community management, and paid campaigns that build your online presence.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and comprehensive reporting that help you understand your performance and make informed business decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>'
    }
  ];
  
  // Create HTML
  const servicesHtml = `
    <div class="container">
      <div class="section-title">
        <h2>Our Services</h2>
        <p>We offer comprehensive digital solutions tailored to your business needs</p>
      </div>
      
      <div class="services-grid grid">
        ${services.map(service => `
          <div class="service-card fade-in">
            <img src="${service.image}" alt="${service.title}" class="service-image">
            <div class="service-content">
              <div class="service-icon">${service.icon}</div>
              <h3 class="service-title">${service.title}</h3>
              <p class="service-description">${service.description}</p>
              <a href="#contact" class="service-link">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  servicesSection.innerHTML = servicesHtml;
  
  return servicesSection;
}