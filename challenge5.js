var through = require('through2');
var split = require('split');

var lineNum = 0;

process.stdin
  .pipe(split())
  .pipe(through( function(line, _, next) {
    text = line.toString()
    if (lineNum % 2 == 1) {
      text = text.toUpperCase()
    }
    else {
      text = text.toLowerCase()
    }
      
    this.push(text + '\n')
    lineNum++
    next();    
  })).pipe(process.stdout);



/*
function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}
*/

//function end (done) {
//  done();
//}

// process.stdin.setEncoding('utf8');


/*
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  process.stdout.write("Enter your name: ");

  if (chunk !== null) {
    process.stdout.write('Hi, ' + chunk.trim() + "!");
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});
*/


// process.stdin.pipe(split()).pipe(process.stdout);


process.stdin.read();

