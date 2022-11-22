document.addEventListener("DOMContentLoaded", main);

function main() {
   loadRepoJson();

   document.addEventListener("repoJsonLoaded", (e) => {
      updateUI(e.detail.repoData);
   });
}

async function loadRepoJson() {
   var jsonURL = "../json/projects.json";
   var response = await fetch(jsonURL);
   var data = await response.json();
   var repoJsonLoaded = new CustomEvent("repoJsonLoaded", {
      detail: {
         repoData: data,
      },
   });

   document.dispatchEvent(repoJsonLoaded);
}

function updateUI(repoData) {
   var repoLength = repoData.repositories.length;
   var linksCreated = new CustomEvent("linksCreated");

   for (i = 0; i < repoLength; i++) {
      createButton(repoData.repositories[i]);
   }

   document.dispatchEvent(linksCreated);
}

function createButton(repoData) {
   var linksContainer = document.querySelector(".container");
   var repoLink = document.createElement("button");
   var repoName = document.createElement("span");
   linksContainer.appendChild(repoLink);
   repoLink.appendChild(repoName);

   repoLink.className = "repo-link";
   repoLink.setAttribute("data-link", repoData.URL);
   repoName.textContent = repoData.name;
}

document.addEventListener("linksCreated", () => {
   const buttons = document.querySelectorAll(".repo-link");

   buttons.forEach((button) => {
      var repoURL = button.getAttribute("data-link");

      button.addEventListener("click", () => {
         console.log(repoURL);
         if (repoURL) {
            window.open(repoURL, "_blank");
         }
      });
   });
});
