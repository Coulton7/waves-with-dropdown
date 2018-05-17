$(function() {


   $('#prod-selector').attr("href","#")
   $('#prod-selector').click(function() {
   $('#prod-selector').parent().toggleClass('');
   $(".prod-selector" ).slideToggle('easeInOutQuint')
   $(".ind-selector").slideToggle('easeInOutQuint')
     $('#prod-selector').parent().removeClass('')

    })

  });(jQuery)

  $(function() {


     $('#ind-selector').attr("href","#")
     $('#ind-selector').click(function() {
     $('#ind-selector').parent().toggleClass('');
     $(".ind-selector" ).slideToggle('easeInOutQuint')
     $(".prod-selector").slideToggle('easeInOutQuint')
       $('#ind-selector').parent().removeClass('')

      })

    });(jQuery)
