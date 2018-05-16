$(function() {


   $('#prod-selector').attr("href","#")
   $('#prod-selector, #prod-cta').click(function() {
   $('#prod-selector').parent().toggleClass('chameleon no-anim');
   $(".product-selector-dropdown" ).slideToggle('easeInOutQuint')
   $("#block-block-11").slideToggle('easeInOutQuint')
     $('#prod-selector').parent().removeClass('no-anim')

    })

  });(jQuery)
