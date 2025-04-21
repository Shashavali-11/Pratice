// Problem 1 :- Count the number of vowels in a string
ip1 = "hello"; // op=2
// countVowel(ip1); 
function countVowel(ip1){
    count = 0;
    for(i=0; i<ip1.length; i++){
        let vowles = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        if(vowles.includes(ip1[i])){
            count++;
        }
    }
    console.log(count)

}


// Problem 2 :- Reverse a string
ip2 ="world"; // op="dlrow"
// reverseString(ip2);
function reverseString(ip2){
    out=""
    for(i=ip2.length-1; i>=0; i--){
        out = out + ip2[i];
    }
    console.log(out)
    
}
    

// Problem 3 :- Check if a string is a anagram of another string
ip3 = "listen";
ip4 = "silent"; // op=true
// isAnagram(ip3, ip4);
function isAnagram(ip3, ip4){
    if(ip3.length === ip4.length){
        let ip3Sort = ip3.split("").sort().join(",")
        let ip4Sort = ip4.split("").sort().join(",")
        console.log(ip3Sort === ip4Sort)
    } else{
        console.log(false)
    }
}
    



// Problem 4 :- First Non-Repeating Character
ip5 = "aabbcddfe" // op=c 
// firstNonRepeating(ip5);
function firstNonRepeating(ip5){
    str5 = ""
    for(i=0; i<ip5.length; i++){
        if(str5.includes(ip5[i])){
            str5 = str5.replace(ip5[i], "")
        } else{
            str5 += ip5[i]
        }
    }
    
    console.log(str5[0])
}

    
// Problem 5 :- Longest Palindromic Substring
ip6 = "malayalam"; // op=malayalam
// longestPalindromicSubstring(ip6);
function longestPalindromicSubstring(ip){
    let longest = "";
    for(let i=0; i<ip.length; i++){
        for(let j=i+1; j<ip.length; j++){
            let substring = ip.slice(i, j+1);
            if(substring === substring.split("").reverse().join("") && substring.length > longest.length){
                longest = substring;
            }
        }
    }
    console.log(longest)
}


// Problem 6 :- String Compression
ip6 = "aabbbcca"
// stringCompression(ip6);
function stringCompression(str){
    let compress = "";
    let count = 1;
    for(i=0; i<str.length; i++){
        if(str[i] == str[i+1]){
            count++;
        } else{
            compress += str[i] + count;
            count = 1;
        }
    }
    console.log(compress)
}

// Problem 7 :-

ip7 = [-1,2,3,-4,-8,9,10]  // op => [-1,-4,-8,2,3,9,10]
fun(ip7)
function fun(arr){
    let negative = [];
    let positive = []
    for(i of arr){
        if(i < 0){
            negative.push(i);
        }else{
            positive.push(i);
        }
    }
    console.log(...negative, ...positive)
    console.log(negative + " " + positive)

}