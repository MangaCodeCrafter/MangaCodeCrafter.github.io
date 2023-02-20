//Botón de menú

document.querySelector(".barra_menu").addEventListener("click", movimientoBarra);

let linea1_barra_menu = document.querySelector(".linea1_barra_menu");
let linea2_barra_menu = document.querySelector(".linea2_barra_menu");
let linea3_barra_menu = document.querySelector(".linea3_barra_menu");

function movimientoBarra(){
    linea1_barra_menu.classList.toggle("activarlinea1_barra_menu");
    linea2_barra_menu.classList.toggle("activarlinea2_barra_menu");
    linea3_barra_menu.classList.toggle("activarlinea3_barra_menu");
};
