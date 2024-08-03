// task 6:
//Write a regular expression  to capture the username and domain from an email address. Log the captures

const email="sonikumari@gmail.com";
const regex=/^([^@]+)@([^@]+)$/;

const matches = email.match(regex);
if(matches){
    const [,username,domain]=matches;
    console.log(`username:${username}`);
    console.log(`Domain:${domain}`);
}else{
    console.log("No match found.");
}