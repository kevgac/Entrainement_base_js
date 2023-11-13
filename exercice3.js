/*
Fonction qui prends en argument un entier, et qui renvoie un booléen.
est-ce que l'argument est un palindrome ?

input = 121
output = true

input = -121
output = false

input = 10
output = false
*/

// solution 1

let isPalindrome = function(x) {
    if(x < 0){
        return false;
    }

    const str = String(x);
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


// solution 2
/*
let isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let normal = x.toString();;
    let reversed = normal.split('').reverse().join('');

    return normal === reversed;
}
*/


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));


console.log("***********************");

// Palindrome sur mot
function isPalindromeWord (word) {
    const reversedWord = word
        .split('')
        .reverse()
        .join('')
    return word.toUpperCase() === reversedWord.toUpperCase()
}

console.log(isPalindromeWord("kayak"));