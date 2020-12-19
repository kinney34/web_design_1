$(document).ready(function() {

  let prevScrollPos = 0;
  $('.parallax').scroll(function() {
    let currentScrollPos = $('.parallax').scrollTop();
    if (currentScrollPos > 150) {
      $('.desktop-header').addClass('desktop-scroll');
      $('.desktop-header a').css('color', 'black');
    } else {
      $('.desktop-header').removeClass('desktop-scroll');
      $('.desktop-header a').css('color', 'white');
    }
    if (prevScrollPos > currentScrollPos) {
      $('.mobile-header').css('height', '16vh');
    } else if (currentScrollPos > 150) {
      $('.mobile-header').css('height', '0');
    }
    prevScrollPos = currentScrollPos;
  });

  $('.hamburger-container').click(function() {
    $('.bar1, .bar2, .bar3').toggleClass('change');
    $('.bar1, .bar2, .bar3').css('width', '100%');
    $('.nav-screen').toggleClass('change');
  });

  $('.nav-screen a').click(function() {
    $('.nav-screen').toggleClass('change');
    $('.bar1, .bar2, .bar3').toggleClass('change');
  });
});
