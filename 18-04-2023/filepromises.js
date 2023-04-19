const file = require('fs').promises;

const encoding = 'utf-8';

// create a unquie directory
file.mkdtemp('temp', encoding).then(result =>console.log(result)).catch(result => console.log(result));

// promises.open() and then read file content
file.open('./content/text.txt', 'r')
    .then(fd => {
        return file.readFile(fd, 'utf-8');
    })
    .then(data => console.log(data))
    .catch(result => console.log(result));

// now to write into file
file.open('./content/text.txt', 'a')
    .then(fd => { return file.writeFile(fd, '\n new data written second type here ', 'utf-8'); })
    .catch(err => console.error('error', err));

// mkdir()
file.mkdir('./content/test').then(() => console.log('directory created')).catch(() => console.log('directory not created'));

// opendir
file.opendir('./content/').then(data => console.log('data from text file', data)).catch(err => { console.log(err); });

// to create copy of file
file.copyFile('./content/text.txt', './content/copyoffile.txt').then(() => {
    console.log('copy of file created');
}).catch(err => console.log(err));

// rename of file
file.rename('./content/copyoffile.txt', 'newrename.txt')
    .then(() => console.log('file name changed')).catch((err) => {
        console.log(err);
    });
