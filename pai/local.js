$(document).ready(function() {
  var $button = $('.add-item');
  var $input = $('.input');
  var $list = $('.list');
  // get items from local storage
  if (localStorage.getItem('user-input')) {
    // select where the storage will be
    $list.html(localStorage.getItem('user-input'));
  }
  // add item 
  $button.on('click', function() {

    $list.append('<li>' + $input.val() + '<span class ="close"> x</span></li>');

    // set to html inside the list
    localStorage.setItem('user-input', $list.html());

    $input.val('');

  });

  // edit list item
  $('.list').click('li', function() {

    $('.list li').attr('contenteditable', 'true');

  });

  // update list
  $('.update').on('click', function() {
    // set to html inside the list
    console.log('update');
    localStorage.setItem('user-input', $list.html());
  });

  // remove item
  $('.list').on('click', '.close', function() {
    $(this).parent().remove();
    // save changes to local storage
    localStorage.setItem('user-input', $list.html());
  });
  // clear the storage memory completely
 localStorage.clear();
});