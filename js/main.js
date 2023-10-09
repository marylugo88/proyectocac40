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
                <li><a href="#">Series</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Recitales</a></li>
                <li><a href="#">Ayuda</a></li>
                <li><a href="#">Prueba de velocidad</a></li>

            </ul>

        </div>

        <div class="footer-link">
            <h3>Siguenos</h3>
            <div class="socials">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.python.org/"><i class="fab fa-python"></i></a>
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