/*-----------------------------------------------------------------*/
/*
Padding top automatico igual a la altura del header
*/

const headerNode = document.getElementsByClassName("navbar_altura")[0];

function marginTopAuto(entries) {
  const elemento_entry = entries[0];
  if (elemento_entry.target) {
    const mainNode = document.getElementsByTagName("main")[0];
    mainNode.style.paddingTop = `${elemento_entry.target.clientHeight}px`;
  }
}

// Crea un objeto ResizeObserver con la función de callback
const resizeObserver = new ResizeObserver(marginTopAuto);

// Observa el elemento
resizeObserver.observe(headerNode);
//Primera ejecucion
marginTopAuto([headerNode]);
/*-----------------------------------------------------------------*/
/*Aplicar formato a items de menu del navbar*/

function selectoresItemsMenu(evento) {
  /*Eliminacion de clase estilo_menu a todos los elementos del menu*/
  const contenedorItemsMenu = document.querySelector(".navbar-nav");
  const itemsMenu = contenedorItemsMenu.children;
  for (let itemli of itemsMenu) {
    itemli.classList.remove("estilo_menu");
  }

  const elementoSeleccionado = evento.target;

  elementoSeleccionado.parentElement.classList.add("estilo_menu");

  if (window.innerWidth < 576) {
    document.querySelector(".navbar-toggler").click();
  }
}
const contenedorItemsMenu = document.querySelector(".navbar-nav");
const itemsMenu = contenedorItemsMenu.children;
for (let itemli of itemsMenu) {
  itemli.children[0].addEventListener("click", selectoresItemsMenu);
}
/*-----------------------------------------------------------------*/
/*
Habilitacion de tooltips (creacion de objetos tooltip)
*/

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
/*-----------------------------------------------------------------*/
/*
Creación de objeto tooltip personalizado
*/

const tooltipNombreFooter = document.querySelector(".tooltip_nombre");

function toolTipPersonalizado(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    trigger: "hover",
    placement: "bottom",
    template:
      '<div class="tooltip tooltipNombreFooter" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });
}
toolTipPersonalizado(tooltipNombreFooter);

/*-----------------------------------------------------------------*/
/*
Desplazamiento a secciones pero personalizado menos la altura del header
*/
function scrollToSection(evento) {
  evento.preventDefault();

  const alturaHeader =
    document.getElementsByClassName("navbar_altura")[0].offsetHeight;

  var targetElemento = document.getElementById(
    evento.target.getAttribute("href").substring(1)
  );

  if (targetElemento) {
    // Calcula la posición de desplazamiento desde el top y le resto la altura del header ya que este es fixed
    var offset = targetElemento.offsetTop - alturaHeader;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}
//Utilizo ciclo for para recorrer anchor del menu y asignarles un event listener a cada elemento del menu
for (let itemli of itemsMenu) {
  itemli.children[0].addEventListener("click", scrollToSection);
}
/*-----------------------------------------------------------------*/
/*
Agrego funcionalidad scroll top button
*/
window.onscroll = function () {
  mostrarOcultarBoton();
};

function mostrarOcultarBoton() {
  const botonScroll = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonScroll.style.opacity = "1";
  } else {
    botonScroll.style.opacity = "0";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE y Opera
}
/*-----------------------------------------------------------------
Habilitación de popover a elemento particular nombre de autor
*/

const botonAutor = document.querySelector(".popovernombre");

function popOverAutor(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    trigger: "click",
    placement: "top",
    html: true,
    template:
      '<div class="popover popoverautor" role="tooltip"><h3 class="popover-header fw-bold text-dark"></h3><div class="popover-body"></div><div class="arrow"></div></div>',
  });
}

popOverAutor(botonAutor);
/*-----------------------------------------------------------------
Desactivar comportamiento por defecto de submit de formulario y muestra de alerta
*/

const formElement = document.querySelector("#contacto form");

formElement.addEventListener("submit", (evento) => {
  evento.preventDefault();
  window.alert("Felicidades, la data se ha enviado con éxito");
});
