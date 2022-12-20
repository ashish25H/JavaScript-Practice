//q-1 sum of squre first N natural numbers
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i * i;
}

// console.log(sum);

//q-2 sum of qubes of first n natural numbers

const sumOfQubes = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i * i;
  }
  console.log(sum);
};

// sumOfQubes(3);

//q-4 factorial of a number

const fact = (n) => {
  let pro = 1;
  for (let i = 1; i <= n; i++) {
    pro *= i;
  }
  console.log(pro);
};

// fact(5);

//q-5 count digits in a number

const countDigites = (n) => {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  console.log(`Number of Digites is ${count}`);
};

// countDigites(0);

//q-6 sum of digites

const sumOfDigites = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  console.log(sum);
};

// sumOfDigites(45);

//q-7 reverse a number

const reverseNumber = (num) => {
  let newNum = 0;
  while (num > 0) {
    newNum *= 10;
    newNum += (num % 10);
    num =Math.floor(num / 10);
  }
  console.log(newNum);
};

// reverseNumber(678);

//q-8 first n term of fibonacci series
const fibo = (n) => {
    let a = -1;
    let b = 1;

    for(let i=1; i<=n; i++){
        let c= a+b;
        console.log(c);
        a=b;
        b=c;
    }

}
// fibo(10);




