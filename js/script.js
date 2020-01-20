$(document).ready(
  function() {
//     $('.parent-dropdown a').hover(
//       function() {
// $(this).next('.dropdown').toggleClass('active');

$("ul li").hover(function() {
      $(this).find('ul').slideToggle();

      }
    );
  }
);
