//q-1 calculate average of 10 numbers

const avg = (num) => {
  let sum = 0;
  for (const n of num) {
    sum += n;
  }
  return Math.floor(sum / num.length);
};

// console.log(avg([1,2,3,4]));

//q-2 sum of  numbers stored in an array
const sum = () => {
  let arr = [1, 2, 3, 4];

  console.log(arr.reduce((sum, curr) => sum + curr, 0));
};

// sum();

//q-3 sum of all even and odd numbers which is present in an array
const sumofEvenOdd = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  let evenSum = 0;
  let oddSum = 0;

  arr.map((num) => {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  });
  console.log(`Even number sum is ${evenSum} and odd sum is ${oddSum}`);
};
// sumofEvenOdd();

//q-4 greatest number
const greatestNumber =()=>{
    let arr = [9,6,30090,90,4,6,900,3400];
    let max = arr[0];

    arr.map((num)=>{
        if(num>max){
            max=num;
        }
    });
    console.log(max);
}

// greatestNumber();

//q-5 smallest element in an array
const smallest = ()=>{
    let arr = [2,4,3,0,7,9,1];
    let min = arr[0];

    arr.map((num)=>{
        if(num<min){
            min=num;
        }
    });

    console.log(min);
}
// smallest();

//q-6 sort an array

const sort = ()=>{
    let arr = [5,6,2,1,4,90,55,78,0];

    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1; j++){
          if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
        }
    }

    console.log(arr);
}

// sort();





