var through = require('through2');
var upperCaserStream = through(write);
// var upperCaserStream = through(write, end);


function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

// function end (done) {
//  done();
//}


process.stdin.pipe(upperCaserStream).pipe(process.stdout);
process.stdin.read();


