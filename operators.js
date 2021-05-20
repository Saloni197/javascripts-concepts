let num1 = 5;
let num2 = 7;

console.log(num1 + num2); //addition
console.log(num1 - num2); //subtraction
console.log(num1 * num2); //multiplication
console.log(num1 / num2); //division
console.log(num1 % num2); //modulus
console.log(num1 ** num2);//exponential

let num3 = num2;  //assignment
console.log(num3);

num2 = num3 = 7+2; //chaining assignment
console.log(num2);
console.log(num3);

num2 = num2 + 1; //modify-in-place
num2 = num2 * 2;
console.log(num2);

num2 = ++num2; //pre-increment
console.log(num2);

num2 = num2++;  //post-increment
console.log(num2);

num1 = num1--;  //post-decrement
console.log(num1);

num1 = --num1; //pre-decrement
console.log(num1);