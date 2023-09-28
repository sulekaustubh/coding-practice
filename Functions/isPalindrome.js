// VERY EASY
// write a function to check whether a given string is a Palindrome or not

function isPalindrome(str) {
    let revStr = str.split('').reverse().join('')
    return revStr == str ? 'true' : 'false';
}

console.log(isPalindrome('wowowo'));