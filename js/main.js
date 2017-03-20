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
		}, 300, 'swing', function() {
			window.location.hash = target;
		});

	});

  $("#projectsCarousel").carousel({
      interval : 3000,
      paused: false
  });

// C O N T E N T - A N I M A T I O N S - - - - -
  $('#navAnimate').css('opacity', 0);

  $('#navAnimate').waypoint(function() {
      $('#navAnimate').addClass('fadeIn');
  }, { offset: '35%' });

// H O M E - A N I M A T E - - - - - - - - - - -

  $('#homeAnimateTwo').css('opacity', 0);

  $('#homeAnimateTwo').waypoint(function() {
      $('#homeAnimateTwo').addClass('fadeInUp');
  }, { offset: '35%' });


  $('#homeAnimateOne').css('opacity', 0);

  $('#homeAnimateOne').waypoint(function() {
      $('#homeAnimateOne').addClass('fadeInLeft');
  }, { offset: '35%' });

// A B O U T - A N I M A T E - - - - - - - - - - -

  $('#aboutAnimate').css('opacity', 0);

  $('#aboutAnimate').waypoint(function(direction) {
    if (direction === 'down') {
      $('#aboutAnimate').addClass('fadeInRight');
      $('#aboutAnimate').removeClass('fadeOutLeft');
    } else if (direction === 'up') {
      $('#aboutAnimate').addClass('fadeOutLeft');
      $('#aboutAnimate').removeClass('fadeInRight');   }
  }, { offset: '25%' });

// P R O J E C T - A N I M A T E - - - - - - - - -

  $('#projectAnimate').css('opacity', 0);

  $('#projectAnimate').waypoint(function(direction) {
    if (direction === 'down') {
      $('#projectAnimate').addClass('fadeInLeft');
      $('#projectAnimate').removeClass('fadeOut');
    } else if (direction === 'up') {
      $('#projectAnimate').addClass('fadeOut');
      $('#projectAnimate').removeClass('fadeInLeft');   }
  }, { offset: '25%' });

// C O N T A C T - A N I M A T E - - - - - - - - -

  $('#contactAnimate').css('opacity', 0);

  $('#contactAnimate').waypoint(function(direction) {
    if (direction === 'down') {
      $('#contactAnimate').addClass('fadeInRight');
      $('#contactAnimate').removeClass('fadeOutLeft');
    } else if (direction === 'up') {
      $('#contactAnimate').addClass('fadeOutLeft');
      $('#contactAnimate').removeClass('fadeInRight');   }
  }, { offset: '25%' });

// B A C K G R O U N D C O L O R C H A N G E //

  $('#home').waypoint(function() {
    $('body').css('background-color','rgb(186,222,245)');
  }, { offset: '-15%' });


  $('#about').waypoint(function() {
    $('body').css('background-color','rgb(200,179,223)');
  }, { offset: '30%' });


  $('#project').waypoint(function() {
    $('body').css('background-color','rgb(249,192,197)');
  }, { offset: '30%' });

  $('#contact').waypoint(function() {
    $('body').css('background-color','rgb(255,234,126)');
  }, { offset: '30%' });

// ---------------------------------------------
  // $('#home').waypoint(function(direction){
  //   if (direction === 'down') {
  //     $('body').css('background-color','rgb(249,192,197)');
  //   }, { offset: '25%' }
  // })
  // .waypoint(function(direction){
  //   if (direction === 'up') {
  //   $('body').css('background-color','rgb(200,179,223)');
  // }, { offset: '25%' });
  //   }
  // })

// ---------------------------------------------

// N A V - H I G H L I G H T - O N - S C R O L L //
// O P T I O N 1 - N O T - D R Y
//
// $('#home').waypoint(function(direction) {
//   $('.activeLink').removeClass('activeLink');
//   $('.homeLink').toggleClass('activeLink');
// });
//
// $('#about').waypoint(function(direction) {
//   $('.activeLink').removeClass('activeLink');
//   $('.aboutLink').toggleClass('activeLink');
// });
//
// $('#project').waypoint(function(direction) {
//   $('.activeLink').removeClass('activeLink');
//   $('.projectLink').toggleClass('activeLink');
// });
//
// $('#contact').waypoint(function(direction) {
//   $('.activeLink').removeClass('activeLink');
//   $('.contactLink').toggleClass('activeLink');
// });
//

// - - - - - O P T I O N 2 - D R I E R - - - - -

var setActive = function(id) {
    $('.activeLink').removeClass('activeLink');
    $(id).addClass('activeLink');
}

$("#home").waypoint(function(){
    setActive(".homeLink");
  }, { offset: '-50' });

$("#about").waypoint(function(){
    setActive(".aboutLink");
});

$("#project").waypoint(function(){
    setActive(".projectLink");
});

$("#contact").waypoint(function(){
    setActive(".contactLink");
});


});
