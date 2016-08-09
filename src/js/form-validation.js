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

// Checks if home address includes 'apartment', '#', or ends in a number
$('#home-address').on('input', function() {

  var str = $(this).val();
  var strLength = str.length;
  var splitStr = str.split('');

  if (str.toLowerCase().indexOf('apartment') > -1) {
    $(this).css({'border-color': 'red', 'box-shadow': '0 0 10px red'});
    $(this).removeClass('validAddress');
  } else if (str.toLowerCase().indexOf('#') > -1) {

    $(this).css({'border-color': 'red', 'box-shadow': '0 0 10px red'});
    $(this).removeClass('validAddress');

  } else if (splitStr[strLength - 1] === '1' || splitStr[strLength - 1] === '2' || splitStr[strLength - 1] === '3' || splitStr[strLength - 1] === '4' || splitStr[strLength - 1] === '5' || splitStr[strLength - 1] === '6' || splitStr[strLength - 1] === '7' || splitStr[strLength - 1] === '8' || splitStr[strLength - 1] === '9' || splitStr[strLength - 1] === '0') {

    $(this).css({'border-color': 'red', 'box-shadow': '0 0 10px red'});
    $(this).removeClass('validAddress');

  } else {

    $(this).css({'border-color': '#428bca', 'box-shadow': '0 0 10px #428bca'}).addClass('validAddress');
  }
});

$('#home-address').on('blur', function() {
  if ($(this).hasClass('validAddress')) {
    $(this).css({'border-color': '', 'box-shadow': ''});
  }
});
