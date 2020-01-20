$(document).ready(
  function() {
    $(".parent-dropdown").click(function() {
      $(this).find('ul').slideToggle();
    });
  }
);
