var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(body) {
    var out = body.toString().split('').reverse().join('')
    // console.log(out)
    process.stdout.write(out)
  }))


