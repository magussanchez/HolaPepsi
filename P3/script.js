$(document).ready(function(e) {
    width = "+=" + $(document).width();
    $("#animate").animate({
    left: width
  }, 5000, function() {
    // Animation complete.
  });
});
