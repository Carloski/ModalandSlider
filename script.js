const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

// toggle the side bar in and out of the page
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// display the modal everytime the sign up button is pressed
open.addEventListener('click', () => modal.classList.add('show-modal'));

// hide the modal everytime the sign up button is pressed
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// hide the modal everytime the user clicks anywhere outside of the modal
window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
