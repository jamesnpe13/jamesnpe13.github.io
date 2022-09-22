const navBarDesktop = document.getElementById("navbar-desktop");
const navBarMobile = document.getElementById("navbar-mobile");
let timer1 = null;
let timer2 = null;
const buttonLabel = document.querySelectorAll(".label-desktop");
const mobileIconGroup = document.querySelectorAll(".mobile-button-group");
const mobileMenuBtn = document.querySelector("#mobile-menu-button");
let mobileMenuExtend = false;

// navBarDesktop
// reveal
navBarDesktop.addEventListener("mouseenter", function () {
   navBarDesktop.classList.add("nav-expand");
   timer1 = setTimeout(function () {
      for (let i = 0; i < buttonLabel.length; i++) {
         buttonLabel[i].style.display = "block";
      }
   }, 200);
});
// hide
navBarDesktop.addEventListener("mouseleave", function () {
   navBarDesktop.classList.remove("nav-expand");
   clearTimeout(timer1);
   for (let i = 0; i < buttonLabel.length; i++) {
      buttonLabel[i].style.display = "none";
   }
});

// navbar Mobile
// reveal
window.onscroll = function () {
   mobileMenuHide();
};
mobileMenuBtn.addEventListener("click", function () {
   mobileMenuToggle();
});

function mobileMenuToggle() {
   if (mobileMenuExtend == false) {
      mobileMenuReveal();
   } else if (mobileMenuExtend == true) {
      mobileMenuHide();
   }
}
function mobileMenuReveal() {
   mobileMenuExtend = true;
   navBarMobile.classList.add("nav-expand");
   timer2 = setTimeout(function () {
      for (let i = 0; i < mobileIconGroup.length; i++) {
         mobileIconGroup[i].style.display = "grid";
      }
   }, 200);
}
function mobileMenuHide() {
   mobileMenuExtend = false;
   navBarMobile.classList.remove("nav-expand");
   clearTimeout(timer2);
   for (let i = 0; i < mobileIconGroup.length; i++) {
      mobileIconGroup[i].style.display = "none";
   }
}

// navBarMobile.addEventListener("click", function () {
//    navBarMobile.classList.add("nav-expand");
//    timer = setTimeout(function () {
//       for (let i = 0; i < mobileIconGroup.length; i++) {
//          mobileIconGroup[i].style.display = "grid";
//       }
//    }, 200);
// });
