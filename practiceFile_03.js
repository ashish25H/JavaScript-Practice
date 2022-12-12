//q-1 check number is positive and negative
let num = 5;

if(num > 0){
    console.log(`Positive`);
}else if(num === 0){
    console.log(`zero`);
}else{
    console.log(`Negative`);
}

//q-2 chech number is divisible by 5 or not

let x =8;
if(x%5===0){
    console.log(`divisible by 5`);
}else{
    console.log(`not divisible by 5`);
}

//q-3 check even or odd
let a = 5;

if(a % 2 === 0){
    console.log(`Even`);
}else{
    console.log(`Odd`);
}

//q-4 check leap year
let y=1900;

if(y%100 === 0){
    if(y%400 === 0 && y%4===0){
        console.log(`Leap year`);
    }else{
        console.log(`Not a leap year`);
    }
}else{
    if(y%4===0){
        console.log(`leap year`);
    }else{
        console.log(`Not a leap year`);
    }
}

//q-5 greater amoung three numbers
let w=8;
let b=90;
let c=70;

if(w>b && w>c){
    console.log(`${w} is the greater number`);
}else if(b>c){
    console.log(`${b} is greater`);
}else{
    console.log(`${c} is greater`);
}
