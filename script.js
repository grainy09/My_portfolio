function toggleMode() {
  const body = document.body;
  body.classList.toggle('light');
  
  const toggleBtn = document.querySelector('.toggle-mode');
  
  if (body.classList.contains('light')) {
    toggleBtn.innerHTML = `<i data-lucide="moon"></i>`;
  } else {
    toggleBtn.innerHTML = `<i data-lucide="sun"></i>`;
  }
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuBtn = document.querySelector('.mobile-menu-btn i');
  
  navLinks.classList.toggle('active');
  
  if (navLinks.classList.contains('active')) {
    menuBtn.setAttribute('data-lucide', 'x');
  } else {
    menuBtn.setAttribute('data-lucide', 'menu');
  }
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
  });
});

// Optional: Add a simple console greeting
console.log("%c Grainy | Software & AI Engineer ", "background: #00d2ff; color: #050505; font-weight: bold; border-radius: 4px; padding: 4px;");

// Contact Form Submission Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    
    // Simulate form submission
    alert(`Bhai, thank you for reaching out! I've received your message, ${name}. I'll get back to you soon! 🚀`);
    this.reset();
  });
}

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}