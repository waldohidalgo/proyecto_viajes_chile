/*-----------------------------------------------------------------*/
/*
Margin top automatico igual a la altura del header
*/

const headerNode = document.getElementsByClassName("navbar_altura")[0];

function marginTopAuto(entries) {
  const elemento_entry = entries[0];
  if (elemento_entry.target) {
    const mainNode = document.getElementsByTagName("main")[0];
    mainNode.style.paddingTop = `${elemento_entry.target.clientHeight}px`;
  }
}

// Crea una instancia de ResizeObserver con la función de callback
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
Habilitacion de popover (creacion de objetos popover)
*/

const popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
