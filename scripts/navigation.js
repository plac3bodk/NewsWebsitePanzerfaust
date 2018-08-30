$(document).ready(function() {
  //Desktop header search
  $(".search__toggle").click(function() {
    $(".search__input").toggleClass('toggled');
  });
  //Mobile footer search and nav
  $(".footerNav__button--nav").click(function(){
    $(".modal__nav, .footerNav").addClass("toggled");
  });

  $(".footerNav__button--search").click(function(){
    $(".modal__search, .footerNav").addClass("toggled");
  });
  //Remove .toggled from footernav/modal elements
  $(".modal__close").click(function(){
    $(".modal__search, .modal__nav, .footerNav").removeClass("toggled");
  })
});
