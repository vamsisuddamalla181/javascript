const first=document.getElementById("first")
const second=document.getElementById("second")
const add=document.getElementById("b1")

function addnumber(a, b) {
    a = Number(a)
    b = Number(b)
    document.getElementById("result").innerHTML = a + b
}
function subnumber(a, b) {
    a = Number(a)
    b = Number(b)
    document.getElementById("result").innerHTML = a - b
}
function mulnumber(a, b) {
    a = Number(a)
    b = Number(b)
    document.getElementById("result").innerHTML = a * b
}
function divnumber(a, b) {
    a = Number(a)
    b = Number(b)
    if (b === 0) {
        document.getElementById("result").innerHTML = "can not be divided with 0"
    }
    else {
        document.getElementById("result").innerHTML = a / b
    }
}
add.onclick=()=>addnumber(first.value,second.value) 
