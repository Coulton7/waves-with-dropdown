function countdown() {
    var i = document.getElementById('counter');
    if (parseInt(i.innerHTML) <= 0) {
  
      document.getElementById('replace').textContent = "If re-direct has failed click the link to the global site";
      document.getElementById('ext-link').classList.remove("display-none");
      document.getElementById('counter').classsList.add("display-none");
      return;
  
    }
    if (parseInt(i.innerHTML) != 0) {
      i.innerHTML = parseInt(i.innerHTML) - 1;
    }
}
  
  
document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
      countdown();
    }, 1000);
});