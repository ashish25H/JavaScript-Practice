//q-1 print first 10 natural numbers

for(let i=1; i<=10; i++){
    // console.log(`${i}`);
}

//q-2 first 10 natural number in reverse order

for(let i=10; i>=1; i--){
    // console.log(`${i}`);
}

//q-3 print n natural number

let n=100;
for(let i=1; i<=n; i++){
    // console.log(`${i}`);
}

//q-4 print n natural number in reverse order

let m=10;
for(let i=m; i>=1; i--){
    // console.log(`${i}`);
}

//q-5 first 10 even numbers

let evenNum = 10;
for(let i=2; i<=evenNum*2; i=i+2){
    // console.log(`${i}`);
}

//q-6 10 even numbers in reverse order

let evenNumRev = 10;
for(let i=evenNumRev*2; i>0; i=i-2){
    // console.log(`${i}`);
}

//q-7 n even numbers

let nEven = 20;
for(let i=2; i<=nEven*2; i=i+2){
    // console.log(`${i}`);
}

//q-8 n even numbers in reverse order

let nEvenInRev = 18;
for(let i=nEvenInRev*2; i>=2; i=i-2){
    // console.log(`${i}`);
}

//q-9 print 10 odd numbers

for(let i=1; i<=10*2; i=i+2){
    // console.log(`${i}`);
}

// q-10 10 odd numbers in reverse order

for(let i=10*2-1; i>=1; i=i-2){
    // console.log(`${i}`);
}

// q-11  print n odd numbers
let nOddNum = 5;
for(let i=1; i<=nOddNum*2; i=i+2){
    // console.log(`${i}`);
}

//q-12 print n odd numbers in reverse order

let nOddNumInRev = 5;
for(let i=nOddNumInRev*2-1; i>=1; i=i-2){
    // console.log(`${i}`);
}

//q-13 squre of first n numbers
let nNum = 10;
for(let i=1; i<=nNum; i++){
    // console.log(`Squre of ${i} is ${i*i}`);
}

//q-14 sum of n natural numbers
let nNaturalNum = 5;
let sum=0;
for(let i=1; i<=nNaturalNum; i++){
    sum += i;
}
console.log(sum);