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
var slideIndex = 1;
function abrir_Modal_en(nombre_Secc,imagen_Numero) {//abrir modal en la figura tal
  show_Slides_on_Modal(nombre_Secc, imagen_Numero);//

  document.getElementById("myModal").style.display = "block";//mostrae el modal que pertenece al Id XXX

}
 function llenar_con_Imagenes(donde_llenar,que_buscar) {
     //
     let imagenes=get_elements_for(que_buscar);
   for (let i=1;i<= imagenes.length;i++) {
       //crear div interno
       let div_out= document.createElement("div");
        div_out.setAttribute("class","mySlides");
        let div_inner= document.createElement("div");
            div_inner.setAttribute("class","numbertext");
            let cartel=i & " / " & imagenes.length;
            div_inner.setAttribute("innerHTML",cartel );

       let imagen=imagenes[i-1];
       let ruta=imagen.src;
       let img= document.createElement("img");
         img.setAttribute( "id","la perra" );
         img.setAttribute("src",ruta);

         //insertar img en div div_inner
       div_inner.appendChild(img);
       div_out.appendChild(div_inner);
        //llenar mySlydes
       donde_llenar.appendChild(div_out);
     //console.log(img);
   }
 }


function vaciarElementosHijos(objeto_a_vaciar,campo_a_buscar) {
    for (var i=objeto_a_vaciar.length;i>0;i--) {
            objeto_a_vaciar[i-1].remove();
           // objeto_a_vaciar.
        //let pp=objetoAVaciarElement.get("class");
    }
}



function show_Slides_on_Modal(que,n) {
  var i;
    var slides = get_elements_for("mySlides");
    //limpiar mySlydes
    vaciarElementosHijos(slides,"mySlides")

    llenar_con_Imagenes(get_elements_for("myContenido","Id"),que);

  var dots = get_elements_for("demo");
  var captionText = get_elements_for("caption","Id");
  if (n >= slides.length) {slideIndex = 1}
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
