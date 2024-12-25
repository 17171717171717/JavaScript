$(function() {
  var $window = $(window);
  var $slideAd = $('#slideAd');
  var endZone = $('#footer').offset().top - $window.height() - 500;

  $window.on('scroll', function() {

    if (endZone < $window.scrollTop()) {
      // console.log($('#footer').offset().top)
      // console.log($window.height())
      $slideAd.animate({ 'right': '0px' }, 2500);
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

});