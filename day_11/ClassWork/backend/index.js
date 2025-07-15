// const os = require('os');


// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.machine());
// console.log(os.homedir());
// console.log(os.platform());
// console.log(os.version());


// const http = require('http');
// console.log(http.STATUS_CODES);


// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);

// const console = require('node:console');
// console.log(console.error(new Error('Whoops, something bad happened')));

// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }, { a: 'Z', b: 2 }, { a: 3, b: 4 }]);
// console.log(console.time());   //undefined
// console.log(console.time('bunch-of-stuff'));  //undefined

// const crypto=require('node:crypto');
// console.log(crypto.randomBytes(16).toString('hex')); // Generates a random 16-byte hex string
// console.log(crypto.createHash('sha256').update('Hello World!').digest('hex')); // Hashes 'Hello World!' with SHA-256
// console.log(crypto.createCipheriv('aes-256-cbc', crypto.randomBytes(32), crypto.randomBytes(16)).update('Hello World!', 'utf8', 'hex')); // Encrypts 'Hello World!' with AES-256-CBC


// const fs = require('fs');
// const path = require('path');
// console.log(fs);
// console.log(path);


// const url=require('node:url');
// console.log(url);
// const myURL = new URL('https://example.com:8000/path/name?query=string#hash');
// console.log(myURL.href); // 'https://example.com:8000/path/name?query
// console.log(myURL.hostname); // 'example.com'
// console.log(myURL.port); // '8000'  


// const domain =require('domain');
// console.log(domain);

// const stream = require('node:stream');
// console.log(stream);

