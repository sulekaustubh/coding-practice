// EASY
// reverse a string without using .reverse() method
// space complexity should be O(1)
// time complexity should be O(n)

function reverseString(str) {
    let start = 0;
	let end = str.length - 1;
    str = [...str];
    
	while (start < end) {
        [str[start], str[end]] = [str[end], str[start]];
		start++;
		end--;
	}
    
	return console.log(str.join(''));
}

reverseString('Hello World');

// here space complexity is O(n) because we've to convert string into array [...str]
// where n = length of array
// if we directly provide an array to the function then space compelxity is O(1)