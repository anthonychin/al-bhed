// function update () {
//   var albhed = document.getElementById('albhed').value;
//   var english = document.getElementById('english').value;
//   if (typeof(albhed[albhed.length-1]) == 'undefined') {
//     var alBhedPhabet = "";
//   } else {
//     var alBhedPhabet = getAlphabet(albhed[albhed.length-1], true);
//   }
//   if (typeof(english[english.length-1]) == 'undefined') {
//     var english = "";
//   }
//   var solution = english + alBhedPhabet;
//   console.log(alBhedPhabet);

//   document.getElementById('english').value = english + alBhedPhabet;
//   alBhedPhabet = "";
// } 

function update () {
  var albhed = document.getElementById('albhed').value;
  var albhedToEnglish = translate(albhed, true);

  document.getElementById('english').value = albhedToEnglish;
}

function update2 () {
  var albhed = document.getElementById('albhed');
  var english = document.getElementById('english');
  var tmp = english.value;  
  albhed.value = tmp;
}

//$(document).ready(function() {
  var letter = {
  A: 'Y',
  B: 'P',
  C: 'L',
  D: 'T',
  E: 'A',
  F: 'V',
  G: 'K',
  H: 'R',
  I: 'E',
  J: 'Z',
  K: 'G',
  L: 'M',
  M: 'S',
  N: 'H',
  O: 'U',
  P: 'B',
  Q: 'X',
  R: 'N',
  S: 'C',
  T: 'D',
  U: 'I',
  V: 'J',
  W: 'F',
  X: 'Q',
  Y: 'O',
  Z: 'W'
  };

  var skip = false;
  // $('#albhed').keyup(function(){
  //   var albhed = $('#albhed').val();
  //   var alBhedPhabet = getAlphabet(albhed, true);
  //   $('#english').val(alBhedPhabet);
  // });

  // $('#english').keyup(function(){
  //   var english = $('#english').val();
  //   //var alBhedPhabet = getAlphabet(albhedToEnglish, false);
  //   $('#albhed').val(english);
  // });

//   function getAlphabet(toDecipher, direction) {
//     console.log(toDecipher);
//     if(toDecipher[toDecipher.length-1] === '[' || skip) {
//       skip = true;
//       return toDecipher;
//     } else if (toDecipher[toDecipher.length-1] === ']') {
//       skip = false;
//       return toDecipher;
//     } else if (String(toDecipher[toDecipher.length-1]).toLowerCase() === toDecipher[toDecipher.length-1]) {
//       var prevValue = toDecipher.substring(0, toDecipher.length - 1);
//       var newValue = String(letter[toDecipher[toDecipher.length-1]]);
// //      console.log(newValue.toLowerCase());
//       return prevValue + newValue.toLowerCase();
//       //return "A";
//     } else {
//       var prevValue = toDecipher.substring(0, toDecipher.length - 1);
//       var newValue = String(letter[toDecipher[toDecipher.length-1]]);
//       return prevValue + newValue;
//     }
//   }
//});
function translate (text, direction) {
  var txt = "";
  var skip;
  for (var i = 0; i < text.length; i++) {
    // if (text[i] === '[' || skip) {
    //   if (text[i] === ']') {
    //     skip = false; 
    //   } else {
    //     skip = true;
    //   }
    //   txt = txt + text[i];
    // } else {
    //   txt = txt + letter[text[i]];
    // }

    if (skip) {
      txt = txt + text[i];
      console.log("skip");
    // [A-z] match alpha, ^ , $ makes nothing but alphabet to match
    } else if (text[i].search(/[a-z]/)) {
      txt = txt + letter[text[i]];
    } else if (text[i].search(/[A-Z]/)) {
      txt = txt + letter[text[i].toUpperCase()].toLowerCase();
    } else {
      if (text[i] === '[') {
        skip = true;
      }
      if (text[i] === ']') {
        skip = false;
      }
      console.log("space");
      txt = txt + text[i]
    }

  }
  return txt;
}

  function getAlphabet(toDecipher, direction) {
    var value = toDecipher;
    if (toDecipher === " ") {
      return " ";
    }
    if (toDecipher.toLowerCase() === toDecipher) {
      value = letter[toDecipher.toUpperCase()].toLowerCase();
    } else {
      value = letter[toDecipher];
    }
    return value;
  }