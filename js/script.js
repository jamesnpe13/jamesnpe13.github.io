window.addEventListener("DOMContentLoaded", () => {
   

var buttons = document.querySelectorAll("button");

for (var button of buttons) {
   button.addEventListener("click", (event) => {
      var thisButton = event.target.closest("button");
      var repoLink = thisButton.getAttribute("data-link");
      
      console.log(thisButton);
      console.log(repoLink);
      
      if(repoLink) window.open(repoLink, "_blank");
      
//       location.href = repoLink;
   });
}
})
