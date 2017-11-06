var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    // set encoding of data received to UTF-8
    response.setEncoding('utf8');

    // print out data as it is received, put new line between
    response.on('data', function(data) {
      console.log(data + '\n');
    });
  });
}

getAndPrintHTMLChunks();