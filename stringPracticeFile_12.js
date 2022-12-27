//q-1 find length of a string

const len = ()=>{
    let str = "ashishKumar";
    console.log(str.length);
}
// len();

//q-2 convert into upper case
const upper = (str)=>{
    console.log(str.toUpperCase());
}
// upper("jack");

//q-3 toLowerCase
const LowerCase = (str)=>{
    console.log(str.toLowerCase());
}
// LowerCase("DELHI");

//q-4 reverse a string
const reverse = (str)=>{
    let len ;

    for(let i=0; i<=Math.floor(str.length/2); i++){
        let temp = str.charAt(i);
        str.replaceAt(i,str.charAt(str.length-(i+1)));
        str.replaceAt(str.charAt(str.length-(i+1)),temp);
        // str.charAt(i) = str.charAt(str.length-(i+1));
        // str.charAt(str.length-(i+1)) = temp;
    }
    
    console.log(str);
}
// reverse("ashish");


//q-5 print a list in string
let list = `Guests:
* John
* Mack 
* Boby
* Wind`;
// console.log(list);








