document.addEventListener("DOMContentLoaded", function() {
    (function() {
      var hashTab = window.location.hash;
      if (hashTab != '') {
        document.querySelector('.nav-tabs [href="' + hashTab + '"]').tab('show');
        document.querySelector(hashTab).classList.add('active');
      }
    });
  
    document.querySelector(".dropdown-menu li a").click(function(){
      document.querySelector(".dropdown-menu li").parents(".blue-tabs").find('.dropdown-btn').html(document.querySelector('.dropdown-btn').text() + ' <span class="caret"></span>');
      document.querySelector(".dropdown-menu li").parents(".blue-tabs").find('.dropdown-btn').val(document.querySelector('.dropdown-btn').data('value'));
    });
  
    document.querySelector('.shadow-box-tabs .media-tab').hide();
    var tabDivHeight = 0;
    document.querySelector('.shadow-box-tabs .media-tab').each(function () {
      document.querySelector('.shadow-box-tabs .media-tab').show();
      if (document.querySelector('.shadow-box-tabs .media-tab').height() > tabDivHeight)
        tabDivHeight = document.querySelector('.shadow-box-tabs .media-tab').height();
      document.querySelector('.shadow-box-tabs .media-tab').hide();
    });
    
    document.querySelector('.shadow-box-tabs .media-tab').height(tabDivHeight);
  
    
    document.querySelector('a[data-toggle="tab"]').on('show.bs.tab', function(e){
      sessionStorage.setItem('activeTab', document.querySelector(e.target).getAttribute('href'));
    });
    var activeTab = sessionStorage.getItem('activeTab');
    if(activeTab){
      document.querySelector('#vacTabs a[href="' + activeTab + '"]').tab('show');
    }
  
  });
  