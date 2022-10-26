$('DIV#add_item').click(() => {
  const list = $('UL.my_list');

  list.append('<li>Item</li>');
});
