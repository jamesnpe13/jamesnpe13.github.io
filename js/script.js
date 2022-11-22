const buttons = document.querySelectorAll(".repo-link");

buttons.forEach((button) => {
   var repoURL = button.getAttribute("data-link");
   
   button.addEventListener("click", () => {
      if (repoURL) {
         window.open(repoLink, "_blank");
      }
   });
});
