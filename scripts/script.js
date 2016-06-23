$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(function () {

  $('.email-container').click(function(){
    $('.contact-overlay').addClass('is-open');
    return false;
  });

  $('.close-btn').click(function(){
    $('.contact-overlay').removeClass('is-open');
  });

});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.masthead').css({
    'transform' : 'translate(0px, '+ wScroll/22 +'%)'
  });

});
