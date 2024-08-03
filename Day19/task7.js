//Activity 4:Assertions and Bounderies

//Task 7: Write  a regular expression to match a word only if it is at the beginning of a string.Log the matches.
let text = " Hello ,Look At you!";

let regex=/^Hello/; //// Regular expression to match "Hello" only if it is at the beginning of the string


let result = text.match(regex);
if(result){
    console.log(`It is found: ${result}`);
}else{
    console.log("No found");
}
