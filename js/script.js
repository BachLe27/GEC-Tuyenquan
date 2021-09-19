
const initialNav = {
   "background-color": "transparent",
   "padding": "2rem 2.5rem",
   "box-shadow": "none"
}

const scrolledNav = {
   "background-color": "rgba(0,0,0,0.9)",
   "padding": "0.5rem 2.5rem",
   "box-shadow": "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
}

// Navbar
$(document).scroll(function() {
   const scroll = $(window).scrollTop(); 
   if (scroll < 10) {
      $(".nav-bar").css(initialNav);

   } else {
      $(".nav-bar").css(scrolledNav);
   }
})  

$('.hamburger').on('click', function() {
   $('.hamburger').toggleClass('is-active');
   $('.menu').toggleClass('is-active');
   $('.nav-bar').toggleClass('is-active');
})

function removeActive() {
   $(".option").each(function(){
      $(this).removeClass("is-active");
   })
}

function addActive(number) {
   $(`.menu :nth-child(${number})`).addClass("is-active");
}

const level = [0, 550, 1300, 2000, 3100, 100000];

$(document).scroll(function() {
   const scroll = $(window).scrollTop(); 

   for (let i = 0; i < level.length - 1; i++) {
      if (scroll > level[i] && scroll < level[i+1]) {
         removeActive();
         addActive(i+1);
      }
   }
});

// Item Appear 

$(document).scroll(function() {
   const scroll = $(window).scrollTop();
   const mark = $('.mark');
   if (scroll > 350) {
      $(mark[0]).css("display", "block");
   }

   if (scroll > 550) {
      $(mark[1]).css("display", "block");
   }

   if (scroll > 1100) {
      $(mark[2]).css("display", "block");
   }
   if (scroll > 1200) {
      $(mark[3]).css("display", "block");
   }
});


// Slide 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = $(".slide");
  const dots = $(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

