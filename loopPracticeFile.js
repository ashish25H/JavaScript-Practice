//q-1 check number is prime or not
const checkPrime = (num) =>{
 let i;

    for(i=2; i<=Math.floor(num/2); i++){
        if(num%i === 0){
            console.log(`${num} is not a prime number`);
            break;
        }
    }
    if(i>Math.floor(num/2)){
        console.log(`${num} is prime number`);
    }

}

// checkPrime(49);

//q-2 print all prime numbers between 1 to 100
const printPrime = () =>{
    num = 2;
   for(let num=2; num<100; num++){
    let i;

    for(i=2; i<=Math.floor(num/2); i++){
        if(num%i === 0){
            // console.log(`${num} is not a prime number`);
            break;
        }
    }
    if(i>Math.floor(num/2)){
        console.log(`${num} `);
    }
   }
}
// printPrime();

//q-3 print all prime numbers between two given numbers
const primeBetween = (min,max) =>{
    for(let i=min+1; i<max; i++){
        let x;
        for(x=2; x<=Math.floor(i/2); x++){
            if(i%x===0){
                break;
            }
        }
        if(x>Math.floor(i/2)){
            console.log(`${i}`);
        }
    }
}

// primeBetween(2,50);

//q-4 print next prime number
const isPrime = (num)=>{
    let i;
    for(i=2; i<=Math.floor(num/2); i++){
        if(num%i === 0){
            num++;
            i=2;
        }
    }
    if(i>Math.floor(num/2)){
        return num;
    }
}

const nextPrime = (num)=>{
    let num2 = num + 1;
   
        console.log(isPrime(num2));
    
}

// nextPrime(9635);

//q-5 print first n prime numbers

const printFirstNPrime = (n) =>{
    let x = 2;
    while(n>0){
        let i;
        for(i=2; i<=Math.floor(x/2); i++){
            if(x%i===0){
                i=2;
                x++;
            }
        }
        if(i>Math.floor(x/2)){
            console.log(x);
            x++;
            n--;
        }
    }
}

// printFirstNPrime(10);

//q-6 lcm of two numbers
const LCM = (a,b) =>{
    let pro = a*b;
    let small = a<b?a:b;
    let max = a>b?a:b;


    if(max%small === 0){
        console.log(max);
    }else{
        console.log(pro);
    }
}

// LCM(2,10);

//q-7 hcf of two numbers
const hcf = (n,m) =>{
    let min = n>m?n:m;
    let max = m>n?m:n;


    while(true){
        if(n % min ===0  && m % min === 0){
            console.log(min);
            break;
        }else{
            min--;
        }
    }
}

// hcf(14,4);

//q-8 print all the factor of a number

const factor = (num) =>{
    console.log(1);
    let n = 2;
    while(n<=num){
        
        if(num % n === 0){
            console.log(n);
            n++;
        }else{
            n++;
        }
    }
}

// factor(5);