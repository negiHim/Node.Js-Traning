let complete = true;
let proms = new Promise((resolve,reject)=>{
    if(complete){
        resolve('i am successfull');
    }
    else{
        reject('I am failed');
    }
});

console.log('Proms function');
proms.then(response => console.log(response)).catch(err => console.log(err));

function proms1(complete){
    return new Promise((resolve,reject)=>{
        if(complete){
            resolve('i am successfull');
        }
        else{
            reject('I am failed');
        }
    });
}

// if we want to do furthur work after promise fullfill or reject
function OnSuccess(success){
    console.log(success);
}
function OnFailed(error){
    console.log(error);
}

// now to call the above fucntionality we have to use callbacks functions then and catch
proms1(true).then(OnSuccess);
proms1(false).catch(OnFailed);

proms1(true).then((success)=>console.log(success));

function proms2(complete){
    return new Promise((resolve,reject)=>{
        // fetching data from database
        console.log('fetching data from database');
        setTimeout(()=>{
            if(complete){
                resolve('i am successfull');
            }
            else{
                reject('I am failed');
            }
        },1000);
    });
}

//short hand of above code
proms2(false).then(OnSuccess=>console.log(OnSuccess)).catch(error=>console.log(error));

//now fetching some post form ajax
// to use this we need  cdn of jquery 
function proms3() {
    return new Promise(function(resolve, reject) {
        console.log('Fetching Posts from CDN by fetch method');
        let link = 'https://jsonplaceholder.typicode.com/posts';
        fetch(link)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to load posts');
                }
            })
            .then(posts => {
                resolve(posts);
            })
            .catch(error => {
                reject(error);
            });
    });
}
 
proms3()
    .then(posts => {
        console.log(posts);
    })
    .catch(error => {
        console.error(error);
    });
 

