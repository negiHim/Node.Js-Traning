
let PromiseCall = (returnendValue, methodCall)=>{
	return (resolve,reject)=>{
		setTimeout(()=>{
			console.log(`The ${methodCall} has been resolved`);
			resolve(returnendValue);

		},returnendValue*100 );};
};
let p1 = new Promise(PromiseCall(60,'First'));
let p2 = new Promise(PromiseCall(30,'second'));
let p3 = new Promise(PromiseCall(40,'third'));
let p4 = new Promise((resolve,reject)=>{
	return reject('The 4th promise has rejected');
});

 

//here are using promise.all method

//here printing result and total value
Promise.all([p1,p2,p3]).then((result)=>{
	let total=0;
	for(let i in result){
		total +=result[i];
	}
	console.log(`Results : ${result}`);
	console.log(`Total : ${total}`);

}).catch((err)=>console.log(`Error : ${err}`));




//hif any one Promises failed then no promises will run
Promise.all([p1,p2,p3,p4]).then((result)=>{
	let total=0;
	for(let i in result){
		total +=result[i];
	}
	console.log(`Results : ${result}`);
	console.log(`Total : ${total}`);

}).catch((err)=>console.log(`Error : ${err}`));