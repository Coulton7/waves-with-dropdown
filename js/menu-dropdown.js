$(function() {


   $('#prod-selector').attr("href","#")
   $('#prod-selector').click(function() {
     if($(".ind-selector").is(':hidden')){
   $('#prod-selector').parent().toggleClass('');
   $(".prod-selector" ).slideToggle('easeInOutQuint')
     $('#prod-selector').parent().removeClass('')
     $('#dropdown').removeClass('dropdown-fill')
     $(this).addClass('dropdown-fill')

   }

     else {
       $('#prod-selector').parent().toggleClass('');
       $(".prod-selector" ).slideToggle('easeInOutQuint')
       $(".ind-selector" ).slideToggle('easeInOutQuint')
        $('#prod-selector').parent().removeClass('')
        $('#dropdown').removeClass('dropdown-fill')
        $(this).addClass('dropdown-fill')
        }



    })


    $('#ind-selector').attr("href","#")
    $('#ind-selector').click(function() {
      if($(".prod-selector").is(':hidden')){
    $('#ind-selector').parent().toggleClass('');
    $(".ind-selector" ).slideToggle('easeInOutQuint')
      $('#ind-selector').parent().removeClass('')
      $('#dropdown').addClass('dropdown-fill')
      $('#dropdown').removeClass('dropdown-fill')
    }

      else {
        $('#ind-selector').parent().toggleClass('');
        $(".ind-selector" ).slideToggle('easeInOutQuint')
        $(".prod-selector" ).slideToggle('easeInOutQuint')
         $('#ind-selector').parent().removeClass('')
         $('#dropdown').addClass('dropdown-fill')
         $('#dropdown').removeClass('dropdown-fill')}

    })

  });(jQuery)
