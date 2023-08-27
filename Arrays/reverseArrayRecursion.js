let start = 0;
let end = 5;

function reverseArrayRecursion(arr) {
	[arr[start], arr[end]] = [arr[end], arr[start]];
	start++;
	end--;

	if (start > end) {
		return console.log(arr);
	} else {
		reverseArrayRecursion(arr);
	}
}

reverseArrayRecursion([6, 5, 4, 3, 2, 1]);
