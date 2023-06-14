// JavaScript Document
function openResult(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabSpecialcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//pensar que hacer para mostrar un lightbox
function get_elements_for(nombre,clase) {//tomar los elementos de 
  switch (clase) {
    case "Id":
      return document.getElementById(nombre);
      break;
  
    default:return document.getElementsByClassName();
      break;
  }
  
}

function abrir_Modal_en(nombre_Secc,imagen_Numero) {//abrir modal en la figura tal
  document.getElementById(nombre_Secc).style.display = "block";//mostrae el modal que pertenece al Id XXX
  show_Slides_on_Modal(imagen_Numero);//
}

function show_Slides_on_Modal(n) {
  var i;
  var slides = get_elements_for("mySlides");
  var dots = get_elements_for("demo");
  var captionText = get_elements_for("caption","id");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//original
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
/*
var slideIndex = 1;
showSlides(slideIndex);
*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
