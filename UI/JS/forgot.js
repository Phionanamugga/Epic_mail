function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


  var submit_btn = document.getElementById("btn")
  submit_btn.addEventListener('click',function(e){
      e.target.setAttribute('style','display:none')
      document.getElementById("myPop").setAttribute('style','display:block')
  })
