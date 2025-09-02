const jsb1 = document.getElementById("jsb1");
const jsb2 = document.getElementById("jsb2");
const jsb3 = document.getElementById("jsb3");
const jsp = document.getElementById("jsp");

let x = 0;
jsp.innerHTML="-"
let cleared = false; 

jsb1.addEventListener("click", () => {
  if (cleared) {
    x = 1;          
    cleared = false;
  } else {
    x++;
  }
  jsp.innerHTML = x;
  jsp.style.color="green"
});

jsb2.addEventListener("click", () => {
  if (cleared) {
    x = -1;        
    cleared = false;
  } else {
    x--;
  }
  jsp.innerHTML = x;
  jsp.style.color="red"
});

jsb3.addEventListener("click", () => {
  cleared = true;   
  jsp.innerHTML = "-";
  jsp.style.color="rgb(0,0,0)"
});