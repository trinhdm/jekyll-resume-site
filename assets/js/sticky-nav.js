jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "menu" link is shown
	var offset = 300;

	var navigationContainer = $('#hidden-sticky-nav'),
		mainNavigation = navigationContainer.find('#sticky-nav ul');

	//hide or show the "menu" link
	checkMenu();
	$(window).scroll(function(){
		checkMenu();
	});

	//open or close the menu clicking on the bottom "menu" link
	$('.sticky-trigger').on('click', function(){
		$(this).toggleClass('menu-is-open');
		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

	});

	function checkMenu() {
		if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
			navigationContainer.addClass('is-fixed').find('.sticky-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				mainNavigation.addClass('has-transitions');
        // $('button.trigger').addClass('hidden');
			});
		} else if ($(window).scrollTop() <= offset) {
			//check if the menu is open when scrolling up
			if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
				//close the menu with animation
				mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//wait for the menu to be closed and do the rest
					mainNavigation.removeClass('is-visible is-hidden has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.sticky-trigger').removeClass('menu-is-open');
          // $('button.trigger').removeClass('hidden');
				});
			//check if the menu is open when scrolling up - fallback if transitions are not supported
			} else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
					mainNavigation.removeClass('is-visible has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.sticky-trigger').removeClass('menu-is-open');
			//scrolling up with menu closed
			} else {
				navigationContainer.removeClass('is-fixed');
				mainNavigation.removeClass('has-transitions');
        // $('button.trigger').removeClass('hidden');
			}
		}
	}

	$(window).scroll(function() {

		if ($(this).scrollTop() + $(window).height() > $(document).height() - 160)
     {
        $('.sticky-trigger').stop().fadeTo(200,0).css({'pointer-events': 'none'});
				$('.sticky-trigger').removeClass('menu-is-open');
				mainNavigation.removeClass('is-visible has-transitions');
     }
    else
     {
      $('.sticky-trigger').stop().fadeTo(200,1).css({'pointer-events': 'auto'});
     }

//    if($(window).scrollTop() + $(window).height() > $(document).height() - 220) {
//
// 		 	$(window).unbind('scroll');
// 		 	mainNavigation.removeClass('is-visibles');
// 		 	mainNavigation.addClass('is-hidden');
// 		 	navigationContainer.removeClass('is-fixed');
//
// 		 $('.sticky-trigger').removeClass('menu-is-open');
//    } else if($(window).scrollTop() + $(window).height() < $(document).height() - 230) {
// 		 $(window).bind('scroll');
// 		 navigationContainer.addClass('is-fixed');
// 		 mainNavigation.addClass('has-transitions');
// 		 mainNavigation.removeClass('is-visible');
// 	 }
	});
});
