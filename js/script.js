$(document).ready(
  function() {
    $(".parent-dropdown").hover(function() {
      $(this).find('ul').slideToggle();
    });
  }
);
