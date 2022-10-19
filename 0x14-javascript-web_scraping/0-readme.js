#!/usr/bin/node
/* Script that reads and prints the content of a file in utf-8 */
// Include built in module
const fs = require('fs');

// Get first argument
const filePath = process.argv[2];

// Read file
fs.readFile(filePath, 'utf-8', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
