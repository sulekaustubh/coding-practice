// var has GLOBAL state
// it is HOISTED
// it can be Declared and Initialized again
var x = 10;
var x = 20;
console.log(x);

// let has LOCAL state
// it is NOT HOISTED
// it cannot be Declared again but it can be Initialized again
let y = 10;
y = 20;
console.log(y);

// const has LOCAL state
// it is NOT HOISTED
// it cannot be Declared and Initialized again
const z = 10;
console.log(z);
