// Theme Switcher
function initTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-switch').checked = theme === 'dark';
}

function toggleTheme() {
  const theme = document.documentElement.getAttribute('data-theme');
  const newTheme = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Initialize theme and scroll reveal when page loads
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    
    // Add reveal class to elements
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.classList.add('reveal');
    });
    
    // Initial check for elements in view
    reveal();
    
    // Add scroll event listener
    window.addEventListener('scroll', reveal);
});

// Highlight current page in menu
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.main-menu a');
    
    menuLinks.forEach(link => {
        // Remove any existing active classes
        link.classList.remove('active');
        
        // Get the href without any query parameters
        const linkPage = link.getAttribute('href').split('?')[0];
        
        // Check if this is the current page
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Burger menu for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger_menu');
    const menu = document.getElementById('main-menu-mobile');
    
    if (burger && menu) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('active-burger');
            menu.classList.toggle('show-menu-mobile');
        });

        // Close menu when clicking a link (for better UX on mobile)
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove('active-burger');
                menu.classList.remove('show-menu-mobile');
            });
        });
    }
});

// Add loading styles
const style = document.createElement('style');
style.textContent = `
    .loading {
        text-align: center;
        padding: 2rem;
        font-size: 1.2rem;
        color: var(--first-color);
    }
    .error {
        text-align: center;
        padding: 2rem;
        color: red;
    }
`;
document.head.appendChild(style); 