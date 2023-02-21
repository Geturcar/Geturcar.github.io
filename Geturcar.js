function Search() {//Search
const sedan = document.getElementById("Sedan"),
suv = document.getElementById("SUV"),
showall= document.getElementById ("Show_all");
let input = document.getElementById('myInput').value
input=input.toLowerCase();
let x = document.getElementsByTagName('article');
for (i = 0; i < x.length; i++) {
if(!x[i].innerHTML.toLowerCase().includes(input)){
        x[i].style.display="none";}           
    }
    if (sedan.classList.contains('active2')){
      Sedan();
    }
    if (suv.classList.contains('active2')){
      SUV();
    }
    if (showall.classList.contains('active2')){
      Showall();
    }
}
function Search2() {//Search

  let input = document.getElementById('myInput').value
  input=input.toLowerCase();
  let x = document.getElementsByTagName('article');
  for (i = 0; i < x.length; i++) {
  if(!x[i].innerHTML.toLowerCase().includes(input)){
          x[i].style.display="none";}           
      }
}


function Sedan() {//Show Sedan
  const sedan = document.getElementById("Sedan"),
  suv = document.getElementById("SUV"),
  showall= document.getElementById ("Show_all");
  sedan.classList.add("active2");
  suv.classList.remove("active2");
  showall.classList.remove('active2');
  var element=document.getElementsByClassName("ShowSUV");
  for (let elements of element) { elements.style.display = "none"; }
  var element=document.getElementsByClassName("ShowSedan");
  for (let elements of element) { elements.style.display = ""; }
  Search2();
  return
}
function SUV() {//Show SUV
  const sedan = document.getElementById("Sedan"),
  suv = document.getElementById("SUV"),
  showall= document.getElementById ("Show_all");
  sedan.classList.remove("active2");
  suv.classList.add("active2");
  showall.classList.remove('active2')
  var element=document.getElementsByClassName("ShowSedan")
  for (let elements of element) { elements.style.display = "none"; }
  var element=document.getElementsByClassName("ShowSUV");
  for (let elements of element) { elements.style.display = ""; }
  Search2();
  return
}
function Showall(){//Show all
  const sedan = document.getElementById("Sedan"),
  suv = document.getElementById("SUV"),
  showall= document.getElementById ("Show_all");
  sedan.classList.remove("active2");
  suv.classList.remove("active2");  
  showall.classList.add('active2')
  var element=document.getElementsByClassName("ShowSedan")
  for (let elements of element) { elements.style.display = ""; }
  var element=document.getElementsByClassName("ShowSUV");
  for (let elements of element) { elements.style.display = ""; }
  Search2();
  return
}