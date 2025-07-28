document.addEventListener("DOMContentLoaded", function(){
    var _hsp = window._hsp = window._hsp || [];
      document.getElementById("removeCookies").addEventListener(click, function() {
          _hsp.push(['revokeCookieConsent']);
      });
  })