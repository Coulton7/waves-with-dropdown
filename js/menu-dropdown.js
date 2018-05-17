$(function() {


   $('#prod-selector').attr("href","#")
   $('#prod-selector, #prod-cta').click(function() {
   $('#prod-selector').parent().toggleClass('');
   $(".menu-selector" ).slideToggle('easeInOutQuint')
   $("#block-block-11").slideToggle('easeInOutQuint')
     $('#prod-selector').parent().removeClass('')

    })

  });(jQuery)
