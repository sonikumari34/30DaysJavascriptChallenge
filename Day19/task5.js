// Grouping and Capturing

// task 5:write a regular expression to caputre the area code ,central office code, and linaer number from a  US phone number fromate(ex.(123) 456-7890).Log the captures.

const phoneNumber="(123) 456-7890";


// Create a regular expression to capture the area code, central office code, and line number
const regex=/\((\d{3})\)\s(\d{3})-(\d{4})/;

const matches=phoneNumber.match(regex);
if(matches){
    const [,areaCode ,centralOfficeCode ,lineNumber] = matches;
    console.log(`Area Code : ${areaCode}`);
    console.log(`Central Office Code: ${centralOfficeCode}`);
    console.log(`Line Number: ${lineNumber}`);
}else{
    console.log("No match found.");
}