// task 8: Write a regular expressions to match a word only if it is at the end of the string .Log the mathches
let text = "Hello ,Look at you!";

let regex=/you!$/; // Regular expression to match "you!" only if it is at the end of the string

let result=text.match(regex);
if(result){
    console.log(`It is found:${result}`);
}else{
    console.log("Not found");
}