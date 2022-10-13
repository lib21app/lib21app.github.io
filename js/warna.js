$(document).ready(function () {

    var colors = ['#182747', '#562B08', '#4C0033', '#16213E', '#0F3460', '#4C3A51', '#2C3333', '#B25068', '#774360', '#2E0249', '#570A57', '#1F1D36', '#3F3351', '#191A19', '#1D2D50', '#133B5C', '#511845'];

    $('.color-change').each(function () {
      var new_color = colors[Math.floor(Math.random() * colors.length)];
      $(this).css('background-color', new_color);
    });

  }); 