#!/usr/bin/node
/* Script that reads and prints the content of a file in utf-8 */
// Import modules
const request = require('request');

// Get command arguments
const url = process.argv[2];

// Send get request
request.get(url).on('response', function (response) {
  console.log('code:', response.statusCode);
});
