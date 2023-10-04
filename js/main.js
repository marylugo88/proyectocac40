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
        <li><a href="recitales.html">Recitales</a></li>
    </ul>
    </nav>
    </div>
    `
    
    document.getElementById("footer").innerHTML = `
    <div class="redes-sociales">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="contacto">
    <a href="#"><i class="fas fa-envelope"></i> Correo Electrónico</a>
    <a href="#"><i class="fas fa-phone"></i> Teléfono</a>
    </div>
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