$(document).ready(function(){

  // hide our element on page load
  $('#navAnimate').css('opacity', 0);

  $('#navAnimate').waypoint(function() {
      $('#navAnimate').addClass('fadeIn');
  }, { offset: '35%' });

  $('#homeAnimateTwo').css('opacity', 0);

  $('#homeAnimateTwo').waypoint(function() {
      $('#homeAnimateTwo').addClass('fadeInUp');
  }, { offset: '35%' });


  $('#homeAnimateOne').css('opacity', 0);

  $('#homeAnimateOne').waypoint(function() {
      $('#homeAnimateOne').addClass('fadeInLeft');
  }, { offset: '35%' });


  $('#aboutAnimate').css('opacity', 0);

  $('#aboutAnimate').waypoint(function() {
      $('#aboutAnimate').addClass('fadeInRight');
  }, { offset: '35%' });

  $('#projectAnimate').css('opacity', 0);

  $('#projectAnimate').waypoint(function() {
      $('#projectAnimate').addClass('fadeInRight');
  }, { offset: '35%' });

  $('#contactAnimate').css('opacity', 0);

  $('#contactAnimate').waypoint(function() {
      $('#contactAnimate').addClass('fadeInRight');
  }, { offset: '35%' });

// B A C K G R O U N D C O L O R C H A N G E //

  $('#home').waypoint(function() {
    $('body').css('background-color','rgb(186,222,245)');
  }, { offset: '-30' });


  $('#about').waypoint(function() {
    $('body').css('background-color','rgb(200,179,223)');
  }, { offset: '0' });


  $('#project').waypoint(function() {
    $('body').css('background-color','rgb(249,192,197)');
  }, { offset: '0' });

  $('#contact').waypoint(function() {
    $('body').css('background-color','rgb(255,234,126)');
  }, { offset: '0' });

});
