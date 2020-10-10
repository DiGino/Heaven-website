function clicFunction() {
  var dots = document.getElementById("dots");
  var lirePlus = document.getElementById("lire_plus");
  var clicPlus = document.getElementById("clic_plus");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    clicPlus.innerHTML = "Lire plus";
    lirePlus.style.display = "none";
  } else {
    dots.style.display = "none";
    clicPlus.style.display = "none";
    lirePlus.style.display = "inline";
  }
} 

document.getElementById("mob-menu").onclick = function() {showmobmenu()};
function showmobmenu() {
 
  var popout = document.getElementById("popout");
  var mobmenu = document.getElementById("mob-menu");
  var changecolor =  document.body;
  
  mobmenu.classList.toggle("change");
  popout.classList.toggle("left");
  changecolor.classList.toggle("bgcolor");
 }


