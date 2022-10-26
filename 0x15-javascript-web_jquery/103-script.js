document.addEventListener('DOMContentLoaded', () => {
  function translate () {
    const lang = $('INPUT#language_code').val()

    const settings = {
      url: `https://fourtonfish.com/hellosalut/?lang=${lang}`,
      method: 'GET',
      timeout: 0
    };

    $.ajax(settings).done(function (response) {
      $('DIV#hello').text(response.hello);
    });
  }

  $('INPUT#language_code').focus(function () {
    $(this).keydown(function (e) {
      if (e.keyCode === 13) {
        translate();
      }
    });
  });

  $('INPUT#btn_translate').click(() => {
    translate();
  });
});
