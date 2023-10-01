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


