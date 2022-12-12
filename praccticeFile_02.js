//q-1 swap tow values
let x=9;
let y=10;
console.log(`Before swap x=${x} y=${y}`);
let temp;
temp=x;
x=y;
y=temp;
console.log(`After swap x=${x} y=${y}`);

//q-2 swap without thired variable
let a=4;
let b=2;

a=a+b;
b=a-b;
a=a-b;
console.log(`a=${a} b=${b}`);

//q-3 last digit of a number
let num=1094587;

console.log(`Last digit of ${num} is ${num%10}`);

//q-4 Print given number but without the last digit
let n = 987;

console.log(`${Math.floor(n/10)}`);

//q-5 print ASCII code

let ch = "A";
console.log(ch.charCodeAt());