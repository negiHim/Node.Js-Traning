/* eslint-disable linebreak-style */
const file = require('fs');
// to write in file asynchronously;
const content = 'Hello guys how are you !!!';
file.writeFile('./content/text.txt', content, (err) => {
    if (err) console.log(err);
    else console.log('file saved');
});

// to append new data to existing module
const newcontent = 'Hello new content starts from here !!!';
file.appendFile('./content/text.txt', `\n${newcontent}`, (err) => {
    if (err) console.log(err);
    else console.log('data appended');
});

// to read file asynchronously
file.readFile('./content/text.txt', (error, data) => {
    if (error) console.log(error);
    else console.log(data.toString());
});

// //to delete file
// file.unlink("./content/text.txt",(err)=>{
//   if(err)
//   console.log(err);
//   else
//   console.log("file deleted successfully");
// });

// accesss() function
// it will return true or false
file.access('./content/text1.txt', (exists) => {
    if (exists) console.log('file already exists');
    else console.log('file not exists');
});
// file not exists
file.access('./content/text2.txt', (exists) => {
    if (exists) console.log('file already exists');
    else console.log('file not exists');
});

// rename() :- to rename a file
// console.log("reading content after renamingof file");
// file.renameSync("./content/text1.txt","./content/TEXTFILE.txt",(err)=>{
//   if(err) console.log(err);
//   else{
//     require("fs").readFileSync("./content/TEXTFILE.txt",(err,data)=>{
//       if(err){
//         console.log("error :"+err);
//       }else{
//         console.log(data.toString());
//       }
//     });
//   }
// });

// mkdir
// recursive :-
file.mkdir('./newfolder/content', { recursive: true }, (err) => {
    if (err) console.log('folder not created');
    else console.log('folder created');
});

// delete directory
// file.rmdir("./newfolder",{recursive:true,force:true},(err)=>err?console.log(err):console.log("deleted successfully"));

// open Directory
console.log('read file by open ()');
file.open('./content/text.txt', 'w+', (err, fd) => {
    if (err) {
        console.log(err);
    } else {
        console.log('file opened !!');

        // buffer to hold the data read from the file
        const buffer = Buffer.alloc(1024);
        // read() file
        file.read(fd, buffer, 0, buffer.length, 0, (err, byteRead, buffer) => {
            if (err) throw err;
            console.log(byteRead);
            console.log(buffer.toString('utf8', 0, byteRead));
        });
    }

    // it always good pratice to close file after open
    file.close(fd, (err) => {
        if (err) throw err;
        console.log('file closed');
    });
});

// to write in a file
file.open('./content/text.txt', 'w+', (err, fd) => {
    if (err) throw err;
    const content = '\n Hello World';

    // write data into file
    file.write(fd, content, (err, bytesWritten) => {
        if (err) console.log(err);
        console.log(`wrote ${bytesWritten} bytes into the file`);
        // close the file
        file.close(fd, (err) => {
            if (err) console.log(err);
        });
        console.log('file closed');
    });
});
