$(document).ready(
  function() {
    var visible = false;
    $(".parent-dropdown").click(function() {

      if (visible == false) {
        $(".dropdown").fadeOut();
        $(this).find('.dropdown').fadeIn();
        $(this).find("i").removeClass("fa-chevron-down");
        $(this).find("i").addClass("fa-chevron-up");
        visible = true;
      } else {
        $(this).find('.dropdown').fadeOut();
        $(this).find("i").removeClass("fa-chevron-up");
        $(this).find("i").addClass("fa-chevron-down");
        visible = false;
      }
    });

  }
);
