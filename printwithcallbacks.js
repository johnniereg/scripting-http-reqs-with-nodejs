var https = require('https');

function getHTML (options, callback) {

  https.get(options, function(response) {

    // set encoding of data received to UTF-8
    response.setEncoding('utf8');

    let responseString = '';

    // adds each chunk to the string
    response.on('data', function(chunk) {
      responseString += chunk;
    });

    // At end invokes the callback function.
    response.on('end', function(data) {
      callback(responseString);
    });
  });

};

function printHTML(html) {
  console.log("The html is: ", html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);