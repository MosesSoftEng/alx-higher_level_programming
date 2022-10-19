#!/usr/bin/node
/* Script that script that writes a string to a file in utf-8. */
// Include built in module
const fs = require('fs');

// Get command arguments
const filePath = process.argv[2];
const str = process.argv[3];

// Write to file
fs.writeFile(filePath, str, 'utf-8', function (error) {
  if (error) {
    console.log(error);
  }
});
