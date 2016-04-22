// smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#mainCarousel"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$('.eventsCarousel').carousel({
    pause: true,
    interval: false
});


// header changes size when you scroll down
$(function() {

	var docElem = document.documentElement,
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$('#caucinav').addClass('caucinav-shrink');
		}
		else {
			$('#caucinav').removeClass('caucinav-shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();
});






(function() {
	[].slice.call(document.querySelectorAll('#caucinav')).forEach(function(menu) {
		var menuItems = menu.querySelectorAll('.navlink'),
			setCurrent = function(ev) {
        // $('#caucinav').removeClass('caucinav-shrink');
				// ev.preventDefault();
				var item = ev.target.parentNode; // li
				// return if already current
				if (classie.has(item, 'navlink-active')) {
					return false;
				}
				// remove current
				classie.remove(menu.querySelector('.navlink-active'), 'navlink-active');
				// set current
				classie.add(item, 'navlink-active');
			};
		[].slice.call(menuItems).forEach(function(el) {
			el.addEventListener('click', setCurrent);
		});
	});
	[].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
		link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
		new Clipboard(link);
		link.addEventListener('click', function() {
			classie.add(link, 'link-copy--animate');
			setTimeout(function() {
				classie.remove(link, 'link-copy--animate');
			}, 300);
		});
	});
})(window);
