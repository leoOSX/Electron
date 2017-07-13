$(document).ready(function () {
  $('.modal').modal();
  $(".button-collapse").sideNav();
  $('.tooltipped').tooltip({ delay: 50 });
  $('.slider').slider();
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
});
function CerrarSideNav() {
  $('button-collapse').sideNav('hide');
};    