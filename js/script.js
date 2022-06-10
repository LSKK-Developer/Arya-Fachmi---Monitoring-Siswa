const sideBar = document.getElementById("sideBar");
const open = document.getElementById("openNav");
const close = document.getElementById("closeNav");
// open
open.addEventListener("click", function () {
  sideBar.classList.remove("close");
});
open.addEventListener("click", function () {
  sideBar.classList.add("sideBar-on");
});
// close
close.addEventListener("click", function () {
  sideBar.classList.remove("sideBar-on");
});
close.addEventListener("click", function () {
  sideBar.classList.add("close");
});
