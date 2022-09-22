let dropDown = document.querySelector(".expandable");
let camerasBtn = document.querySelector(".cameras");

let camExpand = false;

// devices expand

camerasBtn.addEventListener("click", function () {
   if (camExpand == false) {
      dropDown.classList.add("expand");
      camExpand = true;
   } else {
      dropDown.classList.remove("expand");
      camExpand = false;
   }
});
