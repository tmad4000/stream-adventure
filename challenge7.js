// stream-adventure/challenge 7 - http server
var through = require('through2');
var http = require('http');

function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}
function end (done) { done(); }


var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(write, end)).pipe(res)
  }
  else {
    res.end('Send me a POST\n');
  }
})
server.listen(process.argv[2]);
