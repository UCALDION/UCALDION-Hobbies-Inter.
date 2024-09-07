$('.card').hover(
    function() {
      $(this).css('transform', 'scale(1.1)');
      $(this).css('width', '250px');
    },
    function() {
      $(this).css('transform', 'scale(1)');
      $(this).css('width', '200px');
    }
  );