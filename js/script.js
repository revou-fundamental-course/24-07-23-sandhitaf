
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.menu a');

  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 50; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
});

/* validation Form Script */

function validateForm() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var interest = document.getElementById('interest').value;

  if (name === '' && email === '' && interest === 'null') {
    alert('Your name email, interest is empty');
    return false;
  }

  if (email === '' && name === '') {
    alert('Your email and name is empty');
    return false;
  }

  if (email === '') {
    alert('Your name is empty');
    return false;
  }

  if (name === '') {
    alert('Your name is empty');
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert('Your email is not valid');
    return false;
  }

  if (interest === 'null') {
    alert('Your interest section is empty');
    return false;
  }

  return true;
}

document.getElementById('buttonSubmit').addEventListener('click', function (event) {
  if (validateForm()) {
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('interest').selectedIndex = 0;
    alert('Congratulations your name is saved')
  } else {
    validateForm();
  }
});

const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlides() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  setTimeout(showSlides, 10000); /*Change slide every 10 seconds*/
}

showSlides();
