// simulating data fetching with a delay
function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => resolve('I am the promise that simulates delay.'), 5000);
	});
}

// asynchronous non-blocking operation
async function renderData() {
    console.log('I execute immediately.');
    // await pauses the function execution untill it receives a resolved promise
	const data = await fetchData();
	console.log(data);
	console.log('I wait until await receives a resolved promise.');
}

renderData();
console.log('I am the proof that async-await is non-blocking.');