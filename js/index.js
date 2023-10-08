// ANIM SCROLL

const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for( let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 10;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }else{
        if(!animItem.classList.contains('_anim-no-hide')){
          animItem.classList.remove('_active');}        
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(()=> {
     animOnScroll();
   },500); 
}




/*burger-menu button  */
const menu = document.querySelector(".burger-menu");
menu.addEventListener("click", morph);

function morph() {
  menu.classList.toggle("open");
  const items = document.querySelector(".menu-items");
  items.classList.toggle("open");
  const body = document.querySelector('html');
  body.classList.toggle('lock');

  items.addEventListener("click",function(){
     menu.classList.remove("open");
      items.classList.remove('open'); 
      body.classList.remove('lock');   
      
     
    }); 
}	


// ТАБИ

$(function() {
  var tab = $('#tabs .tabs-items > div'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('#tabs .tabs-nav a').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('#tabs .tabs-nav a').removeClass('active');
     $('#tabs .tabs-nav a').parent().removeClass('green');
    $(this).addClass('active');
    $(this).parent().addClass("green")
    return false;
  }).filter(':first').click();
 
  
});



/*карусель в табах*/


const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");
  item = document.getElementById("carousel-item");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = item.offsetWidth;
window.addEventListener("resize", e => (width = item.offsetWidth));



const carousel2 = document.getElementById("carousel2"),
  content2 = document.getElementById("content2"),
  next2 = document.getElementById("next2"),
  prev2 = document.getElementById("prev2");
  item2 = document.getElementById("carousel-item2");

next2.addEventListener("click", e => {
  carousel2.scrollBy(width + gap, 0);
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - width - gap <= carousel2.scrollLeft + width) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carousel2.scrollBy(-(width + gap), 0);
  if (carousel2.scrollLeft - width - gap <= 0) {
    prev2.style.display = "none";
  }
  if (!content2.scrollWidth - width - gap <= carousel2.scrollLeft + width) {
    next2.style.display = "flex";
  }
});

let width2 = item2.offsetWidth;
window.addEventListener("resize", e => (width2 = item2.offsetWidth));



const carousel3 = document.getElementById("carousel3"),
  content3 = document.getElementById("content3"),
  next3 = document.getElementById("next3"),
  prev3 = document.getElementById("prev3");
  item3 = document.getElementById("carousel-item3");

next3.addEventListener("click", e => {
  carousel3.scrollBy(width + gap, 0);
  if (carousel3.scrollWidth !== 0) {
    prev3.style.display = "flex";
  }
  if (content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
    next3.style.display = "none";
  }
});
prev3.addEventListener("click", e => {
  carousel3.scrollBy(-(width + gap), 0);
  if (carousel3.scrollLeft - width - gap <= 0) {
    prev3.style.display = "none";
  }
  if (!content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
    next3.style.display = "flex";
  }
});

let width3 = item3.offsetWidth;
window.addEventListener("resize", e => (width3 = item3.offsetWidth));









/*carousel  */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}




/*Back to Top button  */

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('up-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('up-show');
    }
  }

  function backToTop() {
    var scrolled = window.pageYOffset;
    if (scrolled > 0) {
      window.scrollBy(0, -scrolled);
    }
  }

  var goTopBtn = document.querySelector('.up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
    






$(document).ready(function() {
  $(function(){    

  // Присвоение класса для видимости сожержимого аккордеона
    $('.accordeon-header').click(function(){
      $(this).toggleClass('in').next().slideToggle();
    });
});
})




