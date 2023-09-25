// find the sum of 2 largest numbers from an array
// DO NOT USE .sort() and .reverse()

function sumOfMaxNumbers(arr) {
	let num1 = Math.max(...arr);
	let num2 = Math.max(...arr.filter((i) => i !== num1));

	return console.log(num1 + num2);
}

sumOfMaxNumbers([1, 2, 3, 4, 5, 6]);

// ----------------------------------------------------------------
// if .filter() method is NOT ALLOWED

// let num1 = Math.max(...arr)
// let removedNumber = arr.indexOf(num1)
// arr[removedNumber] = 0;
// let num2 = Math.max(...arr)

// console.log(num1 + num2)
