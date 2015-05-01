$(document).ready(function(){
$(window).stellar({
  responsive: false,
  horizontalScrolling: false

});
  $('#burgerbox').click(function(){
    $(this).toggleClass('active');
    $('.dropdown').toggleClass('active');
  });

  $("a img").hover(
          function(){this.src = this.src.replace("_g","_w");},
          function(){this.src = this.src.replace("_w","_g");
     });
});
