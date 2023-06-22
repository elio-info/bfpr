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
  
    default:return document.getElementsByClassName(nombre);
      break;
  }
  
}
