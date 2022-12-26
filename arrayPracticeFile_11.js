//q-1 rotate array towards right by one position
const rotate = ()=>{
    let arr = [1,2,3,4,9,6];
    let lastEle = arr[arr.length-1];

    for(let i=arr.length-2; i>=0; i--){
        arr[i+1] = arr[i];
    }

    arr[0]=lastEle;
    console.log(arr);
}
// rotate();

//q-2 reverse an array
const reverse = ()=>{
    let arr = [1,2,3,4,9,7];
    
    for(let i=0; i<=Math.floor((arr.length-1)/2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-(i+1)];
        arr[arr.length-(i+1)] = temp;
    }

    console.log(arr);
}

// reverse();

//q-3 find index of smallest element
const minIndex = ()=>{
    let arr =[1,2,3,4,0,-9];

    let minIdx = 0;
    let min = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
            minIdx = i;
        }
    }
    console.log(`Min number is ${min} index is ${minIdx}`);
}

// minIndex();




//q-4 print distinct elements of an array
const sort = (arr)=>{
    // let arr = [5,6,2,1,4,90,55,78,0];

    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1; j++){
          if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
        }
    }
    return arr;
}

const distinct = (arr)=>{
    arr = sort(arr);
    let firstEle = arr[0];

    for(let i=1; i<=arr.length; i++){
        if(firstEle !== arr[i]){
            console.log(firstEle);
            firstEle = arr[i];
        }
    }

}
// distinct([1,2,2,3,4,5,5,6,0,9,9,8]);

//q-5 frequency of each element 
const freq = (arr)=>{
    arr = sort(arr);
    let firstEle = arr[0];
    let count = 1;

    for(let i=1; i<=arr.length; i++){
        if(firstEle !== arr[i]){
            console.log(`${firstEle} comes ${count} times`);
            firstEle = arr[i];
            count = 1;
           
        }else{
            count++;
        }
    }
    
}

// freq([4,6,2,3,4,7,5,8,8]);
// 2 3 4 4 6 6


//q-6 mean deviation
const meanDeviation = (arr)=>{
    let sum = 0;
    for (const ele of arr) {
        sum += ele;
    }

    let mean = Math.floor(sum/arr.length);
    // console.log(`Mean ${mean}`);

    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] - mean;

        if(arr[i] < 0){
            arr[i]= -arr[i];
        }
    }
    // console.log(arr);

    let newSum = 0;
    for (const ele of arr) {
        newSum += ele;
    }

    console.log(`Mean Deviation = ${Math.floor(newSum/arr.length)}`);
}

// meanDeviation([2,4,8,10]);

//q-7 standard deviation
const standDev = (arr)=>{
    let sum = 0;
    for(const ele of arr){
        sum += ele;
    }

    let mean = Math.floor(sum/arr.length);
// console.log(mean);

    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] - mean;

        if(arr[i] < 0){
            arr[i]= -arr[i];
        }

        arr[i] = arr[i]*arr[i];
    }

    let newSum = 0;
    for(const ele of arr){
        newSum += ele;
    }

   
    console.log(`${ Math.sqrt(Math.floor(newSum/arr.length-1))}`);

}

// standDev([51,38,79,46,57]);



