// Esperar a que el DOM este cargado
$(document).ready(function () { 
    
    
    // Sección preguntas frecuentes
        // Mostrar - ocultar contenido de panel

        $('.panel_cabecera').on('click', function () {
        $(this).toggleClass('bg_cabecera').siblings('.panel_contenido').slideToggle();
        // Rotar imagen 
        $(this).children('img').toggleClass('img_rotate');
        });

    
    
    
    
    // Animacion de ancla 
    
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    
    
    
    
    
    
    
    // Cambiar navbar en pantalla chica
    
    var $pantalla = $(window),
        $navbar = $('.content').find('nav');


    if ($pantalla.width() <= 768) {
        // Cambiar logo 
        $('.navbar').children('a').children('img').attr('src', 'img/logo.png');
        // Cambiar colores de navbar 
        $navbar.css('background-color', 'aliceblue');
        // Botones
        $navbar.children('.nav_btns').removeClass('order-1').children('a').addClass('btn-primary');       
        
    }
    

    $pantalla.resize(function () {
        if ($pantalla.width() <= 768) {
            // Cambiar en resize
            // Navbar
            $navbar.css('background-color', 'aliceblue');
            // Logo
            $('.navbar').children('a').children('img').attr('src', 'img/logo.png');
            // Botones
            $navbar.children('.nav_btns').removeClass('order-1').children('a').addClass('btn-primary');
        } else if ($pantalla.width() <= 1920) {
            // Logo
            $('.navbar').children('a').children('img').attr('src', 'img/logo2.png');
            // Navbar
            $navbar.css('background-color', 'inherit');
            // Botones
            $navbar.children('.nav_btns').addClass('order-1').children('a').removeClass('btn-primary');
            $navbar.children('.collapse').find('a').css('color', 'white');
        }
    });
    
    // Cambiar navbar en scroll   
    
    if ($pantalla.width() <= 768) {
        // Desactivar efecto en pantalla chica
        $pantalla.off('scroll');

    } else if ($pantalla.width() <= 1920) {
        $pantalla.on('scroll', function () {
            if ($pantalla.scrollTop()) {
                // Ajustar tamaño
                $('.navbar').addClass('navbar_scrl');
                // Cambiar logo 
                $('.navbar').children('a').children('img').addClass('img_scrl').attr('src', 'img/logo.png');
                // Cambiar colores de navbar 
                $navbar.css('background-color', 'aliceblue');
                // Botones
                $navbar.children('.nav_btns').children('a').addClass('btn-primary').addClass('navbtns_scrl');
                $navbar.children('.collapse').find('a').css('color', '#3977b1');
            } else { 
                // Ajustar tamaño
                $('.navbar').removeClass('navbar_scrl');
                // Logo
                $('.navbar').children('a').children('img').removeClass('img_scrl').attr('src', 'img/logo2.png');
                // Navbar
                $navbar.css('background-color', 'inherit');
                // Botones
                $navbar.children('.nav_btns').addClass('order-1').children('a').removeClass('btn-primary').removeClass('navbtns_scrl');
                $navbar.children('.collapse').find('a').css('color', 'white');
            }
        });
    }
    
    $pantalla.resize(function () {
        if ($pantalla.width() <= 768) {
            // Desactivar efecto en pantalla chica
            $pantalla.off('scroll');
            $navbar.children('.collapse').find('a').css('color', '#3977b1');

        } else if ($pantalla.width() <= 1920) {
            $pantalla.on('scroll', function () {
                if ($pantalla.scrollTop()) {
                    // Ajustar tamaño
                    $('.navbar').addClass('navbar_scrl');
                    // Cambiar logo 
                    $('.navbar').children('a').children('img').addClass('img_scrl').attr('src', 'img/logo.png');
                    // Cambiar colores de navbar 
                    $navbar.css('background-color', 'aliceblue');
                    // Botones
                    $navbar.children('.nav_btns').children('a').addClass('btn-primary').addClass('navbtns_scrl');
                    $navbar.children('.collapse').find('a').css('color', '#3977b1');
                } else {
                    // Ajustar tamaño
                    $('.navbar').removeClass('navbar_scrl');
                    // Logo
                    $('.navbar').children('a').children('img').removeClass('img_scrl').attr('src', 'img/logo2.png');
                    // Navbar
                    $navbar.css('background-color', 'inherit');
                    // Botones
                    $navbar.children('.nav_btns').addClass('order-1').children('a').removeClass('btn-primary').removeClass('navbtns_scrl');
                    $navbar.children('.collapse').find('a').css('color', 'white');
                }
            });
        }
    });
    
   
    
    // Animación pantalla inicio 
    
    var $elementos = $('.inicio').find('.container');
    
    $elementos.children('h1').toggleClass('animated fadeIn');
    
    setTimeout(function(){
        $elementos.children('hr').css('visibility', 'visible').toggleClass('animated fadeInLeft');
    },400);
    
    setTimeout(function(){
        $elementos.children('p').css('visibility', 'visible').toggleClass('animated fadeIn');
    },700);
    
    setTimeout(function(){
        $elementos.find('button').css('visibility', 'visible').toggleClass('animated fadeIn');
    },750);
    
    clearTimeout();
    
    
    
    
    
    
    
    // Sección proceso
    
    var $imagenes = $('.proceso').find('.secciones');

    // Ajustar en pantalla chica
    if ($pantalla.width() <= 768) { 
        $imagenes.children('img').addClass('order-1');
        // Ajustar margenes
        $imagenes.children('div').removeClass().addClass('row mx-auto');
    }    
                     
    // En resize
    $pantalla.resize(function () {
        // Eliminar en chica
        if ($pantalla.width() <= 1200) {            
            // Ajustar margenes en chica            
            $imagenes.children('div').removeClass().addClass('row mx-auto');
        } else if ($pantalla.width() <= 1920) {
            // Añadir en grande
            $imagenes.children('img').removeClass('order-1');
            // Ajustar margenes en grande            
            $imagenes.children('div').removeClass().addClass('row col-lg-6 col-sm-12');
        }
    });
    
    
    // Animaciones proceso 
    $pantalla.scroll(function () {
        var $positionTop = $(document).scrollTop();
            
        console.log($positionTop);
        
        // Etapa 1

        if ($positionTop > 400) {
            // Titulo
            $('.proceso').find('h2').css('visibility', 'visible').addClass('animated fadeIn');
            // Textos 
            setTimeout(function () {
                $('.proceso').find('.numero').eq(0).css('visibility', 'visible').addClass('animated fadeIn');
            }, 200);
            setTimeout(function () {
                $('.proceso').find('p').eq(0).css('visibility', 'visible').addClass('animated fadeInUp');
            }, 600);
            setTimeout(function () {
                $('.proceso').find('p').children('span').eq(0).css('visibility', 'visible').addClass('animated fadeIn');
            }, 700);
            clearTimeout();
        }
        // Etapa 2
        
        if ($positionTop > 700){
            // Textos 
            setTimeout(function () {
                $('.proceso').find('.numero_odd').eq(0).css('visibility', 'visible').addClass('animated fadeIn');
            }, 200);
            setTimeout(function () {
                $('.proceso').find('p').eq(1).css('visibility', 'visible').addClass('animated fadeInUp');
            }, 600);
            setTimeout(function () {
                $('.proceso').find('p').children('span').eq(1).css('visibility', 'visible').addClass('animated fadeIn');
            }, 700);
            clearTimeout();            
        }
        // Etapa 3
        
        if ($positionTop > 900){
            // Textos 
            setTimeout(function () {
                $('.proceso').find('.numero').eq(1).css('visibility', 'visible').addClass('animated fadeIn');
            }, 200);
            setTimeout(function () {
                $('.proceso').find('p').eq(2).css('visibility', 'visible').addClass('animated fadeInUp');
            }, 600);
            setTimeout(function () {
                $('.proceso').find('p').children('span').eq(2).css('visibility', 'visible').addClass('animated fadeIn');
            }, 700);
            clearTimeout();            
        }
        // Etapa 4
        
        if ($positionTop > 1100){
            // Textos 
            setTimeout(function () {
                $('.proceso').find('.numero_odd').eq(1).css('visibility', 'visible').addClass('animated fadeIn');
            }, 200);
            setTimeout(function () {
                $('.proceso').find('p').eq(3).css('visibility', 'visible').addClass('animated fadeInUp');
            }, 600);
            setTimeout(function () {
                $('.proceso').find('p').children('span').eq(3).css('visibility', 'visible').addClass('animated fadeIn');
            }, 700);
            clearTimeout();            
        }
        // Etapa 5
        
        if ($positionTop > 1300){
            // Textos           
            setTimeout(function () {
                $('.proceso').find('.imagenes').find('#smile').css('visibility', 'visible').addClass('animated fadeIn');
            }, 200);
            setTimeout(function () {
                $('.proceso').find('.imagenes').children('img').css('visibility', 'visible').addClass('animated fadeIn');
            }, 350);
            clearTimeout();            
        }
        
        
        
        
        
        
        
        
        
        
        });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});