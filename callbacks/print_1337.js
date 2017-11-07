// Not complete - to be returned to as a stretch exercise.

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function switchLetters (letter) {
  switch(letter) {
    case 'a': return '4';
    case 'e': return '3';
    case 'l': return '1';
    case 'o': return '0';
    case 's': return '5';
    case 't': return '7';
    default: return letter;
  }
}

function print1337 (html) {

  var stringedArray = html.split("");

  var leetString = "";

  stringedArray.forEach(function(letter) {

    leetString += switchLetters(letter);

  });

  console.log(leetString);
};

getHTML(requestOptions, print1337);