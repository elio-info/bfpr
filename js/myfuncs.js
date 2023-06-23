// JavaScript Document
function openResult(evt, selectedName) {
  var i, tabcontent, tablinks;
  let patron=selectedName.slice(0,2);//tomar los 2 primeros
  tabcontent = document.getElementsByClassName("tabSpecialcontent");
  for (i = 0; i < tabcontent.length; i++) {//mov over tabsSpecialcontent
    let selectedTabSpecialContent =tabcontent[i].id.indexOf(patron);
    if (selectedTabSpecialContent==0) { //si  cumple con lo que busco
        tabcontent[i].style.display = 
        tabcontent[i].id==
        selectedName? "block":"none";//se lleva oculto si no es         
    }     
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {//mov over tabLinks
    let selectedTabLinks=tablinks[i].attributes["onclick"].value.indexOf("'"+patron);//pos on string
    if (selectedTabLinks>-1) { //exist
       tablinks[i].className = tablinks[i].className.replace(" active", "");
    }   
  }
  //el actual esta activo
  evt.currentTarget.className += " active";
}
// my original
function open_Result(evt, cityName) {
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
