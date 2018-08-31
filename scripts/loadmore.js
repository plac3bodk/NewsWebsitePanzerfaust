//Click on .loadMore button
$('.loadmore').click(function() {
  //Add 885px to .#mainPosts container equalling 3 extra lines of posts...
  $('.posts').animate({
    height: '+=1050'
  }, 500);
  //..unless #mainPosts height is over 7950px
  if ($('.posts').height() > 4199) {
    //..then remove .loadMore button
    $('.loadmore').remove();
  }
});
