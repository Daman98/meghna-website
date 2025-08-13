// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Simple contact form handler
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = `Portfolio Inquiry from ${encodeURIComponent(name)}`;
    const body = `${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
    window.location.href = `mailto:meghna@example.com?subject=${subject}&body=${body}`;
  });
}
