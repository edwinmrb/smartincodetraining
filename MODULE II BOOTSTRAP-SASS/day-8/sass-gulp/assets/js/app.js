// An object literal

var navbar = document.getElementsByClassName("navbar__menu")[0].classList;
/* var x = window.matchMedia("(max-width: 768px)"); */

var app = {
  init: function () {
    app.functionOne();
  },
  functionOne: function () {
    /* executeNavbar(x.matches); */
  },

  scrollTop: function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

};

(function () {
  // your page initialization code here
  // the DOM will be available here
  app.init();

})();


// Toggle the side navigation
document.getElementById("navbarToggleTop").addEventListener("click",  () => executeNavbar(navbar.contains('toggled')));
/* Listener change */
/* x.addListener( ()=> executeNavbar(x.matches)); */

function  executeNavbar(flag){
 flag?navbar.remove("toggled"):navbar.add("toggled");
}

