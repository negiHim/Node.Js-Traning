const file = require("fs");

//readFile
const data = file.readFileSync("./content/text.txt",'utf-8');
console.log(data);

// writefile()
const content = "new content add here";
file.writeFileSync("./content/text.txt",content);
console.log("read file sync ");
const data1 = file.readFileSync("./content/text.txt","utf-8");
console.log(data1);

//exists or Not
const isExists = file.existsSync("./content/text.txt");
isExists ? console.log("file already exists"):console.log("file not exists");

//appendFileSync
const  data2="new data appeneded here wesdhasoihdohasdh sadh  !!!"
try{
file.appendFileSync("./content/text.txt",data2);
console.log("file appended successfullly");
}catch(err){
    console.log(err);
}

//opensync()
// to open file different modes
const file1= file.openSync("./content/text.txt","w+");
//In Node.js, file descriptors 0, 1, and 2 are reserved for standard input, standard output, and standard error streams respectively
console.log(file1); // it will return 3 means successfully opened

//mkdirSync()
file.mkdirSync("newcontent/file",{recursive:true});

//closeSync
try{
const fd =file.openSync("./content/text.txt","w+");
console.log("opened file successfully",fd);

//now close file through closeSync()
file.closeSync(fd);
console.log("file closed successfully");
}
catch(err){
    console.log(err);
}