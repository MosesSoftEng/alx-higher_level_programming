#!/usr/bin/node
/* Script that prints all characters of a Star Wars movie. */
// Import modules
const request = require('request');

// Get command arguments
const movieID = process.argv[2];

const url = 'https://swapi-api.hbtn.io/api/films/' + movieID;

// Send request
request(url, function (error, response, body) {
  if (!error) {
  const film = JSON.parse(body);

  film.characters.forEach(character => {
    request(character, function (error, response, body) {
      if (!error) {
        console.log(JSON.parse(body).name);
      }
      });
  });
  }
});
