$(document).ready(function(){

  var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}
	});

// - - - - S M O O T H - S C R O L L - - - - -

	$("a[href^='#']").click(function(event) {
		event.preventDefault();

		var $this = $(this),
		target = this.hash,
		$target = $(target);

		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top
		}, 550, 'swing', function() {
			window.location.hash = target;
		});

	});
// - - - - - - - C A R O U S E L - - - - - - -
  $("#projectsCarousel").carousel({
      interval : 3000,
      paused: false
  });

// - - C O N T E N T - A N I M A T I O N S - -
  $('#navAnimate').css('opacity', 0);

  $('#navAnimate').waypoint(function() {
      $('#navAnimate').addClass('fadeIn');
    });

// - - - - - H O M E - A N I M A T E - - - - -

  $('#homeAnimateTwo').css('opacity', 0);

  $('#homeAnimateOne').css('opacity', 0);

  // }, { offset: '35%' });

// - - - - A B O U T - A N I M A T E - - - -

  $('#aboutAnimate').css('opacity', 0);

// - - - P R O J E C T - A N I M A T E - - - -

  $('#projectAnimate').css('opacity', 0);


  // - - - R E V I E W S - A N I M A T E - - -

    $('#quotesAnimate').css('opacity', 0);


// - - - C O N T A C T - A N I M A T E - - - -

  $('#contactAnimate').css('opacity', 0);


// B A C K G R O U N D C O L O R C H A N G E //


// - - - - O P T I O N 2 - D R I E R - - - - -

var setActive = function(id) {
    $('.activeLink').removeClass('activeLink');
    $(id).addClass('activeLink');
}

$("#home").waypoint(function(){
    setActive(".homeLink");
      $('body').css('background-color','rgb(186,222,245)');

        $('#homeAnimateTwo').addClass('fadeIn');
        $('#homeAnimateOne').addClass('fadeIn');
      }, { offset: '-.5%' });

// - - - - - - - A B O U T - - - - - - - -

$("#about").waypoint(function(direction){
    setActive(".aboutLink");
    $('body').css('background-color','rgb(200,179,223)');

    if (direction === 'down') {
      $('#aboutAnimate').addClass('fadeIn');
      $('#aboutAnimate').removeClass('fadeOut');
    } else if (direction === 'up') {
      $('#aboutAnimate').addClass('fadeOut');
      $('#aboutAnimate').removeClass('fadeIn');   }
});
// - - - - - - P R O J E C T - - - - - - -

$("#project").waypoint(function(direction){
    setActive(".projectLink");
    $('body').css('background-color','rgb(249,192,197)');

    if (direction === 'down') {
      $('#projectAnimate').addClass('fadeIn');
        $('#projectAnimate').removeClass('fadeOut');
    } else if (direction === 'up') {
      $('#projectAnimate').addClass('fadeOut');
      $('#projectAnimate').removeClass('fadeIn');   }
});

// - - - - - - - Q U O T E S - - - - - - - -
$("#quotes").waypoint(function(direction){
    setActive(".quotesLink");
    $('body').css('background-color','rgb(186,215,170)');

    if (direction === 'down') {
      $('#quotesAnimate').addClass('fadeIn');
      $('#quotesAnimate').removeClass('fadeOut');
    } else if (direction === 'up') {
      $('#quotesAnimate').addClass('fadeOut');
      $('#quotesAnimate').removeClass('fadeIn');   }
});
// - - - - - - C O N T A C T - - - - - - - -

$("#contact").waypoint(function(direction){
    setActive(".contactLink");
    $('body').css('background-color','rgb(255,234,126)');

    if (direction === 'down') {
      $('#contactAnimate').addClass('fadeIn');
      $('#contactAnimate').removeClass('fadeOut');
    } else if (direction === 'up') {
      $('#contactAnimate').addClass('fadeOut');
      $('#contactAnimate').removeClass('fadeIn');   }
});
// - - - - T E S T I M O N I A L S - - - -

var quotes = $('div[id^="quote-"]').hide(),
    i = 0;

(function cycle() {
    quotes.eq(i).fadeIn(500)
              .delay(8000)
              .fadeOut(500, cycle);

    i = ++i % quotes.length;
})();


// - - - - - - - - - E N D - - - - - - - - -

});
