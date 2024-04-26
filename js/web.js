document.addEventListener("DOMContentLoaded", function() {
    var openFormBtn = document.getElementById("openFormBtn");
    var closeFormBtn = document.getElementById("closeFormBtn");
    var popupForm = document.getElementById("popupForm");
  
    openFormBtn.addEventListener("click", function() {
      popupForm.style.display = "block";
    });
  
    closeFormBtn.addEventListener("click", function() {
      popupForm.style.display = "none";
    });
  });
  
  



  