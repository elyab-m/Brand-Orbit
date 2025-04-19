export function renderFeatures() {
  const featuresSection = document.createElement('section');
  featuresSection.className = 'section features';
  featuresSection.id = 'features';
  
  const features = [
    {
      tagline: "Expert Team",
      title: "Industry-Leading Professionals",
      description: "Our team consists of experienced professionals who are experts in their respective fields. We bring years of industry knowledge and creative thinking to every project.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      points: [
        "Certified experts in digital marketing and web development",
        "Continuous learning and professional development",
        "Specialized knowledge across multiple industries"
      ]
    },
    {
      tagline: "Custom Solutions",
      title: "Tailored to Your Business",
      description: "We don't believe in one-size-fits-all solutions. Every strategy we develop is customized to meet your specific business goals, target audience, and industry requirements.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      points: [
        "Personalized strategies based on your unique needs",
        "Scalable solutions that grow with your business",
        "Flexible approaches that adapt to market changes"
      ]
    },
    {
      tagline: "Results-Driven",
      title: "Focused on Measurable Outcomes",
      description: "We're committed to delivering real results that impact your bottom line. Our strategies are data-driven and focused on achieving measurable outcomes that matter to your business.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      points: [
        "Comprehensive analytics and reporting",
        "Regular performance reviews and optimizations",
        "Focus on ROI and business impact"
      ]
    }
  ];
  
  const featuresHtml = `
    <div class="container">
      <div class="section-title">
        <h2>Why Choose BrandOrbit</h2>
        <p>Discover the advantages that set us apart from the competition</p>
      </div>
      
      <div class="features-container">
        ${features.map(feature => `
          <div class="feature-row fade-in">
            <div class="feature-image-container">
              <img src="${feature.image}" alt="${feature.title}" class="feature-image">
            </div>
            <div class="feature-content">
              <span class="feature-tagline">${feature.tagline}</span>
              <h3 class="feature-title">${feature.title}</h3>
              <p class="feature-description">${feature.description}</p>
              <ul class="feature-list">
                ${feature.points.map(point => `
                  <li class="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    ${point}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  featuresSection.innerHTML = featuresHtml;
  
  return featuresSection;
}