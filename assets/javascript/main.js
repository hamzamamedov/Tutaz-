let modal2 = document.getElementById("modal2");
let bagla = document.querySelector("#close");
let allscreen= document.querySelector(".allscreen");
function bax() {
  modal2.classList.add("view");
  allscreen.classList.add("allscreen1");
}

bagla.addEventListener("click", () => {
  modal2.classList.remove("view");
  allscreen.classList.remove("allscreen1");
});

window.onclick=function(e){
  if(e.target==allscreen){
    modal2.classList.remove("view");
    allscreen.classList.remove("allscreen1");

  }
}
