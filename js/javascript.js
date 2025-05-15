console.log("Hello, World!")

let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);

let age = 11;
console.log("age = " + age);

age="fifteen";
console.log("now, age = " + age);

const pi = 3.14;
//pi = 4; it will throw an error if you reassign to a const variable
console.log("pi = " + pi);

let x = (3 + 2) -76 * (1 + 1);
console.log("x = " + x);

// assignment below
console.log(23 + 97);
console.log(35 + 1 + 102 + 78 + 46);
console.log((4 + 6 + 9)/77);

let a = 10;
console.log(a);
a=25;
console.log(a);

let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual/max;
console.log(percentage);

// assignment is just until here
// additional to deepen my knowledge
let $ = 100;
let _ =  200;
console.log($ + _);

const COLOR_ORANGE = "#FF7F00";
console.log(COLOR_ORANGE);

let exponent = 5 ** 2;
console.log(exponent);

let answer1 =  26 % 5;
console.log(answer1);
answer1++;
console.log(answer1);
answer1--;
console.log(answer1);

let exp1 = 2e3;
console.log(exp1);

let operand1 = 5;
let operand2 = 2;
let answer2 = operand1 ** operand2;
let answer3 = Math.pow(operand1, operand2);
console.log(answer2 == answer3);

let num1 = 10;
let num2 = 20;
let result1 = "The result is " + num1 + num2;
console.log("result1 = " + result1);

let num3 = "30";
let result2 = num1 + num2 + num3;
console.log("result2 = " + result2);

let num4 = "5";
let result3 = num3/num4;
console.log("result3 = " + result3);

let num5 = 1000/"10";
let result4 = isNaN(num5);
console.log("num5 is " + result4);

console.log("type of NaN is: " + typeof NaN);
let num6 = 2/0;
let result5 = typeof num6;
console.log("type of " + num6 + " is: " + result5);

let num7 = 256;
console.log("binary (256): " + num7.toString(2))
console.log("binary (256): " + num7.toString(8))
console.log("binary (256): " + num7.toString(10))
console.log("binary (256): " + num7.toString(16))

const n1 = 5.6456486546544986464631;
const twoDecimalPlaces = n1.toFixed(2);
console.log(twoDecimalPlaces);

const n2 = Number(num3) + Number(num4);
console.log(n2);

let num8 = 100;
console.log( "num8++ is " + num8++);
num8--;
console.log( "num8-- is " + num8);
console.log( "++num8 is " + ++num8);
--num8;
console.log( "--num8 is " + num8);

