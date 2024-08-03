//Write regular expression to match all sequences of one or more digits in a string   .Log the matches.

const text =" string My birth day is 1/11  and my roll no. is 34";

// Create a regular expression to match sequences of one or more digits
const regex=/\d+/g;
const matches = text.match(regex);

if(matches){
    matches.forEach(match => console.log(match));
}else{
    console.log("No match found.")
};