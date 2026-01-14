let searchBtn = document.querySelector('#search-btn');
let searchBar= document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];









window.onscroll =()=>{
      searchBtn.classList.remove('fa-times');
      searchBar.classList.remove('active');
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
      loginForm.classList.remove('active');

}
// menubar//
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



// searchbtn//
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click',()=>{
  
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
  
    loginForm.classList.remove('active');
});

// vedeo js section //

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
         document.querySelector('#video-slider').src = src;
    });
});

//  var swiper = new swiper(".review-slider", {
//     spaceBetween:20,
//     loop:true,
//  }); 

// booking stored//
document.querySelector("#book-form").addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    destination: this.destination.value,
    guests: this.guests.value,
    arrival: this.arrival.value,
    leaving: this.leaving.value
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(data);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking Saved Successfully!");
  this.reset();

  console.log("All bookings:", bookings);
});


// contact//
// Contact form submit handler
document.querySelector("#contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  const contactData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };

  // Get existing contacts or empty array
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(contactData);

  // Save back to localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts));

  alert("Message Sent Successfully!");
  this.reset();

  console.log("All contacts:", JSON.parse(localStorage.getItem("contacts")));
});








 var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop: true,
    grabCursor: true,
     autoplay:{
        delay: 2500,
        disableOnInteraction: false,
     },
     breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
           slidesPerView:2, 
        },
        1024:{
            slidesPerView:3,
        },
     },


  });








  var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
   //  grabCursor: true,
     autoplay:{
        delay: 2500,
        disableOnInteraction: false,
     },
     breakpoints:{
        450:{
           slidesPerView:2,
        },
        768:{
           slidesPerView:3, 
        },
        991:{
           slidesPerView:4, 
        },
        1200:{
           slidesPerView:5,
        },
     },


  });













  