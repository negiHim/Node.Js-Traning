// 1. first class function
function sayhello() {
    return 'Hello !!!';
}
//passing function as function
function greet(hellomsg, name) {
    console.log(`${hellomsg()} ${name}`);
}

greet(sayhello, 'Kakashi');

//2. declare variables 
var greet = 'hello';
console.log(greet);
//again can declare variable if var used
//because its scope is global
var greet = 'Hello World !!!';
console.log(greet);

//it's scope inside the block
{
    let name = 'rajesh';
    console.log(name);
}
// console.log(name); // can't access name here

//const is for constant can occupy value only once
const PI = 3.14;
console.log(PI);
// PI=3.16; // throw error here 

//hold big integer value 
let largeval = BigInt('1234444444445456456464564564564');
console.log(largeval);

//array in JS

//declaration of array
const anime = ['Attack of Titans', 'Jujustu Kaisen', 'Naruto'];
console.log(anime[0]);
console.log(anime[2]);

// you can add element into array by push method
anime.push('Haikyu');

console.log(anime);

//decalre object in js
let customer = {
    name: 'Kaguya',
    age: 22,
    department: 'Sales',
    //we can also create funcion here
    detail : function(){
        console.log(`Name : ${this.name} Age : ${this.age} Department : ${this.department}`);
    }
};

//accessing details
console.log(customer.detail());

//also change property
customer.name='Minato';
//access object properties
console.log(`Name of Customer : ${customer.name} \n 
Age of Customer :${customer.age} \n
Department of customer : ${customer.department}`);

//  js Exponent operator
console.log('2^2 : '+(2**2));
//also can use Math.pow()
console.log('3^2 : '+Math.pow(3,2));

//left shift
let number = 100;
console.log(number>>=1); // right shifted 1 times means value divide by 2 once
console.log(number<<=5); // left shifted 5 times means value 2 multiply five times with value


//typeof operator :- to know type of variable
const name ='Adarsh';
console.log(typeof name);

const num = 3.141;
console.log(typeof num);


let ageOfCustomer;
console.log(typeof age);


//javascript functions
function add (num1,num2){
    return num1+num2;
}
console.log('addition = '+add(10,80));

let multiply = (num1,num2)=>{
    return num1*num2;
};

console.log('Multiplication : '+multiply(10,20));



//string
let text = 'hello it\'s monday today!!';
console.log('Length of string'+text.length);

//we can also string through new keyword
let str1='atom';
let str2='atom';
console.log(str1==str2);

let newStr = new String('atom');
let newStr1 = new String('atom');
console.log(newStr==newStr1);

//string slice method
// extarcts parts from a string
let sentence = 'hello how are you doing !!!';
console.log(sentence.slice(2,4));
console.log(sentence.substring(5,8));

// string Replacing method : this function replace only first occurrence
let text1 = 'Visit saudi';
let newtext = text1.replace('saudi','Uttarakhand');
console.log(newtext);

//replace method is Case sensitive
// so to remove case sensitive
let newtext1=text1.replace(/SAUDI/i,'Himachal Pradesh');
console.log(newtext1);

// string ReplaceAll() : it will replace all the occurrence
let txt = 'Visit saudi !! Visit saudi';
let txtAfterReplaceAll = txt.replaceAll('saudi','Rajasthan');
console.log(txtAfterReplaceAll);

//string toUpperCase()
let txtuppercase = 'Hello Ritesh';
console.log(txtuppercase.toUpperCase());
let txtlowercase = 'HELLO RITESH';
console.log(txtlowercase.toLowerCase());


//string concat()
let username = 'Adarsh';
let userlastname= 'Bajpai';
console.log(username.concat(' ',userlastname));

//string trim() : to trim spaces 
let customername = '    Himanshu     ' ;
console.log(customername.trim(' '));
console.log(customername.trimStart(' '));
console.log(customername.trimEnd(' '));

//string padStart()
let no='5';
console.log(no.padStart(4,'x'));
console.log(no.padStart(3,'0'));
console.log(no.padEnd(3,0));
console.log(no.padEnd(3,'x'));

// string toString()
let number10 = 12;
let animeName ='Akshat'+number10.toString();
console.log(animeName);

//string Characters
// 1. charAt()
let studentName = 'adarsh';
console.log(studentName.charAt(0));
//2. charCodeAt()
console.log(studentName.charCodeAt(0));

console.log(studentName[3]);
studentName[0]='A'; //it will not work but doesn't give error
console.log(studentName);

//string split()
let vendorName = 'Amazon,Microsoft,Google';
let vendorNameArr=vendorName.split(',');
console.log(vendorNameArr[0]);
console.log(vendorNameArr[1]);
console.log(vendorNameArr[2]);

