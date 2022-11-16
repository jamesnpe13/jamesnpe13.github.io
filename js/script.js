var buttons = document.querySelectorAll(".repo-link");

for (var button of buttons) {
   button.addEventListener("click", (event) => {
      var repoLink = event.target.getAttribute("data-link");
      window.open(repoLink, "_self");
   });
}
