$(function() {
	
	// browser window scroll (in pixels) after which the "back to top" link is shown
		var offset = 300,
			//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
			offset_opacity = 300,
//			//duration of the top scrolling animation (in ms)
			scroll_top_duration = 1000,
			//grab the "back to top" link
			$back_to_top = $('.cd-top');

		//hide or show the "back to top" link
		$(window).scroll(function(){
			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.addClass('cd-fade-out');
			}
		});

		//smooth scroll to top
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
			 	}, scroll_top_duration
			);
		});

	$('#da-slider').cslider({
        autoplay: true,
        bgincrement: 0
    });


    // Testimonial carousel
    $('#fade-quote-carousel').carousel({
        interval: 5000,
         pause: 'hover',
    });

    //mini-nav
    $(window).scroll(function() {

        if ($(window).scrollTop() > 400) {
            $('.mini-header').addClass('sticky');
        } else {
            $('.mini-header').removeClass('sticky');
        }
	});
    
    
    $(window).scroll(function() {

        if ($(window).scrollTop() > 400) {
            $('.site-header').addClass('hide-header');
        } else {
            $('.site-header').removeClass('hide-header');
        }
	});
       
    $('ul.nav li.dropdown').hover(function() {
   		$(this).find('.dropdown-menu').stop(true, true).delay(150).fadeIn();
    }, function() {
  	
  	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
    });
    
    //paralax
    $('.parallax-window').parallax({imageSrc: 'assets/img/hero.jpg'});
    });

    // skaiciai
    $("div[class^='section-'], div[id^='section-']").waypoint(function() {

    $(this).find("h3").each(function(){
        var finalValue = $(this).attr("data-final-value");
        $(this).animateNumber({
            number: finalValue,
            easing: 'easeOutQuint'
			}, 3000);
		});
        }, {
			triggerOnce: true,
			offset: "90%"
    });


// about city college page scroll
 $('.btn').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 1000);
        return false;
});
// side-menu sticker (about-page)
 $('#sticker li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 1000);
        return false;
});

//stiker-position 
$("#sticker").sticky({topSpacing:80});

$(window).scroll(function() {

    if ($(window).scrollTop() > 2800) {
        $('#sticker').addClass('hide-nav');
    } else {
        $('#sticker').removeClass('hide-nav');
    }
});

$('.more').click(function(){
		var $this = $(this);
		$this.toggleClass('more');
		if($this.hasClass('more')){
			$this.text('Show more');			
		} else {
			$this.text('Show less');
		}
	});


// side-menu sticker (ed-page)
 $('#sticker-ed li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 1000);
        return false;
});

//stiker-position 
$("#sticker-ed").sticky({topSpacing:80});

$(window).scroll(function() {

    if ($(window).scrollTop() > 3100) {
        $('#sticker-ed').addClass('hide-nav');
    } else {
        $('#sticker-ed').removeClass('hide-nav');
    }
});

// Masonry
var Masonry = function() {
    "use strict";

    // Handle Masonry Grid
    var handleMasonryGrid = function() {
        $(document).ready(function(){
            var $container = $('.masonry-grid');
            // initialize Masonry after all images have loaded
            $container.imagesLoaded(function() {
                $container.masonry({
                    itemSelector: '.masonry-grid-item',
                    columnWidth: 1,
                    percentPosition: true,
                    transitionDuration: '0.5s'
                });
            });
        });
    }

    return {
        init: function() {
            handleMasonryGrid(); // initial setup for masonry grid
        }
    }
}();

$(document).ready(function() {
    Masonry.init();
});









