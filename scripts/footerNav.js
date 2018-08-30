//Mobile footer search and nav
$(".footerNav__button--nav, .modal__close").click(function(){
  $(".modal__nav").toggleClass("toggled")
  console.log('Toggled')
});

$(".footerNav__button--search, .modal__close").click(function(){
  $(".modal__search").toggleClass("toggled")
  console.log('Toggled')
});
