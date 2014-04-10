function albhedToEnglish () {
  var albhed = document.getElementById('albhed').value;
  var albhedToEnglish = translate(albhed, false);

  document.getElementById('english').value = albhedToEnglish;
}

function englishToAlbhed () {
  var english = document.getElementById('english').value;
  var englishToAlbhed = translate(english, true);

  document.getElementById('albhed').value = englishToAlbhed;
}

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

function translate (text, order) {
  var txt = "";
  var skip;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === '[') {
      skip = true;
    }
    if (text[i] === ']') {
      skip = false;
    }

    if (skip) {
      txt = txt + text[i];
    } else if (text[i].search(/[a-z]/) != -1) {
      if (order) {
        txt = txt + letter[text[i].toUpperCase()].toLowerCase();
      } else {
        txt = txt + letter.getKey(text[i].toUpperCase()).toLowerCase();
      }
    } else if (text[i].search(/[A-Z]/) != -1) {
      if (order) {
        txt = txt + letter[text[i]];
      } else {
        txt = txt + letter.getKey(text[i]);
      }
    } else {
      txt = txt + text[i]
    }

  }
  return txt;
}

Object.prototype.getKey = function(value){
  for(var key in this){
    if(this[key] == value){
      return key;
    }
  }
  return null;
};