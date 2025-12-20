document.addEventListener('DOMContentLoaded', () => {
  console.log('⚖️ Iniciando Silva & Associados...');
  
  setTimeout(() => {
    initAOS();
    setupSmoothScroll();
    initLawyerFeatures();
    
    console.log('✓ Silva & Associados totalmente inicializado');
  }, 100);
});

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      disable: false
    });
    console.log('✓ Animações AOS inicializadas');
  } else {
    console.warn('⚠️ AOS não está disponível');
  }
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href === '#' || href === null || href.length <= 1) return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        console.log(`✓ Scroll suave para: ${href}`);
      } else {
        console.warn(`⚠️ Target não encontrado: ${href}`);
      }
    });
  });
  
  console.log('✓ Smooth scroll configurado');
}

function initLawyerFeatures() {
  document.body.classList.add('lawyer-ready');
  
  checkOfficeHours();
  initScrollSpy();
}

function checkOfficeHours() {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  
  let isOpen = false;
  
  // Segunda a Sexta: 08:00 - 18:00
  if (day >= 1 && day <= 5) {
    isOpen = hour >= 8 && hour < 18;
  }
  
  if (isOpen) {
    console.log('⚖️ Escritório ABERTO!');
  } else {
    console.log('🏢 Escritório FECHADO. Atendimento emergencial: 24h');
  }
  
  return isOpen;
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  if (sections.length === 0 || navLinks.length === 0) {
    console.warn('⚠️ ScrollSpy não inicializado');
    return;
  }
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          navLinks.forEach((link) => {
            link.classList.remove('active');
          });
          
          const activeLink = document.querySelector(`nav a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-80px 0px -60% 0px'
    }
  );
  
  sections.forEach((section) => observer.observe(section));
  
  console.log('✓ ScrollSpy inicializado');
}

window.refreshAOS = function() {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
    console.log('✓ AOS atualizado');
  }
};

window.scrollToTop = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  console.log('✓ Scroll para o topo');
};

window.isOpen = function() {
  return checkOfficeHours();
};

window.addEventListener('load', () => {
  const loadTime = (performance.now() / 1000).toFixed(2);
  console.log(`⚡ Silva & Associados carregado em ${loadTime}s`);
  
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_load', {
      'load_time': loadTime
    });
  }
});

function supportsWebP() {
  const elem = document.createElement('canvas');
  
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  
  return false;
}

if (supportsWebP()) {
  document.documentElement.classList.add('webp');
  console.log('✓ Suporte a WebP detectado');
} else {
  document.documentElement.classList.add('no-webp');
  console.log('⚠️ WebP não suportado');
}

window.addEventListener('error', (event) => {
  console.error('❌ Erro capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Promise rejeitada:', event.reason);
});