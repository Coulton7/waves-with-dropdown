document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.submit-notice').style.display = 'none';
    if (document.querySelector('.hubspot-form').length > 0) {
      document.querySelector('.download-field-wrapper').style.display = 'none';
    }
  
  
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
  
    var submitString = getUrlVars()["fs"];
    if(submitString=='y'){
        document.querySelector('.download-field-wrapper').style.display = 'block';
        document.querySelector('.hubspot-form').style.display = 'none';
        document.querySelector('.field-label').style.display = 'none';
        document.querySelector('.submit-notice').style.display = 'block';
    }
});