let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5);


const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;

function myFunction(value, index, array) {
  return value > 18;
}