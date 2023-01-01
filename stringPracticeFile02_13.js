//q-1 compare two string
const compareStr = (str1,str2)=>{
    if(str1===str2){
        console.log(1);
    }else{
        console.log(0);
    }
}
// compareStr("ashish","ashish");

//q-2 count vowels in a string
const countVowels = (str)=>{
    let count = 0;

    for(let i=0; i<str.length; i++){
        if((str[i] === 'a' ||str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u') || (str[i] === 'A' ||str[i] === 'E' ||str[i] === 'I' ||str[i] === 'O' ||str[i] === 'U')  ){
            count++;
        }
    }

    console.log(`Number of vowels is ${count}`);
}

// countVowels("ashish");

//q-3 count words in a string
const countWords = (str)=>{
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str.codePointAt(i) === 32){
            count++;
        }
    }
    console.log(`Tolal words are ${count+1}`);
}
// countWords("why you are there");

// console.log(" ".codePointAt());

//q-4 check string is palindrom or not
const reverse = (str)=>{
    let len = str.length;

    for(let i=0; i<Math.floor(str.length/2); i++){
        let temp = str[i];
        str[i] = str[str.length - (i+1)];
        str[str.length - (i+1)] = temp;
    }

}

const palindrom = (str)=>{
    let tempStr = str.split("");
    reverse(tempStr);
    tempStr = tempStr.join("");

    if(str === tempStr){
        console.log(`palindrom`);
    }else{
        console.log(`not palindrom`);
    }
}
// palindrom("wowo");

//q-5 count occurence of a given character in string
const countOccOfChar = (str,ch)=>{
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === ch){
            count++;
        }
    }
    console.log(`${ch} comes ${count} times`);
}
// countOccOfChar("theremoe",'e');

//q-6 find the first occurence of a given character
const firstOccurence = (str,ch)=>{
    console.log(str.indexOf(ch));
}

// firstOccurence("yurto",'o');

//q-7
const compare = (str1,str2)=>{
    if(str1.toUpperCase() === str2.toUpperCase()){
        console.log(1);
    }else{
        console.log(0);
    }
}
// compare("you", "YOU");



//q-8 reverse string
const rev = (str)=>{
    let tempStr = str.split("");

    for(let i=0; i<Math.floor(tempStr.length/2); i++){
        let temp = tempStr[i];
        tempStr[i] = tempStr[tempStr.length - (i+1)];
        tempStr[tempStr.length - (i+1)] = temp;
    }
    str = tempStr.join("");
    console.log(str);
}

// rev("Moradabad");

//q-9 reverse a string word by word
const revByWord = (str)=>{
    let temp = str.split(" ");

    for(let i=0; i<Math.floor(temp.length/2); i++){
        let tempEle = temp[i];
        temp[i] = temp[temp.length - (i+1)];
        temp[temp.length - (i+1)] = tempEle;
    }

    str = temp.join(" ");
    console.log(str);
}

// revByWord("Hello I am a JavaScript Developer");
















