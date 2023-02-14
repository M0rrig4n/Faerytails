//Sticky navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar"); 
var navbarmedia = document.getElementById("navbar-media")
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbarmedia.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    navbarmedia.classList.remove("sticky");
  }
} 


//Slideshow
let slideIndex = 1;
showSlides(slideIndex);
function plusSlide(n) {
  showSlides(slideIndex += n);
}
function slideCorrente(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("punto");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
$(document).ready(function() {
  $(".fa-search").click(function() {
     $(".togglesearch").toggle();
     $("input[type='text']").focus();
   });
});

//Slide menu e cambio immagine
function openMap(evt, category) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    switch(category){
    case "ciclo-invasioni":
      document.getElementById("mappa-img").src = "../img/maps/cm-mappa.png";
      break;
    case "ciclo-conor":
      document.getElementById("mappa-img").src = "../img/maps/cu-mappa.png";
      break;
    case "ciclo-ossianico":
      document.getElementById("mappa-img").src = "../img/maps/co-mappa.png";
      break;
    case "saghe-leggendarie":
      document.getElementById("mappa-img").src = "../img/maps/sl-mappa.png";
      break;
    case "fiabe-folklore":
      document.getElementById("mappa-img").src = "../img/maps/ff-mappa.png";
      break;
    case "ballate":
      document.getElementById("mappa-img").src = "../img/maps/ba-mappa.png";
      break;
  }
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " active";
}

//Accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  } 