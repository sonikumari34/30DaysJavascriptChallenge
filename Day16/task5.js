//task 5:

function swap(str,left,right){
    if(left>=right){
        return str;
    }

    let charArray=str.split('');
    let temp=charArray[left];
    charArray[left] = charArray[right];
    charArray[right]=temp;

    str = charArray.join('');
    return swap(str,left+1,right-1);

}

function revString(str){
    return swap(str,0,str.length-1);
}
let str = "hello";
console.log(revString(str));

//Approach 2: inbuilt
function revString2(str){
    return str.split("").reverse().join("");

}
let str2 = "hello";
console.log(revString2(str2)); 
