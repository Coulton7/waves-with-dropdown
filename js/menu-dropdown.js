$(function() {


   $('#prod-selector').attr("href","prod")
   $('#prod-selector').click(function() {
   $('#prod-selector').parent().toggleClass('');
   $(".prod-selector" ).slideToggle('easeInOutQuint')
   $("#block-block-11").slideToggle('easeInOutQuint')
     $('#prod-selector').parent().removeClass('')

    })

    $('#ind-selector').attr("href","ind")
    $('#ind-selector').click(function() {
    $('#ind-selector').parent().toggleClass('');
    $(".ind-selector" ).slideToggle('easeInOutQuint')
    $("#block-block-11").slideToggle('easeInOutQuint')
      $('#ind-selector').parent().removeClass('')
    })

  });(jQuery)
