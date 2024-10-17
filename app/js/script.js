const btnHamBurger = document.querySelector('#btnHamBurger');
const body = document.querySelector('body');
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll('.has-fade');

btnHamBurger.addEventListener('click', function() {
  console.log('open Hamburger');
  
  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element) {
      console.log(`e open: ${header.classList.contains('open')}`, element)
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    })
    
  } 
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element) {
      console.log(`e open: ${header.classList.contains('open')}`, element)
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    })
  }
})