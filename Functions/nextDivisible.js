// EASY - RECURSION
// Write a function to check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisble by y

function nextDivisible(x, y) {
    return x % y == 0 ? x : nextDivisible(x + 1, y);
}

console.log(nextDivisible(10,5))
