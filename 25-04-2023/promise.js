let complete = true;
let proms1 = new Promise((resolve,reject)=>{
	if(complete){
		resolve('i am successfull');
	}
	else{
		reject('I am failed');
	}
});

proms1;

function proms2(complete){
	return new Promise((resolve,reject)=>{
		if(complete){
			resolve('i am successfull');
		}
		else{
			reject('I am failed');
		}
	});
}
//if we want to do furtur work after promise fullfill or reject
function OnSuccess(success){
	console.log(success);
}
function OnFailed(error){
	console.log(error);
}

//now to call the above fucntionality we have to use callbacks functions then and catch
proms2(true).then(OnSuccess);
proms2(false).catch(OnFailed);


function proms3(complete){
	return new Promise((resolve,reject)=>{
		//fetching data from database
		console.log('fetching data from database');
		
		if(complete){
			resolve('i am successfull');
		}
		else{
			reject('I am failed');
		}
		
	});
}

// //short hand of above code
proms3(false).then(OnSuccess=>console.log(OnSuccess)).catch(error=>console.log(error));


