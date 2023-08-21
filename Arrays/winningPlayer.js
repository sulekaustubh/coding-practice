// VERY EASY
// an array is made up of numbers 1 and 2
// first, count the number of occurences of 1 and 2
// return the count which is larger

function winningPlayer(arr) {
	let countP1 = 0;
	let countP2 = 0;

	arr.map((i) => (i == 1 ? countP1++ : countP2++));

	return console.log(Math.max(countP1, countP2));
}

winningPlayer([1, 2, 2, 1, 1]); // 3
winningPlayer([1, 2, 1, 2, 2, 2, 1]); // 4

// each array represents a match between 2 players
// each i'th element represents a round
// 1 is for player1 wins that round
// 2 is for player2 wins that round
// winner is determind based on number of occurences of each number
// find how many times the winner won in each match
