// Main initialization
document.addEventListener('DOMContentLoaded', () => {
  console.log('⚖️ Silva & Associados - Inicializando...');
  
  initAOS();
  setupSmoothScroll();
  setupScrollEffects();
  setupAreaToggles();
  setupMobileMenu();
  checkOfficeHours();
  
  console.log('✓ Sistema totalmente carregado');
});

// Initialize AOS animations
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      disable: 'mobile'
    });
    console.log('✓ Animações AOS ativadas');
  }
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href === '#' || !href || href.length <= 1) return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.nav-links');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          document.querySelector('.mobile-menu-toggle').classList.remove('active');
        }
      }
    });
  });
  
  console.log('✓ Smooth scroll configurado');
}

// Scroll effects (header shadow, scroll-to-top button)
function setupScrollEffects() {
  const header = document.getElementById('header');
  const scrollTop = document.getElementById('scrollTop');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Header shadow on scroll
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Show/hide scroll-to-top button
    if (currentScroll > 500) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
  });
  
  // Scroll to top button click
  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  console.log('✓ Efeitos de scroll ativados');
}

// Area toggles (accordion)
function setupAreaToggles() {
  const toggleButtons = document.querySelectorAll('.area-toggle');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const area = this.getAttribute('data-area');
      const content = document.getElementById(`${area}-content`);
      
      // Toggle active state
      const isActive = this.classList.contains('active');
      
      // Close all other accordions
      document.querySelectorAll('.area-toggle').forEach(btn => {
        if (btn !== this) {
          btn.classList.remove('active');
          const otherArea = btn.getAttribute('data-area');
          const otherContent = document.getElementById(`${otherArea}-content`);
          if (otherContent) {
            otherContent.classList.remove('active');
          }
        }
      });
      
      // Toggle current accordion
      if (isActive) {
        this.classList.remove('active');
        content.classList.remove('active');
      } else {
        this.classList.add('active');
        content.classList.add('active');
      }
    });
  });
  
  console.log('✓ Acordeões configurados');
}

// Mobile menu toggle
function setupMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-links');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
      
      // Animate toggle icon
      const spans = toggle.querySelectorAll('span');
      if (toggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        const spans = toggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    console.log('✓ Menu mobile configurado');
  }
}

// Check office hours
function checkOfficeHours() {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  
  let isOpen = false;
  
  // Monday to Friday: 08:00 - 18:00
  if (day >= 1 && day <= 5) {
    isOpen = hour >= 8 && hour < 18;
  }
  
  const status = isOpen ? 'ABERTO' : 'FECHADO';
  const emoji = isOpen ? '✅' : '🔒';
  
  console.log(`${emoji} Escritório ${status}`);
  if (!isOpen) {
    console.log('📞 Atendimento emergencial disponível 24h');
  }
  
  return isOpen;
}

// Active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// Performance monitoring
window.addEventListener('load', () => {
  const loadTime = (performance.now() / 1000).toFixed(2);
  console.log(`⚡ Carregamento completo em ${loadTime}s`);
  
  // Google Analytics event (if available)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_load', {
      'load_time': loadTime
    });
  }
});

// Handle resize events
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
    console.log('✓ Layout atualizado');
  }, 250);
});

// Parallax effect for hero image (optional enhancement)
function initParallax() {
  const heroImage = document.querySelector('.hero-image img');
  
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      
      if (scrolled < 1000) {
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    });
  }
}

// Call parallax if desired
// initParallax();

// Form validation (if contact form is added later)
function validateContactForm(formData) {
  const errors = [];
  
  if (!formData.name || formData.name.trim().length < 3) {
    errors.push('Nome deve ter pelo menos 3 caracteres');
  }
  
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.push('Email inválido');
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }
  
  return {
    valid: errors.length === 0,
    errors: errors
  };
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Error handling
window.addEventListener('error', (event) => {
  console.error('❌ Erro capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Promise rejeitada:', event.reason);
});

// Utility functions
const utils = {
  // Smooth scroll to element
  scrollTo: (elementId, offset = 100) => {
    const element = document.getElementById(elementId);
    if (element) {
      const position = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  },
  
  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  
  // Debounce function
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};

// Export utils if needed
window.silvaUtils = utils;

console.log('⚖️ Silva & Associados - Sistema pronto');