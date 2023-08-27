// reverse an array using recursion
// do not create a new array
// do not use in-built methods like reverse

function reverseArrayRecursion(arr) {
    
	let start = 0;
	let end = arr.length - 1;

	function callBack() {
		if (start < end) {
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start++;
			end--;
			callBack();
		}
	}

	callBack();
	return console.log(arr);
}

reverseArrayRecursion([6, 5, 4, 3, 2, 1]);
