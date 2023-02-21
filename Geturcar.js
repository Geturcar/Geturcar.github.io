function Search() {//Search
let input = document.getElementById('myInput').value
input=input.toLowerCase();
let x = document.getElementsByTagName('article');
for (i = 0; i < x.length; i++) {
if(!x[i].innerHTML.toLowerCase().includes(input)){
        x[i].style.display="none";}           
    }
}


function Sedan() {//Show Sedan
  var element = document.getElementById("Sedan");
  element.classList.add("active2");
  var element = document.getElementById("SUV");
  element.classList.remove("active2");
  var element= document.getElementById ("Show_all");
  element.classList.remove('active2')
  var element=document.getElementsByClassName("ShowSUV")
  for (let elements of element) { elements.style.display = "none"; }
  var element=document.getElementsByClassName("ShowSedan");
  for (let elements of element) { elements.style.display = ""; }
  Search();
}
function SUV() {//Show SUV

  var element = document.getElementById("Sedan");
  element.classList.remove("active2");
  var element = document.getElementById("SUV");
  element.classList.add("active2");
  var element= document.getElementById ("Show_all");
  element.classList.remove('active2')
  var element=document.getElementsByClassName("ShowSedan")
  for (let elements of element) { elements.style.display = "none"; }
  var element=document.getElementsByClassName("ShowSUV");
  for (let elements of element) { elements.style.display = ""; }
  Search();
}
function Showall(){//Show all
  var element = document.getElementById("Sedan");
  element.classList.remove("active2");
  var element = document.getElementById("SUV");
  element.classList.remove("active2");  
  var element= document.getElementById ("Show_all");
  element.classList.add('active2')
  var element=document.getElementsByClassName("ShowSedan")
  for (let elements of element) { elements.style.display = ""; }
  var element=document.getElementsByClassName("ShowSUV");
  for (let elements of element) { elements.style.display = ""; }
  Search();
}