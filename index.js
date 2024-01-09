let openBtn = document.getElementById("navBtn");
let closeBtn = document.getElementById("closeBtn");
let overLays = document.querySelector("div.overlays");

openBtn.addEventListener("click", () => {
  overLays.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  overLays.style.display = "none";
});
