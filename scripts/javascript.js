//READMORE
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  //MAP
  var map = L.map('map').setView([52.3759250759437, 4.908394762488651], 13);


  L.tileLayer('https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
    attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    subdomains: 'abcd',
    accessToken: 'kNtCCULNTD1RmU171cnWoSYtfhGSRTgHzr9gvYwo7hATlg66ihnKpP0PtdAscvtM',
  }).addTo(map);

  //Dropdown
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//   //Makes the button bigger after clicking
//   let Scale = document.querySelector('a:nth-of-type(1)')

//   Scale.addEventListener('click', scaleHandler)
//   Scale.addEventListener('animationend', scaleHandler)
  
//   function scaleHandler() {
//     Scale.classList.toggle('scale')
//   }