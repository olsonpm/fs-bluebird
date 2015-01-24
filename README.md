# fs-bluebird

The intention of this library is to retain the same *Async prefix syntax while also covering the edge case of fs.exists (which doesn't follow the [error, result] callback parameter pattern).

If there are more edge cases to take care of I will be happy to add them to this library.  Better yet, you could send me a pull request with the fix and associated mocha test and I'll merge.

###fs.existsAsync example:

```
var bFs = require('fs-bluebird');

var fileThatExists = './index.js';

bFs.existsAsync(fileThatExists)
  .then(function(exists) {
    if (exists) {
      // do something with file
    }
  });
```

Feel free to contact me with questions
