// write a function to print all the PRIME numbers between 1 and n

function printPrime(m) {
    let arr = [];

    for (j = 1; j <= m; j++){
        if (isPrime(j)) {
            arr.push(j);
        }
    }
    return console.log(arr);
}

// check whether a number is prime or not
function isPrime(n) {
	let count = 0;

	for (i = 1; i <= n; i++) {
		if (n % i == 0) {
			count++;
		}
	}
	if (count == 2) {
		return true;
	}
}

printPrime(20);
