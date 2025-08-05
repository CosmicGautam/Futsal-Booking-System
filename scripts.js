document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Form submission handling (placeholder)
  const forms = document.querySelectorAll('.form-container form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      console.log('Form submitted:', Object.fromEntries(formData));
      // Add actual form submission logic here (e.g., API call)
    });
  });

  // Social login buttons (placeholder)
  const socialButtons = document.querySelectorAll('.social-login a');
  socialButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`Social login clicked: ${button.textContent}`);
      // Add actual social login logic here
    });
  });

  // Booking button handling (placeholder)
  const bookNowButtons = document.querySelectorAll('.btn.book-now, .court-card .btn');
  bookNowButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Book now clicked');
      // Add booking logic here (e.g., redirect to booking page or open modal)
    });
  });
});