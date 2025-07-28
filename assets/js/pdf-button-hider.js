document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#createPDF').addEventListener('click', function validation() {
      var orgName = document.getElementById('orgName');
      if (orgName.value == "") {
        orgName.classList.add("is-invalid");
        document.querySelector('.invalid-feedback').classList.remove('display-none');
        document.querySelector('html, body').animate({
          scrollTop: (document.querySelector('.is-invalid').offset().top - 100)
        }, 1000);
        return false;
  
      } else {
       document.querySelector('#createPDF').style.display = "none";
       document.querySelector('#downloadPDF').style.display = "block";
       document.querySelector('#savePDF').style.display = "block";
     }
   });
  });