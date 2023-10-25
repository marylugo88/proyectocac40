
document.getElementById("header").innerHTML = `        
<div class="texto-header">
<h1><a href="index.html"><img src="img/logo.svg" alt="logo"></a> vemos hoy?</h1>
</div>
<div class="buscar-header">
<input type="text" class="buscar-header" name="searchInput" placeholder="Buscar...">
</div>

<div class="menu-header">
<div class="_layer -top"></div>
<div class="_layer -mid"></div>
<div class="_layer -bottom"></div>
</div>

<nav class="menuppal">
<ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="usuario.html">Usuario</a></li>
    <li><a href="peliculas.html">Películas</a></li>
    <li><a href="series.html">Series</a></li>
<<<<<<< HEAD
    <li><a href="contacto.html">Contacto</a></li>
=======
>>>>>>> f81b6735a0bd26cc07d7a13dbe34fd4f248803c4
</ul>
</nav>
</div>
`

document.getElementById("footer").innerHTML = `
<footer class="footer">

<div class="container-footer">

<div class="footer-img-link">
    <div class="footer-link">
        <div class="logo">
            <img src="img/logo.svg" alt="Logo">
        </div>
    </div>
    <div class="footer-link">
        <h3>Principal</h3>
        <ul>
<<<<<<< HEAD
            <li><a href="series.html">Series</a></li>
            <li><a href="peliculas.html">Peliculas</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="https://fast.com/es/" target="_blank">Prueba de velocidad</a></li>
=======
            <li><a href="#">Series</a></li>
            <li><a href="#">Peliculas</a></li>
            <li><a href="#">Ayuda</a></li>
            <li><a href="#">Prueba de velocidad</a></li>

>>>>>>> f81b6735a0bd26cc07d7a13dbe34fd4f248803c4
        </ul>
    </div>

    <div class="footer-link">
        <h3>Siguenos</h3>
<<<<<<< HEAD
        <div class="socials">      
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
=======
        <div class="socials">
            <a href="https://www.facebook.com/profile.php?id=61551870476388"><i class="fa-brands fa-facebook-f"></i></a>
>>>>>>> f81b6735a0bd26cc07d7a13dbe34fd4f248803c4
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/marylugo88/proyectocac40" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.python.org/ "target="_blank"><i class="fab fa-python"></i></a>
        </div>
        <h3><a href="contacto.html">Contacto</a></h3>

    </div>

</div>

<hr>
<div class="footer-text">
    <p>Politica de privacidad</p>
    <p>©Todos los derechos reservados</p>

</div>

</div>

</footer>
`
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

// validacion del formulario

const formulariou = document.getElementById('formulario-usuario');
const inputs = document.querySelectorAll('#formulario-usuario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break;
    }
}

const validarCampo(expresion, input, campo) => {
            if(expresion.test(input.value)){
                document.getElementById(´grupo__${campo}´).classList.remove('formulario__grupo-incorrecto');
                document.getElementById(´grupo__${campo}´).classList.add('formulario__grupo-correcto');
                document.querySelector(´grupo__${campo} i´).classList.add('fa-check-circle');
                document.querySelector(´grupo__${campo} i´).classList.remove('fa-times-circle');
            } else {
                
                document.getElementById(´grupo__${campo}´).classList.remove('formulario__grupo-incorrecto');
                document.getElementById(´grupo__${campo}´).classList.add('formulario__grupo-correcto');
                document.querySelector(´grupo__${campo} i´).classList.add('fa-check-circle');
                document.querySelector(´grupo__${campo} i´).classList.remove('fa-times-circle');
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarformulario);
});

formulariou.addEventListener('submit', (e) =>{
    e.preventDefault();
});