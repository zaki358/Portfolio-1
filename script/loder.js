const deviation = document.querySelector(".deviation");
const body = document.querySelector("body");

window.addEventListener("load", function () {
   window.setTimeout(function () {
      //console.log(body);
      body.classList.add("appear");
      window.setTimeout(function () {
         deviation.style.display = "none";

      }, 2000);
   }, 500);

})





