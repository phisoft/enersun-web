jQuery(function($) {
	"use strict";


	if ($(window).width() > 991.98) {
	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });
}


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-properties').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	/**
   * Scrolls to an element with header offset
   */
	 const scrollto = (el) => {
		let header = select('#header')
		let offset = header.offsetHeight
	
		if (!header.classList.contains('fixed-top')) {
		  offset += 70
		}
	
		let elementPos = select(el).offsetTop
		window.scrollTo({
		  top: elementPos - offset,
		  behavior: 'smooth'
		})
	  }

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).resize(function(){
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });
  
  $container.isotope({ filter: '*' });

  $('#filters').on( 'click', 'a', function(e) {
  	e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#filters a').removeClass('active');
    $(this).addClass('active');
  });

  $container.imagesLoaded()
  .progress( function() {
    $container.isotope('layout');
  })
  .done(function() {
  	$('.gsap-reveal-img').each(function() {
			var html = $(this).html();
			$(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
		});

  	var controller = new ScrollMagic.Controller();

  	var revealImg = $('.gsap-reveal-img');

  	if ( revealImg.length ) {
  		var i = 0;
			revealImg.each(function() {

				var cover = $(this).find('.cover'),
					revealContent = $(this).find('.reveal-content'),
					img = $(this).find('.reveal-content img');


				var tl2 = new TimelineMax();


				setTimeout(function() {

					tl2
						tl2.set(img, {  scale: '2.0', autoAlpha: 1, })
						.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
							tl2.set(revealContent, { autoAlpha: 1 });
							tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
							tl2.to(img, 2, { scale: '1.0', ease:Expo.easeOut }, '-=1.5');
						} } )

				}, i * 700);

				

				var scene = new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
				})
				.setTween(tl2)
				.addTo(controller);

				i++;

			});
		}
  })

  $('.js-filter').on('click', function(e) {
  	e.preventDefault();
  	$('#filters').toggleClass('active');
  });
	
  $('.ajax-load-page').on('click', function(e) {
		
	var id = $(this).data('id'),
		href = $(this).attr('href');

	if ( $('#portfolio-single-holder > div').length ) {
		$('#portfolio-single-holder > div').remove();
	} 

	TweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });

	$('html, body').animate({
	scrollTop: $('#portfolio-section').offset().top - 50
	}, 700, 'easeInOutExpo', function() {
	});
	
	setTimeout(function(){
		loadPortfolioSinglePage(id, href);
	}, 100);

	e.preventDefault();

});

// Close
$('body').on('click', '.js-close-portfolio', function() {

	setTimeout(function(){
		$('html, body').animate({
		scrollTop: $('#portfolio-section').offset().top - 50
		}, 700, 'easeInOutExpo');
	}, 200);

	TweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
	TweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
		TweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });

	} });
	
});
  
});



jQuery(function($) {
	
	'use strict';
	loader();
	siteMenuClone();
	mobileToggleClick();
	onePageNavigation();
	siteIstotope();
	portfolioItemClick();
	owlCarouselPlugin();
	floatingLabel();
	scrollWindow();
	counter();
	jarallaxPlugin();
	contactForm();
	stickyFillPlugin();
	animateReveal();

});

var siteIstotope = function() {
	var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).resize(function(){
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });
  
  $container.isotope({ filter: '*' });

  $('#filters').on( 'click', 'a', function(e) {
  	e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#filters a').removeClass('active');
    $(this).addClass('active');
  });

  $container.imagesLoaded()
  .progress( function() {
    $container.isotope('layout');
  })
  .done(function() {
  	$('.gsap-reveal-img').each(function() {
			var html = $(this).html();
			$(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
		});

  	var controller = new ScrollMagic.Controller();

  	var revealImg = $('.gsap-reveal-img');

  	if ( revealImg.length ) {
  		var i = 0;
			revealImg.each(function() {

				var cover = $(this).find('.cover'),
					revealContent = $(this).find('.reveal-content'),
					img = $(this).find('.reveal-content img');


				var tl2 = new TimelineMax();


				setTimeout(function() {

					tl2
						tl2.set(img, {  scale: '2.0', autoAlpha: 1, })
						.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
							tl2.set(revealContent, { autoAlpha: 1 });
							tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
							tl2.to(img, 2, { scale: '1.0', ease:Expo.easeOut }, '-=1.5');
						} } )

				}, i * 700);

				

				var scene = new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
				})
				.setTween(tl2)
				.addTo(controller);

				i++;

			});
		}
  })

  $('.js-filter').on('click', function(e) {
  	e.preventDefault();
  	$('#filters').toggleClass('active');
  });

}

// load ajax page
var portfolioItemClick = function() {
	$('.ajax-load-page').on('click', function(e) {
		
		var id = $(this).data('id'),
			href = $(this).attr('href');

		if ( $('#portfolio-single-holder > div').length ) {
			$('#portfolio-single-holder > div').remove();
		} 

		TweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });

		$('html, body').animate({
    	scrollTop: $('#portfolio-section').offset().top - 50
		}, 700, 'easeInOutExpo', function() {
		});
		
		setTimeout(function(){
			loadPortfolioSinglePage(id, href);
		}, 100);

		e.preventDefault();

	});

	// Close
	$('body').on('click', '.js-close-portfolio', function() {

		setTimeout(function(){
			$('html, body').animate({
	    	scrollTop: $('#portfolio-section').offset().top - 50
			}, 700, 'easeInOutExpo');
		}, 200);

		TweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
		TweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });

		} });
		
	});
};