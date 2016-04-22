function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    'img/alley.jpg',
    'img/aurora.jpg',
    'img/beach.jpg',
    'img/bears.jpg',
    'img/boat.jpg',
    'img/bread.jpg',
    'img/bike.jpg',
    'img/bridge.jpg',
    'img/cabin.jpg',
    'img/castle.jpg',
    'img/cliff.jpg',
    'img/escalator.jpg',
    'img/flowers.jpg',
    'img/food.jpg',
    'img/forest.jpg',
    'img/frost.jpg',
    'img/girl+river.jpg',
    'img/guy+dog.jpg',
    'img/hills.jpg',
    'img/kiss.jpg',
    'img/lake.jpg',
    'img/mountains.jpg',
    'img/ocean-cliffs.jpg',
    'img/paint.jpg',
    'img/passion.jpg',
    'img/pug.jpg',
    'img/river.jpg',
    'img/shoes.jpg',
    'img/snow.jpg',
    'img/waves.jpg'
]);


$(function() {
  $('a#about-toggle').click(function() {
     $('#about').slideToggle();
     $('#about-toggle').removeClass('menu__link--current').css({'color':'#bdbdbd'});
     $('#contact').slideUp();
     return false;
   });

  $('a#contact-toggle').click(function() {
     $('#contact').slideToggle();
     $('#contact-toggle').removeClass('menu__link--current').css({'color':'#bdbdbd'});
     $('#about').slideUp();
     return false;
   });

    $(window).resize(function() {
      if ($(window).width() < 768) {
        $('#contact').slideUp();
        $('#about').slideUp();

        $('a#about-toggle').click(function() {
          $('#contact').slideUp();
        });

        $('a#contact-toggle').click(function() {
          $('#about').slideUp();
        });
      }
    });

    if ($('div').hasClass('animals')) {
       $('.animals img').addClass('fade-grid animalsfade');
    }

    if ($('div').hasClass('yummy')) {
       $('.yummy img').addClass('fade-grid yumfade');
    }

    if ($('div').hasClass('foresty')) {
       $('.foresty img').addClass('fade-grid woodfade');
    }

    if($('div').hasClass('watery')) {
       $('.watery img').addClass('fade-grid waterfade');
    }

    if($('div').hasClass('people')) {
       $('.people img').addClass('fade-grid peoplefade');
    }

    if($('div').hasClass('industrial')) {
       $('.industrial img').addClass('fade-grid cityfade');
    }

    if($('div').hasClass('winter')) {
       $('.winter img').addClass('fade-grid winterfade');
    }

    ($('.menu__breadcrumbs a:first-child').on('click', function() {
      ($('.menu__breadcrumbs a:not(:first-child)').addClass('fadingOut'));
    })
  );
});



$(function() {
  var $grid = $('#grid').isotope({
    itemSelector: '.pic-grid',
    percentPosition: true,
    filter: '*',
    transitionDuration: '0.8s',
    // only opacity for reveal/hide transition
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    }
  });

  $('.cat').click(function(){
    var selector = $(this).attr('data-filter');
    $grid.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });
  return false;
  });
});
