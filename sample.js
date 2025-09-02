const first = document.getElementById("first")
const second = document.getElementById("second")
const add = document.getElementById("b1")

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
add.onclick = () => addnumber(first.value, second.value)
const hh = document.getElementById("mathf")
const b12 = document.getElementById("b12")
const value = Number(hh.value);       // get current input
const cc = Math.round(value);
b12.addEventListener("click", () => {
    const value = Number(hh.value);
    document.getElementById("res").innerHTML = Math.round(value);
});




// const a=[1,2,3,4,4,5,6,7,8,9,7,6]
// const b=a.filter(sap=>sap%2===0)
// console.log(b)
// const c=a.map(sap=>sap**2)
// console.log(c)