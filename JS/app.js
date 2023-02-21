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

//Menu movil

document.querySelector(".barra_menu").addEventListener("click", abrirMenu);

let encabezado = document.querySelector(".encabezado");
let encabezado_img = document.querySelector(".encabezado-img");
let encabezado_lista = document.querySelector(".encabezado-lista");

function abrirMenu(){
    encabezado.classList.toggle("encabezado-a");
    encabezado_img.classList.toggle("encabezado-img-a");
    encabezado_lista.classList.toggle("encabezado-lista-a");
}

document.getElementById("inicio-app").addEventListener("click", abrirMenu);
document.getElementById("inicio-app").addEventListener("click", movimientoBarra);
document.getElementById("sobre-mi-app").addEventListener("click", abrirMenu);
document.getElementById("sobre-mi-app").addEventListener("click", movimientoBarra);
document.getElementById("portafolio-app").addEventListener("click", abrirMenu);
document.getElementById("portafolio-app").addEventListener("click", movimientoBarra);
document.getElementById("educacion-app").addEventListener("click", abrirMenu);
document.getElementById("educacion-app").addEventListener("click", movimientoBarra);
document.getElementById("skills-app").addEventListener("click", abrirMenu);
document.getElementById("skills-app").addEventListener("click", movimientoBarra);
document.getElementById("contacto-app").addEventListener("click", abrirMenu);
document.getElementById("contacto-app").addEventListener("click", movimientoBarra);

//Descargar pdf

function descargarPDF() {
    let link = document.createElement("a");
    link.href = "docs\Curriculum vitae Gutierrez Manuel.pdf";
    link.download = "Curriculum vitae Gutierrez Manuel.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }