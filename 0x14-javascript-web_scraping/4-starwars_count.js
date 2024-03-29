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
    // Loop films
    for (let i = 0; i < films.length; i++) {
      const film = films[i];

      // Loop films characters
      for (let j = 0; j < film.characters.length; j++) {
        if (film.characters[j].endsWith('/18/')) {
          characterMovieCount++;
          // Check once only
          break;
        }
      }
    }
  }
  console.log(characterMovieCount);
});
