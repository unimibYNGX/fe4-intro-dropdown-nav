var r = document.querySelector(":root");

var isOpen = false;

function myFunction_get() {
  var rs = getComputedStyle(r);
  console.log(
    "The value of --sidenav-width is: " + rs.getPropertyValue("--sidenav-width")
  );
} /*works!*/

function sidenav_toggle() {
  var rs = getComputedStyle(r);
  var acc = document.getElementsByClassName("accordion");

  console.clear();
  console.log("width before: " + rs.getPropertyValue("--sidenav-width"));
  console.log("right before: " + rs.getPropertyValue("--sidenav-right"));
  if (!isOpen) {
    r.style.setProperty("--sidenav-width", "240px");
    r.style.setProperty("--sidenav-right", "0px");
    isOpen = true;
  } else {
    r.style.setProperty("--sidenav-width", "0px");
    r.style.setProperty("--sidenav-right", "0px");
    console.log("removing active...");
    acc[0].classList.remove("active");
    acc[0].nextElementSibling.classList.remove("active");
    var arrow = acc[0].getElementsByClassName("icon-arrow-down");
    arrow[0].classList.remove("rotateimg180");

    acc[1].classList.remove("active");
    acc[1].nextElementSibling.classList.remove("active");
    arrow = acc[1].getElementsByClassName("icon-arrow-down");
    arrow[0].classList.remove("rotateimg180");
    isOpen = false;
  }
  console.log("width now: " + rs.getPropertyValue("--sidenav-width"));
  console.log("right now: " + rs.getPropertyValue("--sidenav-right"));
  // var x = document.getElementById('menu');
}

var acc = document.getElementsByClassName("accordion");
var arrows = document.getElementsByClassName("icon-arrow-down");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var arrow = this.getElementsByClassName("icon-arrow-down");
    arrow[0].classList.toggle("rotateimg180");

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("active");
  });
}
