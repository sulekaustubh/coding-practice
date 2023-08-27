// Currying in JavaScript

// Traditional approach to writing functions in JavaScript
function add(a, b) {
	return console.log(a + b);
}
add(1, 2);

// Currying function in JavaScript
function addCurry(a) {
	return function (b) {
		return console.log(a + b);
	};
}
addCurry(1)(4);

// Easy explanation
// It is like breaking down a function's work amongst it's nested functions