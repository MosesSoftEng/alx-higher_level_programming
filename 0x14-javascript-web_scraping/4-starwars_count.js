#!/usr/bin/node
/* Script that prints the number of movies where
 * the character "Wedge Antilles" is present.
 */
// Import modules
const request = require('request');

// Get command arguments
const url = process.argv[2];

// Send get request
request(url, function (error, response, body) {
  const films = JSON.parse(body).results;
  let characterMovieCount = 0;

  if (!error) {
    for (let i = 0; i < films.length; i++) {
      const film = films[i];

      if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
        characterMovieCount++;
      }
    }
  }
  console.log(characterMovieCount);
});
