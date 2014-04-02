// function update () {
//   var albhed = document.getElementById('albhed');
//   var english = document.getElementById('english');
//   var tmp = albhed.value;  
//   english.value = tmp;
// } 

// function update2 () {
//   var albhed = document.getElementById('albhed');
//   var english = document.getElementById('english');
//   var tmp = english.value;  
//   albhed.value = tmp;
// }

$(document).ready(function() {
  $('#albhed').keyup(function(){
    var albhed = $('#albhed').val();
    //var alBhedPhabet = getAlphabet(albhedToEnglish, 1);
    $('#english').val(albhed);
  });

  $('#english').keyup(function(){
    var english = $('#english').val();
    //var alBhedPhabet = getAlphabet(albhedToEnglish, 1);
    $('#albhed').val(english);
  });  
});

// var letter = {
//   A = 'Y',
//   B = 'P',
//   C = 'L',
//   D = 'T',
//   E = 'A',
//   F = 'V',
//   G = 'K',
//   H = 'R',
//   I = 'E',
//   J = 'Z',
//   K = 'G',
//   L = 'M',
//   M = 'S',
//   N = 'H',
//   O = 'U',
//   P = 'B',
//   Q = 'X',
//   R = 'N',
//   S = 'C',
//   T = 'D',
//   U = 'I',
//   V = 'J',
//   W = 'F',
//   X = 'Q',
//   Y = 'O',
//   Z = 'W'
// }

// function getAlphabet(toDecipher, direction) {

// }