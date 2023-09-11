// MEDIUM
// you are given an array of strings
// create a new object with keys as the first letters of each array element
// and for values, every object key must have an array of strings that start with their respective key

function arrayToObject(arr) {
	arr.sort();
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		let firstLetter = arr[i][0];
		if (!obj[firstLetter]) {
			obj[firstLetter] = [];
		}
		// obj[firstLetter].push(arr[i]);
		obj[firstLetter].push(arr[i]);
	}
	return console.log(obj);
}

let arr = ['ant', 'cat', 'bat', 'cup', 'dog', 'dot', 'arc'];
arrayToObject(arr);
