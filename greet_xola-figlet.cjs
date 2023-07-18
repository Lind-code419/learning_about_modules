var figlet = require('figlet');
var greet = import('.greet');

figlet(greet('Xola'), function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });