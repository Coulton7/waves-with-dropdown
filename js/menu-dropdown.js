$(function() {


   $('#prod-selector').attr("href","#")
   $('#prod-selector').click(function() {
     if($(".ind-selector").is(':hidden')){
   $('#prod-selector').parent().toggleClass('');
   $(".prod-selector" ).slideToggle('easeInOutQuint')
     $('#prod-selector').parent().removeClass('')
     $('#dropdown').addClass("height-active");
     $('#dropdown').removeClass("height-active");
   }

     else {
       $('#prod-selector').parent().toggleClass('');
       $(".prod-selector" ).slideToggle('easeInOutQuint')
       $(".ind-selector" ).slideToggle('easeInOutQuint')
        $('#prod-selector').parent().removeClass('')
        }



    })


    $('#ind-selector').attr("href","#")
    $('#ind-selector').click(function() {
      if($(".prod-selector").is(':hidden')){
    $('#ind-selector').parent().toggleClass('');
    $(".ind-selector" ).slideToggle('easeInOutQuint')
      $('#ind-selector').parent().removeClass('')}

      else {
        $('#ind-selector').parent().toggleClass('');
        $(".ind-selector" ).slideToggle('easeInOutQuint')
        $(".prod-selector" ).slideToggle('easeInOutQuint')
         $('#ind-selector').parent().removeClass('')}

    })

  });(jQuery)
