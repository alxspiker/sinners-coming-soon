document.addEventListener('DOMContentLoaded', function() {
  // Set the countdown date - 30 days from now
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 30);
  
  // Update the countdown every second
  const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the results
    document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
    
    // If the countdown is finished, clear the interval
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById('days').innerHTML = '00';
      document.getElementById('hours').innerHTML = '00';
      document.getElementById('minutes').innerHTML = '00';
      document.getElementById('seconds').innerHTML = '00';
    }
  }, 1000);
  
  // Form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      if (emailInput.value) {
        // In a real implementation, you would send this to your backend
        // For now, just show a success message
        alert('Thank you for subscribing! We will notify you when we launch.');
        emailInput.value = '';
      }
    });
  }
  
  // Reveal animations for scrolling elements
  function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('revealed');
      }
    });
  }
  
  // Add scroll event listener for reveal animations
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial check for elements in view
  revealOnScroll();
});