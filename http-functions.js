module.exports = function getHTML (options, callback) {

  const https = require('https');

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