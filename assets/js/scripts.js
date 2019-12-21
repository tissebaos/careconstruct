/*
Author       : Tissebaos
Template Name: CareConstruct - Construction Business Html5 Template
Version      : 1.0
*/

(function ($) {
    'use strict';

    jQuery(document).on('ready', function() {


        /* 1. PRELOADER JS */

        $(window).on('load', function() {
            function fadeOut(el) {
                el.style.opacity = 0.4;
                var last;
                var tick = function() {
                    el.style.opacity = +el.style.opacity - (new Date() - last) / 600;
                    last = +new Date();
                    if (+el.style.opacity > 0) {
                        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 100);
                    } else {
                        el.style.display = "none";
                    }
                };
                tick();
            }
            var pagePreloaderId = document.getElementById("page-preloader");
            setTimeout(function() {
                fadeOut(pagePreloaderId);
            }, 1000);
        });


        /* 2. JQUERY STICKY MENU */

        $(".sticky-menu").sticky({
            topSpacing: 0
        });


        /* 3. MENU JS */

        $('nav#dropdown').meanmenu({
            meanMenuContainer: '.mobile-menu-area',
            meanScreenWidth: "991"
        });


        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 200) {
                $('.mainmenu-area').addClass('menu-animation');
            } else {
                $('.mainmenu-area').removeClass('menu-animation');
            }
        });

        $('a.js-scroll-trigger').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 48
            }, 1000);
            e.preventDefault();
        });
		
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '.mainmenu-area',
            offset: 54
        });
		
        /* 4. SECTIONS BACKGROUNDS */

        var pageSection = $("section,div");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
		
		


        /* 5. COUNTDOWN JS */

        $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
        /* END COUNTDOWN JS */


        /* 6. HOME SLIDER JS */

        $('.slides').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true,
            items: 1,
            nav: true,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"]
        });


        /* 7. SIMPLE IMAGE SLIDER JS */

        $('.simple-image-slider').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            items: 1,
            nav: false
        });


        /* 8. PORTFOLIO SLIDER JS */

        $('.portfolio-slider').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 4000,
            dots: false,
            nav: true,
            navText: ["<i class='icofont icofont-simple-left'></i>", "<i class='icofont icofont-simple-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
		

        /* 9. TEAM SLIDER JS */
        $('.team-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });


        /* 10. TESTIMONIAL SLIDER JS */

        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                }
            }
        });


        /* 11. CLIENT SLIDER JS */
        $('.client-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ["<i class='icofont icofont-simple-left'></i>", "<i class='icofont icofont-simple-right'></i>"],
            autoplay: true,
            autoplayTimeout: 3000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });


		
		
        /* 12. PRETTYPHOTO JS */

        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            show_title: true,
            theme: 'facebook',
            deeplinking: false
        });


        /* 13. VENOBOX JS */

        $('.venobox').venobox({
            numeratio: true,
            titleattr: 'data-title',
            titlePosition: 'bottom',
            spinner: 'rotating-plane',
            spinColor: '#f4cb10'
        });


        /* 14. ACCORDION JS  */

        var selectIds = $('#panel1,#panel2,#panel3,#panel4,#panel5,#panel6,#panel7,#panel8,#panel9,#panel10,#panel11,#panel12,#panel13,#panel14,#panel15');
        $(function($) {
            selectIds.on('show.bs.collapse hidden.bs.collapse', function() {
                $(this).prev().find('.icofont').toggleClass('icofont-minus icofont-plus');
            })
        });



        /* 15. GOOGLE MAP */

        function initialize() {
            var mapOptions = {
                zoom: 11,
                scrollwheel: false,
                center: new google.maps.LatLng(40.7143528, -74.0059731)
            };
            var map = new google.maps.Map(document.getElementById('map'),
                mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.7143528, -74.0059731),
                animation: google.maps.Animation.BOUNCE,
                icon: 'assets/img/map-marker.png',
                map: map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);


    });


    /* 16. WOW ANIMATION JS */

    new WOW().init();

    /* 17. MIXITUP JS */

    $('.portfolio-items').mixItUp();


			
})(jQuery);
