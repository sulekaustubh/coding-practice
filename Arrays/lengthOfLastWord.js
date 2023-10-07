// VERY EASY
function lengthOfLastWord(arr) {
	// 1. with methods
	return console.log(arr.slice(-1).join().length);
	return console.log(arr.slice(-1)[0].length);

	// 2. without methods
	return console.log(arr[arr.length - 1].length);
}

lengthOfLastWord(['bitc0in', 'so1ana', 'dog3coin', 'eth3reum', 'ch4inlink']);
