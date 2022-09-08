function reveal() {
     var reveals = document.querySelectorAll(".hover-effect");
     for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementBottom = reveals[i].getBoundingClientRect().bottom;
          var visibilityMargin = windowHeight / 5;
          var elementVisibleBottom = windowHeight - visibilityMargin;
          var elementVisibleTop = visibilityMargin;
          if (elementBottom < windowHeight ) {
               reveals[i].classList.add("mobile-focus");
          } else {
               reveals[i].classList.remove("mobile-focus");
          }
     }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
