const fsPromises = require('fs/promises')

// const fs = require('fs')
// const a = fs.readFileSync('a.txt').toString();

console.log('antes de ler')


// const a = fsPromises.readFile('a.txt');

// a.then((data) => {
//     console.log(data.toString());
// });

// a.catch((erro) => {
//     console.log(erro);
// });

(async () => {
    const a = await fsPromises.readFile('a.txt');
    console.log(a.toString);
})();

console.log('depois de ler');