//string search methods
let strname = 'helloo how are you';
let ind  = strname.indexOf('you');
console.log(ind);
// search()
let str1name ='helloo how are doing';
let ind1= str1name.search('doing');
let ind2 = str1name.indexOf('doing',2);
console.log(ind1);
console.log(ind2);

//match()
let str2sentence = 'This is a pen';
console.log(str2sentence.match(/en/gi));

//isNaN() [Not a Number]
let div = 100/'him'; // it will give true
let div1 = 100/10; //it will give false
console.log(isNaN(div));
console.log(isNaN(div1));

//difference between == and ===
let no1 = 500;
let no2=new Number(500);

console.log(no1==no2); // it will give true because only checks values not reference type
console.log(no1===no2); // it will give false because checks refernce with value


//array in js 
const arr = ['yolo','volvo',13];
console.log(arr[0]);
console.log(arr[1]);

//another way to declare array
const laptopName = new Array('HP','Lenovo','Asus');
laptopName[0]='Alein ware';
console.log(laptopName[2]);
console.log(laptopName[0]);

//ararys methods
console.log(laptopName.length);
console.log(laptopName.sort());

//we can also use loop
for(let i in laptopName){
    console.log(laptopName[i]);
}

//type of operators with array
console.log(typeof laptopName);
console.log(laptopName.join('*'));

//push and pop
console.log(laptopName.push('Asus2'));
console.log(laptopName);
console.log(laptopName.pop());

//shift()
console.log(laptopName.shift());
console.log(laptopName);

//concat()
const stateName1 = ['UP','Delhi','UK'];
const stateName2 =['MP','Bihar','Punjab'];
// it will concat both arrays
//it can also concat 3 arrays
// stateName.concat(arr2Name,arr3Name);
const states = stateName1.concat(stateName2);
console.log(states);
//also can concat() string with array
const states1=states.concat('J&K');
console.log(states1);

//slice() : it create new array not remove elemnets from array
const fruits = ['Banana','Orange','Lemon'];
const fruit =fruits.slice(1); //it will create new arrayy from index 1
console.log(fruits);
console.log(fruit);

//sort()
console.log(fruits.sort());

//but it sorts value as strings
//so in case of numbers it will give wrong output
const num3=[34,54,10,6,5];
console.log(num3.sort()); //here will produce wrong output
//so to fix this we compare function
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
function compareNumbers(a, b) {
    return a - b;
}
numbers.sort(compareNumbers);

console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

//reverse()
console.log(fruits.reverse());


// Math functions
const arr3=[200,4000,200,90];
console.log(Math.max.apply(null,arr3));

console.log(Math.min.apply(null,arr3));

//loops in js
const numbers1 =[45,34,23,4];

//forEach loop
numbers1.forEach((value)=>{
    console.log(value);
});

//for loop
console.log('Through for Loop');
for(let i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}

//for in loop
const obj = {fname: 'Karun', lname: 'Dartin', age: 25};

for(let key in obj){
    console.log(obj[key]);
}

//for of loop : for iterable object
//like :- arrays , string,maps etc
const vehicle = ['car','truck','jeep'];

for(let val of vehicle){
    console.log(val);
}

//while loop
let i=0;

while(i<4){
    console.log(i++);
}

//do while loop4
console.log('Through do while loop');
do{
    console.log(i++);
}while(i<10);



// rest operator
function sum(name,...args){
    console.log(arguments);
    console.log(`Helllo ${name}`);
    let total=0;
    for(let i in args){
        total+=args[i];
    }
    console.log('Addition :-'+total);
}

sum('kakshi',20,30,40,50);
sum('Naruto',40,60);

//spread operator()
const arr1 =[1,2,3,5];
const arr5 =[6,7,8,9];
console.log('Numbers prints individually');
console.log(...arr1);
const arr6 = [...arr1,...arr5];
console.log('Arrays after merged through spread operators');
console.log(arr6);

//destructing of array
let user = ['google engine',24];
let u_name = user[0];
let u_age=user[1];
//but we can also write it
let[user_name,user_age]=user;
console.log(user_name);
console.log(user_age);

let user1 =['Google',22,['Engine',2000]];
let[Uname,Uage,[type,capacity]]=user1;
console.log(type);
console.log(capacity);

//Promise.all()
//only runs if all promise fullfills
let p1 = new Promise((res,rej)=>{
    console.log('first promise');
    res('First promise resolve');
});

let p2= new Promise((res,rej)=>{
    console.log('second promise');
    res('Second promise resolve');
});


Promise.all([p1,p2]).then((success)=>console.log('both promise fullfilled'))
    .catch(err=>console.log(err));
 
