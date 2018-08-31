//Click on .readMore button
$(".readmore").click(function() {
  //Toggle .more on .readMore button
  $(this).toggleClass('more');
  //Toggle .more on .mainOnpage text area
  $(".main__text").toggleClass('toggled');
  //If button text equals 'Read more'...
  if ($(this).text() === "Read more") {
    //...change to 'Read less' else...
    $(this).text("Read less");
  } else {
    //...change back to 'Read more'
    $(this).text("Read more");
  }
});

//If .mainOnpage height isn't taller than 100px...
if ($(".main__text").height() < 100) {
  //...remove .readMore button
  $(".readmore").remove();
}
