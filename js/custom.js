
// let links = $(".footer-links-wrapper h3");

  // links.click(function (e) {
  //   e.preventDefault();

  //   if ($(window).width() <= 768) {
  //     // Close all other lists except the one being clicked
  //     links.not(this).removeClass("expanded").next("ul").slideUp();

  //     // Toggle the visibility of the clicked list
  //     $(this).next("ul").slideToggle();

  //     // Toggle the "expanded" class on the clicked h3 element
  //     $(this).toggleClass("expanded");
  //   }
  // });



    let links = $(".footer-links-wrapper h3");
    links.click(function (event) {
      event.preventDefault();
      if ($(window).width() <= 768) {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
      }
    });
