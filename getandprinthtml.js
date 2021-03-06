var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    // set encoding of data received to UTF-8
    response.setEncoding('utf8');

    let responseString = '';

    // adds each chunk to the string
    response.on('data', function(chunk) {
      responseString += chunk;
    });

    // print out string at end of response
    response.on('end', function(data) {
      console.log(responseString);
    });
  });
}

getAndPrintHTML();