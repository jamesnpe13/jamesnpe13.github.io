window.addEventListener("DOMContentLoaded", () => {
   

var buttons = document.querySelectorAll(".repo-link");

for (var button of buttons) {
   button.addEventListener("click", (event) => {
      var repoLink = `${event.target.getAttribute("data-link")}/index.html`;
      console.log(repoLink);
      window.open(repoLink, "_blank");
      
//       location.href = repoLink;
   });
}
})
