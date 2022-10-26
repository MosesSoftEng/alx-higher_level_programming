const settings = {
  url: 'https://fourtonfish.com/hellosalut/?lang=fr',
  method: 'GET',
  timeout: 0
};

$.ajax(settings).done(function (response) {
  $('DIV#hello').text(response.hello);
});
