#!/usr/bin/node
/* Script that prints the title of a Star Wars movie. */
// Import modules
const request = require('request');

// Get command arguments
const episodeNumber = process.argv[2];

const url = 'https://swapi-api.hbtn.io/api/films/' + episodeNumber;

// Send get request
request(url, function (error, response, body) {
  const episode = JSON.parse(body);
  if (!error) console.log(episode.title);
});
