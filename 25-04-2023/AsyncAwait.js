async function test() {
	try{
		let response = await fetch('https://jsonplaceholder.typicode.com/posts');
		let res = await response.json();
		return res;
	}
	catch (error) {
		console.log(error);
	} 

}
test().then((response) => {
	for (var i in response) {
		console.log(response[i].title);
	}
});