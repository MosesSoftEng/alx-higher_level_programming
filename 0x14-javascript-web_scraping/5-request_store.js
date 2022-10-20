#!/usr/bin/node
/* Script that gets the contents of a webpage and stores it in a file. */
// Import modules
const request = require('request');
const fs = require('fs');

// Get command arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send get request
request(url, function (error, response, body) {
  if (!error) {
    // Write to file
    fs.writeFile(filePath, body, 'utf-8', function (error) {
      if (error) {
        console.log(error);
      }
    });
  }
});
