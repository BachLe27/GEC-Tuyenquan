
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

// Navbar && Scroll
$(document).scroll(function() {
const scroll = $(window).scrollTop(); 
if (scroll < 10) {
   $(".nav-bar").css(initialNav);
      
   } else {
      $(".nav-bar").css(scrolledNav);
   }
})  

function removeActive() {
   $(".option").each(function(){
      $(this).removeClass("is-active");
   })
}

function addActive(number) {
   $(`.menu :nth-child(${number})`).addClass("is-active");
}

const level = [0, 560, 1300, 2000, 3100, 100000];

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
   if (scroll > 1100) {
      $(mark[3]).css("display", "block");
   }
});


$('.hamburger').on('click', function() {
   $('.hamburger').toggleClass('is-active');
   $('.menu').toggleClass('is-active');
   $('.nav-bar').toggleClass('is-active');
})


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
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

// Count-down timer 
const countDownDate = new Date("Oct 15, 2021 23:59:59").getTime();

const count = setInterval(() => {
      // Get today's date and time
   let now = new Date().getTime();

   // Find the distance between now and the count down date
   let distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

   if (days < 10) days = '0' + days;
   if (hours < 10) hours = '0' + hours;
   if (minutes < 10) minutes = '0' + minutes;
   if (seconds < 10) seconds = '0' + seconds;

   // Display 
   $("#day").text(days);
   $("#hour").text(hours);
   $("#min").text(minutes);
   $("#sec").text(seconds);

   if (distance < 0) {
      $("#day").text('00');
      $("#hour").text('00');
      $("#min").text('00');
      $("#sec").text('00');
      clearInterval(count);
   }

})