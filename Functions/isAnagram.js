// VERY EASY
// write a function to check whether a given string is an Anagram or not

function isAnagram(str1, str2) {
    str1 = [...str1.toLowerCase()].sort().join('');
    str2 = [...str2.toLowerCase()].sort().join('');
    return str1 == str2 ? true : false;
}

let str1 = 'Mary';
let str2 = 'Army';

console.log(isAnagram(str1,str2))