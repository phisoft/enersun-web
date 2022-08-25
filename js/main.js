$(document).ready(function(){
	category();
	product();
	md();
});

var category = function(){
	var i = 0;
	const cat = [
			['All', 'active col-1 text-center', '*'],
			['LED', 'col-1 text-center','.led'],
			['Energy Saving Bulb', 'col-4 text-center','.energysavingbulb'],
			['Electrical', 'col-2 text-center','.electrical'],
			['Decoration Lamp', 'col-4 text-center','.decorationlamp']
		]

		$.each(cat, function(){
			var ct = '<a href="#" class="'+ cat[i][1] +'" data-filter="'+ cat[i][2] +'">'+ cat[i][0] +'</a>';
			$("#filters").append(ct)
			i++;
		});
}

var product = function(){
	var i = 0;
	const prod = [
		['led', 'LED Bulb 12W – LED B12 120PA65', 'RM 12.00', '/images/item/led1.png'],
		['led', 'LED TUBE – LED T8 10W', 'RM 8.00', 'images/item/led2.png'],
		['led', 'LED DOWNLIGHT – THB – 12W/18W – CLC','RM 26.00 – RM 41.90', 'images/item/led3.png'],
		['led', 'LED FLOOD LIGHT 100W – Economical Series','158.00 – RM 208.00', 'images/item/led4.png'],
		['led', 'LED HIGH-BAY LAMP 100W/150W/200W/240W – GL UFO Series','550.00 – RM 850.00', 'images/item/led5.png'],
		['energysavingbulb', 'Energy Saving Bulb – Spiral 24W E27', 'RM 9.50', 'images/item/energysavingbulb1.png'],
		['electrical', 'SET OF 4 / 3 LED Track Light 7W/12W/20W + 1Meter Track Rail/ COB LED Track Light / Warm white / Daylight', 'RM 56.00 – RM 75.50', 'images/item/electrical1.jpg'],
		['decorationlamp', 'Flexible Neon Strip Light', 'RM 15.00 – RM 1,500.00', 'images/item/decorationlamp1.jpg']
	]

	$.each(prod, function(){
		var content = '<h6 class="text-bold text-dark">'+ prod[i][1] +'</h6><p class="text-primary">'+ prod[i][2] +'</p>';
		var img = '<img src="'+ prod[i][3] +'" class="col-11 img-fluid mb-3" alt="Images" /><div class="overlay"><span class="wrap-icon icon-link2"></span><div class="portfolio-item-content">'+ content +'</div></div>';
		var data = 'data-category="'+ prod[i][0] +'" data-name="'+ prod[i][1] +'" data-price="'+ prod[i][2] +'" data-img="'+ prod[i][3] +'"';
		var btn = '<button type="button" class=" btn bg-white border-0 p-3 btn-secondary" data-toggle="modal" data-target="#modal" '+ data +'>'+ img +'</button>';
		var div = '<div class="custom-shadow">'+ btn +'</div>';
		var main = '<div class="item '+ prod[i][0] +' col-sm-6 col-md-6 col-lg-3 mb-3">'+ div +'</div>';
		$("#posts").append(main)
		i++;
	});
}

var md = function(){
	const dc = [
		['led','LED Bulb' ,'The LED light bulb is bright LED lighting with excellent light quality. This bulb is the perfect replacement for your matted traditional bulbs. It is energy saving and instant light when switched on.'],
		['energysavingbulb','Energy Saving Bulb', ''],
		['electrical','Electrical', ''],
		['decorationlamp','Decoration Lamp', '']
	]

	$('#modal').on('shown.bs.modal', function(event){
		var button = event.relatedTarget;
		var img = button.getAttribute("data-img");
		var rm = button.getAttribute("data-price");
		var name = button.getAttribute("data-name");
		var cat = button.getAttribute("data-category");
		var title = modal.querySelector(".m_name");
		var price = modal.querySelector(".m_price");
		var image = modal.querySelector(".m_img");
		var category = modal.querySelector(".m_cat");
		var description = modal.querySelector(".m_desc");
		var i = 0;
		$.each(dc, function(){
			if (cat == dc[i][0]) {
				category.textContent = dc[i][1];
				description.textContent = dc[i][2];
			}
			else {
				i++;
			}
		});
		title.textContent = name;
		price.textContent = rm;
		image.setAttribute("src", img);
	});
}

jQuery(function($) {
	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


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
