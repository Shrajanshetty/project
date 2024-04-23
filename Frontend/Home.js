function changeBg() {
  var navbar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 25) {
    navbar.classList.remove("bgnav");
  } else {
    navbar.classList.add("bgnav");
  }
}

window.addEventListener("scroll", changeBg);

