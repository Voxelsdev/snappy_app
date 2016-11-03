(() => {
  $(".sidebar").css('width', '0');
  $(".sidebar-nav").toggle();
  $(".open-sidebar").click(function() {
    const setwidth = parseInt($(".sidebar").css('width'));
    if (setwidth > 0) {
      //if width=25%, then set width to 0.
      $('.sidebar').animate({
        width: '0'
      }, 300);
      $('.open-sidebar').animate({
        right: '0%'
      }, 600);
      $(".sidebar-nav").slideToggle();
    } else if (setwidth === 0) {
      //othewise, set width to 25%.
      $('.sidebar').animate({
        width: '30%'
      }, 300);
      $('.open-sidebar').animate({
        right: '30%'
      }, 600);
      $(".sidebar-nav").delay(300).slideToggle();
    }
  });
})();
