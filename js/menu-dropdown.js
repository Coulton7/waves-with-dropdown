$(function() {


   $('#prod-selector').attr("href","#")
   $('#prod-selector, #prod-cta').click(function() {
   $('#prod-selector').parent().toggleClass('');
   $(".prod-selector" ).slideToggle('easeInOutQuint')
   $("#block-block-11").slideToggle('easeInOutQuint')
     $('#prod-selector').parent().removeClass('')

    })

  });(jQuery)

  $(function() {


     $('#ind-selector').attr("href","#")
     $('#ind-selector, #prod-cta').click(function() {
     $('#ind-selector').parent().toggleClass('');
     $(".menu-selector" ).slideToggle('easeInOutQuint')
     $("#block-block-11").slideToggle('easeInOutQuint')
       $('#ind-selector').parent().removeClass('')

      })

    });(jQuery)
