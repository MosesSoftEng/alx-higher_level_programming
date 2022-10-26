document.addEventListener('DOMContentLoaded', () => {
  $('INPUT#btn_translate').click(() => {
    const lang = $('INPUT#language_code').val()

    const settings = {
      url: `https://fourtonfish.com/hellosalut/?lang=${lang}`,
      method: 'GET',
      timeout: 0
    };

    $.ajax(settings).done(function (response) {
      $('DIV#hello').text(response.hello);
    });    
  });
});
