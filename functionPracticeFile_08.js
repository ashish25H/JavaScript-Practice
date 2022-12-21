//q-1 calculate area of circule

const areaOfCircule = (r)=>{
    console.log(`${2*Math.PI*r}`);
}

// areaOfCircule(2);

//q-2 calculate circumference of circule

const cir = (r)=>{
    return 2*Math.PI*r;
}

// console.log(cir(4).toFixed(2));

//q-3 print first n even natural numbers
const firstEven = (n)=>{
    for(let i=2; i<=n*2; i=i+2){
        console.log(i);
    }
}
// firstEven(8);

//q-4 sum of squres of natural number
const sumOfSqure = (num)=>{
    let sum =0;

    for(let i=1; i<=num; i++){
        sum += i*i;
    }
    return sum;

}
// console.log(sumOfSqure(3));

//q-5 check even or odd
const evenOrOdd = (num)=>{
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}

// console.log(evenOrOdd(2069));

//q-6 factorial of a number
const fact = (num)=>{
    let pro = 1;
    for(let i=1; i<=num; i++){
        pro *= i;
    }
    return pro;
}

// console.log(fact(5));

//q-7 permutation

const per = (n,r)=>{
    return(Math.floor(fact(n)/fact(n-r)));
}

// console.log(per(12,2));


//q-8 combation 
const combation = (n,r)=>{
    return(Math.floor(fact(n)/(fact(r)*fact(n-r))));
}

// console.log(combation(12,2));

//q-9 check armstrong number
const armstrong = (num)=>{
    let sum = 0;
    let temp = num;
    while(num>0){
        let re = num%10;
        sum += re*re*re;
        num =Math.floor(num/10);
    }
    if(sum === temp){
        console.log(temp);
    }
}
// console.log(armstrong(407));

//q-10 print armstrong between range

const printArm = (min,max)=>{
    for(let i=min+1; i<max; i++){
        armstrong(i);
    }
}

// printArm(1,1000);

//q-11 remove all occurrence of a number
const remove =(num,n)=>{
    let temp = 0;
    let oldNum = num;
    while(num>0){
        temp *= 10;
        let rem = num%10;
        if(rem === n){
            num = Math.floor(num/10);
            continue;
        }else{
            temp += rem;
            num = Math.floor(num/10);
        }
    }

    console.log(`Old number ${oldNum} new ${temp}`);
}

remove(9873232,2);





