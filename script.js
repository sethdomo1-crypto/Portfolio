
document.addEventListener('DOMContentLoaded', function () {

  const donationForm = document.getElementById('donationForm');

  if (donationForm) {
    donationForm.addEventListener('submit', function (e) {
      if (!this.checkValidity()) {
        e.preventDefault(); // i dont want the form to submit 
        alert('Please fill out all required fields correctly before submitting.');
      }
    });
  }


const fadeElements = document.querySelectorAll('.fade-in');

if (fadeElements.length > 0) {

  fadeElements.forEach((el, index) => {
    
    setTimeout(() => {
      el.classList.add('visible');
    }, (index + 1) * 150);
  });
}
//Slide-in on Scroll
  
  const slideElements = document.querySelectorAll('.slide-in');

  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        slideObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 
  });
  slideElements.forEach(el => {
    slideObserver.observe(el);
  });

});