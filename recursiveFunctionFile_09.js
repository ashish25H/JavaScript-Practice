//q-1 recursive function to print first n natural numbers
const printN = (n)=>{
    if(n===0){
        return;
    }
    printN(n-1);
    console.log(n);
}

// printN(10);

//q-2 first n natural number in reverse prder

const reverseOrder = (n)=>{
    if(n===0){
        return;
    }
    console.log(n);
    reverseOrder(n-1);
}

// reverseOrder(10);

//q-3 n even natural numbers
const evenNumbers = (num)=>{
    if(num===0){
        return;
    }
    evenNumbers(num-1);
    console.log((2*num+1)-1);
}
// evenNumbers(10);

//q-4 n even number in reverse order
const reverseOrderEven = (num)=>{
    if(num===0){
        return;
    }
    console.log((2*num+1)-1);
    reverseOrderEven(num-1);
}

// reverseOrderEven(10);

//q-5 print first n odd numbers
const oddNumbers = (n)=>{
    if(n===0){
        return;
    }
    oddNumbers(n-1);
    console.log((2*n+1)-2);
}
// oddNumbers(5);

//q-6 print first n odd numbers in reverse order

const oddNumbersRev = (n)=>{
    if(n===0){
        return;
    }
    console.log((2*n+1)-2);
    oddNumbersRev(n-1);
}

// oddNumbersRev(5);

//q-7 sum of first n natural number
const sumOfNumber = (num)=>{
    if(num===0){
        return 0;
    }
    let sum = num + sumOfNumber(num-1);
    return(sum);   
}

// console.log(sumOfNumber(10));

//q-8 sum of first even natural numbers
const sumOfEvenNumbers = (num)=>{
    if(num===0){
        return 0;
    }
    let sum = 2*num + sumOfEvenNumbers(num-1);
    return sum;
}
// console.log(sumOfEvenNumbers(4));

//q-9 sum of first odd numbers
const sumOfOddNumbers = (num)=>{
    if(num===0){
        return 0;
    }
    let sum = (2*num-1) + sumOfOddNumbers(num-1);
    return sum;
}

// console.log(sumOfOddNumbers(3));   

//q-10 sum of squre
const sumOfSqure = (num)=>{
    if(num===0){
        return 0;
    }
    let sum;
    sum =  (num * num)+sumOfSqure(num-1);
    return sum;
}

// console.log(sumOfSqure(3));

//q-11 sum of digits of a number
const sumOfDigits = (num)=>{
    if(num === 0){
        return 0;
    }
    let re = num%10 + sumOfDigits(Math.floor(num=num/10));
    return re;
}

// console.log(sumOfDigits(1234555));

//q-12 print binary equivalent of a decimal number
const binaryNumber = (num)=>{
    if(num===0){
        return 0;
    }
    binaryNumber(Math.floor(num/2));
    console.log(num%2);
}

// binaryNumber(2);

//q-13 octal equivalent of a number
const octal = (num)=>{
    if(num===0){
        return 0;
    }
    octal(Math.floor(num/8));
    console.log(num%8);
}

// octal(450);


//q-14 reverse of a number
const reverse = (num)=>{
    if(num===0){
        return 0;
    }
  console.log(num%10);
  reverse(Math.floor(num/10));
}
// reverse(9);


// console.log(reverse(679));  //incomplete

//q-15 HCF

const hcf=(num1,num2)=>{
    let min = num1<num2?num1:num2;
    let max = num1>num2?num1:num2;

    if(min===0){
        return 1;
    }
    if(max%min===0){
        return min;
    }else{
        hcf(min-1);
    }

}

// console.log(hcf(3,1));    //incomplete













