// console.log("hi")
// process.stdout.write("aasdfsdf" + '\n');

process.stdin.pipe(process.stdout);

/*
process.stdin.setEncoding('utf8');

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

// var fs = require("fs")
// fs.createReadStream(process.argv[2]).pipe(process.stdout)


