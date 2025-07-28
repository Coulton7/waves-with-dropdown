document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.video-thumbnail').style.display = "none";
  
    if (document.querySelector('.resource-request').length > 0) {
      document.querySelector('.video-stream').style.display = "none";
      document.querySelector('.video-thumbnail').style.display = "block";
    }
  
    function getUrlVars()
      {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
        }
        return vars;
      }
  
    var submitString = getUrlVars()["fs"];
    if(submitString=='y'){
      document.querySelector('.video-thumbnail').style.display = "none";
      document.querySelector('.resource-request').style.display = "none";
    }
  });