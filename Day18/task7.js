//find the longest substring of the string and log the substring

function lonestSubstring(s){
    let start=0;
    let maxLength=0;
    let maxStart=0;
    let seenChars=new Set();
    for(let end=0;end<s.length;end++){
        while(seenChars.has(s[end])){
            seenChars.delete(s[start]);
            start++;
        }
        seenChars.add(s[end]);
        if(end-start+1>maxLength){
            maxLength=end-start+1;
            maxStart=start;
        }
    }
    const longestSubstring = s.substring(maxStart, maxStart + maxLength);
    console.log(`Longest Substring Without Repeating Characters: ${longestSubstring}`);
    return longestSubstring;
}
let s = "abcabcbb";
lonestSubstring(s); 