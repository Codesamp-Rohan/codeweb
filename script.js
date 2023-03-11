function myFunction() {
    document.getElementById("suboption").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.programbtn')) {
      var dropdowns = document.getElementsByClassName("suboption");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function add(){
    document.getElementById('tag1').style.backgroundColor = "#000000";
  }
  function add1(){
    document.getElementById('tag2').style.backgroundColor = "#000000";
  }
  function add2(){
    document.getElementById('tag3').style.backgroundColor = "#000000";
  }
  function add3(){
    document.getElementById('tag4').style.backgroundColor = "#000000";
  }