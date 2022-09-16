let navBar = document.getElementById("navbar");
let overLayMobile = document.querySelector(".overlay-mobile");
let mobileNavBar = document.getElementById("mobile-navbar");
let navLabel = document.querySelectorAll(".label");
let mobileIconGroup = document.querySelectorAll(".mobile-icon-nav");
// navBar.addEventListener("mouseover", function1);
// navBar.addEventListener("mouseout", function2);

// timer
let timer;
function runTimer() {}

navBar.onmouseenter = function () {
   timer = setTimeout(function () {
      for (let i = 0; i < navLabel.length; i++) {
         navLabel[i].style.display = "block";
      }
   }, 150);
};
navBar.onmouseleave = function () {
   clearTimeout(timer);
   for (let i = 0; i < navLabel.length; i++) {
      navLabel[i].style.display = "none";
   }
};

// mobile
overLayMobile.addEventListener("click", function () {
   mobileNavBar.classList.add = "expanded";
   for (let i = 0; i < mobileIconGroup.length; i++) {
      mobileIconGroup[i].style.display = "block";
   }
});
