(() => {
  $('.sidebar').css('width', '0');
  $('.sidebar-nav').toggle();
  $('.open-sidebar').click(() => {
    const setwidth = parseInt($('.sidebar').css('width'));

    if (setwidth > 0) {

      $('.sidebar').stop().animate({ width: '0' }, { duration: 300, queue: true });
      $('.open-sidebar').stop().animate({ right: '0%' }, { duration: 600, queue: true });
      $(".sidebar-nav").slideToggle();

    } else if (setwidth === 0) {

      $('.sidebar').stop().animate({ width: '30%' }, { duration: 300, queue: true});
      $('.open-sidebar').stop().animate({ right: '30%' }, { duration: 600, queue: true });
      $(".sidebar-nav").delay(300).slideToggle();

    }
  });
})();
