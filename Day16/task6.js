//task 6:

function isPallindrome(str,i){
    let n=str.length;
    if(i>=n/2){
        return true;
    }
    if(str.charAt(i)!=str.charAt(n-i-1)){
        return false;
    }
   return   isPallindrome(str,i+1);
}
let str="hello";
let str2="madam";
let str3='';
console.log(isPallindrome(str3,0));