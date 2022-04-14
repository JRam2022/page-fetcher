`use strict`;

const fs = require('fs');
//takes in arguments
const argv = process.argv.slice(2);

const request = require('request');
request(argv[0], (error, response, body) => {
  //Creates or writes a website to a file
  fs.writeFile(argv[1], body, err => {
    //if error returns it
    if (err) {
      console.error(err);
      return;
    }
    //variable for size of the file downloaded
    let sizeOfFile = body;
    //prints file size and path to console
    console.log(`Downloaded and saved ${sizeOfFile.length} bytes to ${argv[1]}`);
  });
});