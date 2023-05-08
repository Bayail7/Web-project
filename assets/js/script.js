'use strict';

/**
 * navbar variables
 */

// const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
// const header = document.querySelector("[data-header]");

// navToggleBtn.addEventListener("click", function () {
//   header.classList.toggle("active");
// });

function msg() {
   
  var el1 = document.getElementById('name');
  var el2 = document.getElementById('email');
  var el3 = document.getElementById('message');

  if(!el1.value || !el2.value || !el3.value){
      alert('Please Fill All The Required Text!');
      return;
  }
  
  document.getElementById('contact_form').submit();
  
 }
 

