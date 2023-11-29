document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('miFormulario').addEventListener('submit', function (event) {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    // Validación del campo de nombre
    if (nombre.length < 3 || nombre.length > 50 || /\d/.test(nombre)) {
        // La condición /\d/.test(nombre) verifica si hay algún número en el nombre.
        alert('El campo de nombre debe tener entre 3 y 50 caracteres y no debe contener números.');
        event.preventDefault();
    }

    // Validación del campo de email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        event.preventDefault();
    }

    // Validación del campo de mensaje
    if (mensaje.length > 200) {
        alert('El campo de mensaje no puede contener más de 200 caracteres.');
        event.preventDefault();
    }
});
});



// selector
var menu = document.querySelector('.menu-header');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
    $('.menu-header').click(function() {
        $('.menu-header').toggleClass('is-active');
        $('.menuresponsive').toggleClass('is-active');
        return false;
    });
});*/

/*Carrusel*/
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
fila.scrollLeft += fila.offsetWidth;

const indicadorActivo = document.querySelector('.indicadores .activo');
if(indicadorActivo.nextSibling){
    indicadorActivo.nextSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
fila.scrollLeft -= fila.offsetWidth;

const indicadorActivo = document.querySelector('.indicadores .activo');
if(indicadorActivo.previousSibling){
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
}
});

// ? ----- ----- Paginacion de carrusel ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
const indicador = document.createElement('button');

if(i === 0){
    indicador.classList.add('activo');
}

document.querySelector('.indicadores').appendChild(indicador);
indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
pelicula.addEventListener('mouseenter', (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
        elemento.classList.add('hover');
    }, 300);
});
});

fila.addEventListener('mouseleave', () => {
peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
}); /*Carrusel*/ 


