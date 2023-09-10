// // array of string was given,
// // make an object with key as the strings initial char
// //  and the array of string with all elements starting with that character.
// let arr = [
// 	'ant',
// 	'apple',
// 	'bat',
// 	'cat',
// 	'cup',
// 	'dog',
// 	'dark',
// 	'dot',
// 	'apron',
// 	'arc',
// ];
// arr.sort();
// let temp;
// let obj = {};
// let newArr = [];
// for (i = 0; i < arr.length; i++) {
// 	temp = arr[i][0];
// 	newArr = arr.filter((i) => i[0] == temp);
// 	obj[temp] = newArr;
// 	arr.splice(0, newArr.length);
// 	i = -1;
// }
// console.log(obj);

let arr = [
	'ant',
	'apple',
	'bat',
	'cat',
	'cup',
	'dog',
	'dark',
	'dot',
	'apron',
	'arc',
];

arr.sort();
let obj = {};

for (let i = 0; i < arr.length; i++) {
	let firstLetter = arr[i][0];
	if (!obj[firstLetter]) {
		obj[firstLetter] = [];
	}
	obj[firstLetter].push(arr[i]);
}

console.log(obj);
