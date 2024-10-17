const btnHamBurger = document.querySelector('#btnHamBurger');
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHamBurger.addEventListener('click', function() {
  console.log('open Hamburger');
  
  if(header.classList.contains('open')){ // Close Hamburger Menu
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } 
  else { // Open Hamburger Menu
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
})