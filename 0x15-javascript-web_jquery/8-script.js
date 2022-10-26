const settings = {
  url: 'https://swapi-api.hbtn.io/api/films/?format=json',
  method: 'GET',
  timeout: 0
};

$.ajax(settings).done(function (response) {
  response.results.forEach(film => {
    $('#list_movies').append(`<li>${film.title}</li>`);
  });
});
