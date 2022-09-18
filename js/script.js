function reveal() {
   var reveals = document.querySelectorAll(".reveal");
   for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
         reveals[i].classList.add("active");
      } else {
         reveals[i].classList.remove("active");
      }
   }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// menu overlay
var menuStat = Boolean;
var hamburgerBtn = document.querySelector(".hamburger");
var closeBtn = document.querySelector(".close");
var menuOl = document.querySelector(".menu-overlay");

hamburgerBtn.addEventListener("click", () => {
   menuOl.classList.add("open");
   menuStat = true;
});
closeBtn.addEventListener("click", () => {
   menuOl.classList.remove("open");
   menuStat = false;
});

onmousedown = function (e) {
   if (e.target != menuOl) {
      menuOl.classList.remove("open");
   }
};
