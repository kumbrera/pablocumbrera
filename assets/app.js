(function(){
  var root=document.documentElement, nav=document.getElementById("nav");
  function setLang(l){root.setAttribute("data-lang",l);root.setAttribute("lang",l);
    try{localStorage.setItem("pc-lang",l);}catch(e){}}
  var saved="es";
  try{var s=localStorage.getItem("pc-lang"); if(s==="es"||s==="en") saved=s;}catch(e){}
  setLang(saved);
  document.querySelectorAll(".lsw button").forEach(function(b){
    b.addEventListener("click",function(){setLang(b.getAttribute("data-set"));});});
  if(nav){window.addEventListener("scroll",function(){
    nav.classList.toggle("stuck", window.scrollY>8);},{passive:true});}
})();