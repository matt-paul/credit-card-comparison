// function addActive() {
//   $('ul.list-cards li svg').click(function () {
//   $('ul.list-cards li svg').not(this).removeClass('active');
//   $(this).addClass('active');
//   });
// }

function addActive() {
  $('svg.arrow').click(function () {
  $('svg.arrow').not(this).removeClass('active');
  $(this).addClass('active');
  });
}
