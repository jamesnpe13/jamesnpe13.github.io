window.addEventListener("DOMContentLoaded", () => {
   

var buttons = document.querySelectorAll(".repo-link");

for (var button of buttons) {
   button.addEventListener("click", (event) => {
      var repoLink = event.target.getAttribute("data-link");
      
      console.log(event.target);
      console.log(repoLink);
      
      if(repoLink) window.open(repoLink, "_blank");
      
//       location.href = repoLink;
   });
}
})
