window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
}
