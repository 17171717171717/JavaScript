$(':header').addClass('headline');
// $('li:lt(3)').hide().fadeIn(1500);
// $('li:lt(3)').hide().fadeout(1500);
$('li:lt(3)').fadeOut(1500);
$('li').on('click', function() {
  $(this).remove();
});