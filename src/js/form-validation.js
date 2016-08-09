$('.zip-code').on('input', function() {

  var zip = $(this).val();
  var length = zip.length;

  $(this).css({'border-color': 'red', 'box-shadow': '0 0 10px red'});
  $(this).removeClass('validZip');
  if (length === 5) {
    $(this).css({'border-color': '#428bca', 'box-shadow': '0 0 10px #428bca'}).addClass('validZip');
  }
});

$('.zip-code').on('blur', function() {
  if ($(this).hasClass('validZip')) {
    $(this).css({'border-color': '', 'box-shadow': ''});
  }
});
