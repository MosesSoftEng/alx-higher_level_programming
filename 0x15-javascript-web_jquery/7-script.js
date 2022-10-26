const settings = {
  url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
  method: 'GET',
  timeout: 0
};

$.ajax(settings).done((response) => {
  $('DIV#character').html(response.name);
});
