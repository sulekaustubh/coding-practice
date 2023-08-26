// EASY - RECURSION
// Write a function that takes a natural number n
// If n is a prime number, return n
// If not, return the next higher prime number

function nextPrime(n) {
	count = 0;
	for (i = 1; i <= n; i++) {
		// a prime number is only divisible by 1 and itself
		if (n % i == 0) {
			// if n is prime, count will always increment max to 2
			// at i = 1 and at i = n
			count++;
		}
	}
	if (count == 2) {
		return `${n} is a Prime number`;
	} else {
		// nextPrime() is recursively called again with (n+1) as arguement
		return nextPrime(n + 1);
	}
}
console.log(nextPrime(18));
console.log(nextPrime(7));
