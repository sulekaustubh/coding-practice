// EASY - RECURSION
// Write a function that takes a natural number n
// If n is a prime number, return n
// If not, return the next higher prime number

function higherPrime(n) {
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
		// higherPrime() is recursively called again with (n+1) as arguement
		return higherPrime(n + 1);
	}
}
console.log(higherPrime(18));
console.log(higherPrime(7));
