document.addEventListener("contextmenu", (event) => event.preventDefault());
// Obtener todos los contenedores con la clase 'contenedor'
var contenedores = document.querySelectorAll(".contenedor");

contenedores.forEach(function (contenedor) {
  contenedor.addEventListener("click", function (event) {
    // Obtener el contenido del elemento 'p' del contenedor clickeado
    var contenidoP = contenedor.querySelector("p").textContent;
    var contenidoConSaltosDeLinea = contenidoP.replace(/\n/g, "\r\n");
    var contenidoConEtiquetasBR = contenidoConSaltosDeLinea.replace(
      /\r\n/g,
      "<br>"
    );
    document.querySelector(".pepo p").innerHTML = contenidoConEtiquetasBR;

    // Mostrar la foto clickeada
    var urlImagen = contenedor.querySelector(".imagen").src;
    document.getElementById("imagen-grande").src = urlImagen;

    // Mostrar el elemento 'div' con la clase 'FotoPerra'
    document.querySelector(".FotoPerra").style.display = "block";
  });
});

// Agregar evento 'click' al botón para cerrar la imagen
document.querySelector(".cerrar").addEventListener("click", function () {
  // Ocultar el elemento 'div' con la clase 'FotoPerra'
  document.querySelector(".FotoPerra").style.display = "none";
});

// Obtener todas las imágenes con la clase 'foto'
var fotos = document.querySelectorAll(".imagen");
var cerrado = document.querySelectorAll(".cerrar");

fotos.forEach(function (foto) {
  foto.addEventListener("click", function (event) {
    var urlImagen = event.target.src;
    var imagenGrande = document.getElementById("imagen-grande");
    imagenGrande.src = urlImagen;
    document.querySelector(".FotoPerra").style.visibility = "visible";
  });
});

cerrado.forEach(function (cerrar) {
  cerrar.addEventListener("click", function (event) {
    document.querySelector(".FotoPerra").style.visibility = "hidden";
  });
});

// Agregar evento para detectar la tecla "esc" y cerrar la imagen
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelector(".FotoPerra").style.display = "none";
  }
});
